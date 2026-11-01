/* Kurator — Excel (.xlsx) o'qish va yozish. Faqat JSZip ishlatiladi, internet kerak emas. */
(function (global) {
  "use strict";

  /* ---------------- Umumiy yordamchilar ---------------- */
  function parseXml(text) { return new DOMParser().parseFromString(text, "application/xml"); }
  function byTag(node, local) {
    // nom maydonidan (namespace) qat'i nazar teg bo'yicha qidirish
    var out = [], all = node.getElementsByTagName("*");
    for (var i = 0; i < all.length; i++) if (all[i].localName === local) out.push(all[i]);
    return out;
  }
  function firstTag(node, local) {
    var all = node.getElementsByTagName("*");
    for (var i = 0; i < all.length; i++) if (all[i].localName === local) return all[i];
    return null;
  }
  function childTags(node, local) {
    var out = [];
    for (var c = node.firstElementChild; c; c = c.nextElementSibling) if (c.localName === local) out.push(c);
    return out;
  }
  function attrNS(el, local) {
    // r:id, r:embed kabi atributlar
    for (var i = 0; i < el.attributes.length; i++) {
      var a = el.attributes[i];
      if (a.localName === local) return a.value;
    }
    return null;
  }
  function resolvePath(base, target) {
    if (target.charAt(0) === "/") return target.slice(1);
    var parts = base.split("/"); parts.pop();
    target.split("/").forEach(function (p) {
      if (p === "..") parts.pop(); else if (p !== "." && p !== "") parts.push(p);
    });
    return parts.join("/");
  }
  function relsPathFor(path) {
    var i = path.lastIndexOf("/");
    return path.slice(0, i) + "/_rels/" + path.slice(i + 1) + ".rels";
  }
  async function readRels(zip, path) {
    var f = zip.file(relsPathFor(path)), map = {};
    if (!f) return map;
    var doc = parseXml(await f.async("string"));
    byTag(doc, "Relationship").forEach(function (r) {
      map[r.getAttribute("Id")] = {
        target: r.getAttribute("TargetMode") === "External" ? r.getAttribute("Target") : resolvePath(path, r.getAttribute("Target")),
        type: r.getAttribute("Type") || ""
      };
    });
    return map;
  }
  function colToNum(col) { var n = 0; for (var i = 0; i < col.length; i++) n = n * 26 + (col.charCodeAt(i) - 64); return n; }
  function numToCol(n) { var s = ""; while (n > 0) { var m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); } return s; }
  function textOf(el) {
    // <si> yoki <is>: oddiy <t> yoki bir nechta <r><t>
    if (!el) return "";
    var ts = byTag(el, "t"), s = "";
    for (var i = 0; i < ts.length; i++) {
      // fonetik (rPh) qismlarini tashlab yuborish
      var p = ts[i].parentNode;
      if (p && p.localName === "rPh") continue;
      s += ts[i].textContent;
    }
    return s;
  }

  /* ---------------- O'QISH ---------------- */
  async function readWorkbook(fileOrBuffer) {
    var zip = await JSZip.loadAsync(fileOrBuffer);
    var wbPath = "xl/workbook.xml";
    var wbFile = zip.file(wbPath);
    if (!wbFile) throw new Error("Bu Excel (.xlsx) fayl emas.");
    var wbDoc = parseXml(await wbFile.async("string"));
    var wbRels = await readRels(zip, wbPath);

    var shared = [];
    var ssRel = Object.keys(wbRels).map(function (k) { return wbRels[k]; }).filter(function (r) { return /sharedStrings$/.test(r.type); })[0];
    var ssPath = ssRel ? ssRel.target : "xl/sharedStrings.xml";
    if (zip.file(ssPath)) {
      var ssDoc = parseXml(await zip.file(ssPath).async("string"));
      shared = childTags(ssDoc.documentElement, "si").map(textOf);
    }

    var sheets = [];
    var sheetEls = byTag(wbDoc, "sheet");
    for (var i = 0; i < sheetEls.length; i++) {
      var el = sheetEls[i], rid = attrNS(el, "id"), rel = wbRels[rid];
      if (!rel || !zip.file(rel.target)) continue;
      sheets.push({ name: el.getAttribute("name"), path: rel.target });
    }

    async function loadSheet(sh) {
      var doc = parseXml(await zip.file(sh.path).async("string"));
      var rows = {}; // rows[r][c] = qiymat (1-asosli)
      byTag(doc, "c").forEach(function (c) {
        var ref = c.getAttribute("r"); if (!ref) return;
        var m = /^([A-Z]+)(\d+)$/.exec(ref); if (!m) return;
        var col = colToNum(m[1]), row = +m[2], t = c.getAttribute("t"), v = firstTag(c, "v"), val = null;
        if (t === "s") val = v ? shared[+v.textContent] : "";
        else if (t === "inlineStr") val = textOf(firstTag(c, "is"));
        else if (t === "str" || t === "e") val = v ? v.textContent : "";
        else if (t === "b") val = v ? (v.textContent === "1") : null;
        else if (v) { var num = parseFloat(v.textContent); val = isNaN(num) ? v.textContent : num; }
        if (val === null || val === "") return;
        (rows[row] = rows[row] || {})[col] = val;
      });
      var merges = byTag(doc, "mergeCell").map(function (m) { return m.getAttribute("ref"); });
      // Rasmlar: varaq -> drawing -> rasm fayllari
      var images = [];
      var shRels = await readRels(zip, sh.path);
      for (var k in shRels) {
        if (!/\/drawing$/.test(shRels[k].type)) continue;
        var dPath = shRels[k].target, dFile = zip.file(dPath); if (!dFile) continue;
        var dDoc = parseXml(await dFile.async("string")), dRels = await readRels(zip, dPath);
        var anchors = byTag(dDoc, "twoCellAnchor").concat(byTag(dDoc, "oneCellAnchor")).concat(byTag(dDoc, "absoluteAnchor"));
        for (var a = 0; a < anchors.length; a++) {
          var from = firstTag(anchors[a], "from"), blip = firstTag(anchors[a], "blip");
          if (!from || !blip) continue;
          var rowEl = firstTag(from, "row"), colEl = firstTag(from, "col");
          var emb = attrNS(blip, "embed"), mrel = dRels[emb];
          if (!mrel || !zip.file(mrel.target)) continue;
          images.push({
            row: +rowEl.textContent + 1, col: +colEl.textContent + 1,
            path: mrel.target,
            getBlob: (function (p) { return function () { return zip.file(p).async("blob"); }; })(mrel.target)
          });
        }
      }
      return { name: sh.name, rows: rows, merges: merges, images: images };
    }

    return { sheets: sheets, loadSheet: loadSheet };
  }

  /* ---------------- YOZISH ----------------
     sheet = { name, cols:[kenglik...], rows:[[cell,...],...], merges:["A1:D1"], freeze:"A4" }
     cell = qiymat yoki { v, s }  (s: uslub nomi)                                          */
  var STYLE_IDS = { normal: 0, header: 1, cell: 2, title: 3, section: 4, num: 5, good: 6, bad: 7, warn: 8, bold: 9 };

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; })
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
  }
  function sheetXml(sh) {
    var x = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
      '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
      '<sheetPr><pageSetUpPr fitToPage="1"/></sheetPr>';
    if (sh.freeze) {
      var fm = /^([A-Z]+)(\d+)$/.exec(sh.freeze), xs = colToNum(fm[1]) - 1, ys = +fm[2] - 1;
      x += '<sheetViews><sheetView workbookViewId="0"><pane' + (xs ? ' xSplit="' + xs + '"' : "") + (ys ? ' ySplit="' + ys + '"' : "") +
        ' topLeftCell="' + sh.freeze + '" activePane="' + (xs && ys ? "bottomRight" : ys ? "bottomLeft" : "topRight") + '" state="frozen"/></sheetView></sheetViews>';
    }
    x += '<sheetFormatPr defaultRowHeight="15"/>';
    if (sh.cols && sh.cols.length) {
      x += "<cols>";
      sh.cols.forEach(function (w, i) { x += '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + w + '" customWidth="1"/>'; });
      x += "</cols>";
    }
    x += "<sheetData>";
    (sh.rows || []).forEach(function (row, ri) {
      if (!row) return;
      var r = ri + 1, h = sh.heights && sh.heights[ri];
      x += '<row r="' + r + '"' + (h ? ' ht="' + h + '" customHeight="1"' : "") + ">";
      row.forEach(function (cell, ci) {
        if (cell === undefined || cell === null) return;
        var v = cell, s = 0;
        if (typeof cell === "object" && !(cell instanceof Date)) { v = cell.v; s = STYLE_IDS[cell.s] || 0; }
        var ref = numToCol(ci + 1) + r;
        if (v === undefined || v === null || v === "") { if (s) x += '<c r="' + ref + '" s="' + s + '"/>'; return; }
        if (typeof v === "number" && isFinite(v)) x += '<c r="' + ref + '" s="' + s + '"><v>' + v + "</v></c>";
        else x += '<c r="' + ref + '" s="' + s + '" t="inlineStr"><is><t xml:space="preserve">' + esc(v) + "</t></is></c>";
      });
      x += "</row>";
    });
    x += "</sheetData>";
    if (sh.merges && sh.merges.length) {
      x += '<mergeCells count="' + sh.merges.length + '">';
      sh.merges.forEach(function (m) { x += '<mergeCell ref="' + m + '"/>'; });
      x += "</mergeCells>";
    }
    x += '<pageMargins left="0.4" right="0.4" top="0.5" bottom="0.5" header="0.3" footer="0.3"/>';
    x += '<pageSetup orientation="landscape" paperSize="9" fitToWidth="1" fitToHeight="0"/>';
    x += "</worksheet>";
    return x;
  }
  var STYLES_XML = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n' +
    '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
    '<fonts count="4">' +
    '<font><sz val="11"/><name val="Calibri"/><family val="2"/></font>' +
    '<font><b/><sz val="11"/><name val="Calibri"/><family val="2"/></font>' +
    '<font><b/><sz val="14"/><name val="Calibri"/><family val="2"/></font>' +
    '<font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Calibri"/><family val="2"/></font>' +
    "</fonts>" +
    '<fills count="7">' +
    '<fill><patternFill patternType="none"/></fill>' +
    '<fill><patternFill patternType="gray125"/></fill>' +
    '<fill><patternFill patternType="solid"><fgColor rgb="FF0F5257"/><bgColor indexed="64"/></patternFill></fill>' +
    '<fill><patternFill patternType="solid"><fgColor rgb="FFDCEDEB"/><bgColor indexed="64"/></patternFill></fill>' +
    '<fill><patternFill patternType="solid"><fgColor rgb="FFDFF3E4"/><bgColor indexed="64"/></patternFill></fill>' +
    '<fill><patternFill patternType="solid"><fgColor rgb="FFFBE0DC"/><bgColor indexed="64"/></patternFill></fill>' +
    '<fill><patternFill patternType="solid"><fgColor rgb="FFFFF1D6"/><bgColor indexed="64"/></patternFill></fill>' +
    "</fills>" +
    '<borders count="2">' +
    "<border><left/><right/><top/><bottom/><diagonal/></border>" +
    '<border><left style="thin"><color rgb="FF9AA5A6"/></left><right style="thin"><color rgb="FF9AA5A6"/></right><top style="thin"><color rgb="FF9AA5A6"/></top><bottom style="thin"><color rgb="FF9AA5A6"/></bottom><diagonal/></border>' +
    "</borders>" +
    '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>' +
    '<cellXfs count="10">' +
    '<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>' +
    '<xf numFmtId="0" fontId="3" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>' +
    '<xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf>' +
    '<xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>' +
    '<xf numFmtId="0" fontId="1" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="left" vertical="center"/></xf>' +
    '<xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>' +
    '<xf numFmtId="0" fontId="0" fillId="4" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>' +
    '<xf numFmtId="0" fontId="1" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>' +
    '<xf numFmtId="0" fontId="0" fillId="6" borderId="1" xfId="0" applyFill="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>' +
    '<xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1"/></xf>' +
    "</cellXfs>" +
    '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>' +
    "</styleSheet>";

  function safeSheetName(n, used) {
    var s = String(n).replace(/[\\\/\?\*\[\]:]/g, " ").slice(0, 31).trim() || "Varaq";
    var base = s, i = 2;
    while (used[s.toLowerCase()]) { s = base.slice(0, 28) + " " + i++; }
    used[s.toLowerCase()] = 1;
    return s;
  }

  async function writeWorkbook(sheets) {
    var zip = new JSZip(), used = {};
    var ct = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
      '<Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' +
      '<Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>';
    var wb = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>';
    var wbRels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
    sheets.forEach(function (sh, i) {
      var n = i + 1;
      zip.file("xl/worksheets/sheet" + n + ".xml", sheetXml(sh));
      ct += '<Override PartName="/xl/worksheets/sheet' + n + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>';
      wb += '<sheet name="' + esc(safeSheetName(sh.name, used)) + '" sheetId="' + n + '" r:id="rId' + n + '"/>';
      wbRels += '<Relationship Id="rId' + n + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + n + '.xml"/>';
    });
    wb += "</sheets></workbook>";
    wbRels += '<Relationship Id="rId' + (sheets.length + 1) + '" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>';
    ct += "</Types>";
    zip.file("[Content_Types].xml", ct);
    zip.file("_rels/.rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>');
    zip.file("xl/workbook.xml", wb);
    zip.file("xl/_rels/workbook.xml.rels", wbRels);
    zip.file("xl/styles.xml", STYLES_XML);
    return zip.generateAsync({ type: "base64", compression: "DEFLATE", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  }

  global.XlsxIO = { readWorkbook: readWorkbook, writeWorkbook: writeWorkbook, colToNum: colToNum, numToCol: numToCol };
})(window);
