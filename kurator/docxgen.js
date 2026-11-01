/* Obyektivka (ma'lumotnoma) uchun Word (.docx) faylini brauzerning o'zida yaratish. Faqat JSZip ishlatiladi. */
(function (global) {
  "use strict";
  var FONT = "Times New Roman";
  function x(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; })
      .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
  }
  function run(text, o) {
    o = o || {};
    var pr = '<w:rFonts w:ascii="' + FONT + '" w:hAnsi="' + FONT + '" w:cs="' + FONT + '"/>' + (o.b ? "<w:b/>" : "") +
      (o.color ? '<w:color w:val="' + o.color + '"/>' : "") + '<w:sz w:val="' + (o.sz || 24) + '"/><w:szCs w:val="' + (o.sz || 24) + '"/>';
    return '<w:r><w:rPr>' + pr + '</w:rPr><w:t xml:space="preserve">' + x(text) + "</w:t></w:r>";
  }
  function p(text, o) {
    o = o || {};
    var ppr = '<w:pPr><w:spacing w:before="0" w:after="' + (o.after || 0) + '" w:line="240" w:lineRule="auto"/>' + (o.jc ? '<w:jc w:val="' + o.jc + '"/>' : "") + "</w:pPr>";
    return "<w:p>" + ppr + (text ? run(text, o) : "") + (o.extra || "") + "</w:p>";
  }
  var BORDER = '<w:tcBorders><w:top w:val="single" w:sz="4" w:color="000000"/><w:left w:val="single" w:sz="4" w:color="000000"/><w:bottom w:val="single" w:sz="4" w:color="000000"/><w:right w:val="single" w:sz="4" w:color="000000"/></w:tcBorders>';
  function cell(content, w, bordered) {
    return '<w:tc><w:tcPr><w:tcW w:w="' + w + '" w:type="dxa"/>' + (bordered ? BORDER : "") + '<w:vAlign w:val="center"/></w:tcPr>' + content + "</w:tc>";
  }
  function table(rows, widths, bordered) {
    var t = '<w:tbl><w:tblPr><w:tblW w:w="' + widths.reduce(function (a, b) { return a + b; }, 0) + '" w:type="dxa"/><w:jc w:val="center"/><w:tblLayout w:type="fixed"/>' +
      (bordered ? "" : '<w:tblBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders>') +
      '<w:tblCellMar><w:left w:w="80" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tblCellMar></w:tblPr><w:tblGrid>';
    widths.forEach(function (w) { t += '<w:gridCol w:w="' + w + '"/>'; });
    t += "</w:tblGrid>";
    rows.forEach(function (r) { t += "<w:tr>" + r.map(function (c, i) { return cell(c, widths[i], bordered); }).join("") + "</w:tr>"; });
    return t + "</w:tbl>";
  }
  function image(rid, cx, cy) {
    return '<w:r><w:drawing><wp:inline distT="0" distB="0" distL="0" distR="0"><wp:extent cx="' + cx + '" cy="' + cy + '"/><wp:docPr id="1" name="Rasm"/>' +
      '<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">' +
      '<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="1" name="rasm.jpg"/><pic:cNvPicPr/></pic:nvPicPr>' +
      '<pic:blipFill><a:blip r:embed="' + rid + '"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill>' +
      '<pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="' + cx + '" cy="' + cy + '"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic>' +
      "</a:graphicData></a:graphic></wp:inline></w:drawing></w:r>";
  }
  function field(label, val) {
    var miss = !val || val === "—";
    return p(label, { b: true }) + p(val || "—", { after: 120, color: miss ? "B03020" : null });
  }

  async function build(ob, photoDataUrl) {
    var f = ob.f, body = "";
    body += p("MA’LUMOTNOMA", { b: true, sz: 28, jc: "center", after: 200 });
    var left = p(ob.fish, { b: true, sz: 28, jc: "center", after: 160 }) + p(ob.davr) + p(ob.status);
    var right = photoDataUrl ? p("", { jc: "right", extra: image("rIdImg", 1080000, 1440000) }) : p("");
    body += table([[left, right]], [7370, 2270], false);
    body += p("", { after: 120 });
    var grid = [["Tug‘ilgan yili:", f.tug, "Tug‘ilgan joyi:", f.tj], ["Millati:", f.millat, "Partiyaviyligi:", f.part],
      ["Ma’lumoti:", f.mal, "Tamomlagan:", f.tam], ["Ma’lumoti bo‘yicha mutaxassisligi:", f.mut, "Qaysi chet tillarini biladi:", f.til],
      ["Ilmiy darajasi:", f.ild, "Ilmiy unvoni:", f.ilu]];
    body += table(grid.map(function (g) { return [field(g[0], g[1]), field(g[2], g[3])]; }), [4820, 4820], false);
    body += field("Davlat mukofotlari bilan taqdirlanganmi (qanaqa):", f.muk);
    body += field("Xalq deputatlari, respublika, viloyat, shahar va tuman Kengashi deputatimi yoki boshqa saylanadigan organlarning a’zosimi (to‘liq ko‘rsatilishi lozim):", f.dep);
    body += p("MEHNAT FAOLIYATI", { b: true, jc: "center", after: 120 });
    body += table(ob.mehnat.map(function (m) { return [p(m[0] + " –"), p(m[1], { after: 80 })]; }), [2380, 7260], false);
    body += '<w:p><w:r><w:br w:type="page"/></w:r></w:p>';
    body += p(ob.fish + "ning yaqin qarindoshlari haqida", { b: true, sz: 26, jc: "center" });
    body += p("MA’LUMOT", { b: true, sz: 26, jc: "center", after: 160 });
    var heads = ["Qarindoshligi", "Familiyasi, ismi va otasining ismi", "Tug‘ilgan yili va joyi", "Ish joyi va lavozimi", "Turar joyi"];
    var rows = [heads.map(function (h) { return p(h, { b: true, sz: 22, jc: "center" }); })];
    ob.q.forEach(function (r) {
      rows.push(r.map(function (v, i) { var miss = !v || v === "—"; return p(v || "—", { sz: 22, b: i === 0, jc: (i === 0 || i === 2) ? "center" : null, color: miss ? "B03020" : null }); }));
    });
    body += table(rows, [1360, 2150, 1930, 2150, 2050], true);

    var doc = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" ' +
      'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"><w:body>' + body +
      '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="850" w:right="850" w:bottom="850" w:left="1418" w:header="567" w:footer="567" w:gutter="0"/></w:sectPr></w:body></w:document>';
    var zip = new JSZip();
    zip.file("[Content_Types].xml", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>' +
      '<Default Extension="jpeg" ContentType="image/jpeg"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/></Types>');
    zip.file("_rels/.rels", '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>');
    var rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
    if (photoDataUrl) {
      rels += '<Relationship Id="rIdImg" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/rasm.jpeg"/>';
      zip.file("word/media/rasm.jpeg", photoDataUrl.split(",")[1], { base64: true });
    }
    zip.file("word/_rels/document.xml.rels", rels + "</Relationships>");
    zip.file("word/document.xml", doc);
    return zip.generateAsync({ type: "base64", compression: "DEFLATE" });
  }
  global.DocxGen = { build: build };
})(window);
