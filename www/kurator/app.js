/* Kurator yordamchisi — barcha ma'lumotlar faqat shu telefonda saqlanadi. */
(function () {
"use strict";

/* =================== Yordamchilar =================== */
var $ = function (id) { return document.getElementById(id); };
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function pad(n) { return (n < 10 ? "0" : "") + n; }
function isoDate(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
function todayIso() { return isoDate(new Date()); }
function parseIso(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
function fmtDate(iso) { if (!iso) return ""; var p = iso.split("-"); return p[2] + "." + p[1] + "." + p[0]; }
var OYLAR = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
var KUNLAR = ["yakshanba", "dushanba", "seshanba", "chorshanba", "payshanba", "juma", "shanba"];
function longDate(iso) { var d = parseIso(iso); return d.getDate() + "-" + OYLAR[d.getMonth()]; }
function svg(id, cls) { return '<svg class="i' + (cls ? " " + cls : "") + '"><use href="#' + id + '"/></svg>'; }

var CYR = { "а": "a", "б": "b", "в": "v", "г": "g", "ғ": "g", "д": "d", "е": "e", "ё": "yo", "ж": "j", "з": "z", "и": "i", "й": "y", "к": "k", "қ": "q", "л": "l", "м": "m", "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u", "ў": "o", "ф": "f", "х": "x", "ҳ": "h", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "sh", "ъ": "", "ы": "i", "ь": "", "э": "e", "ю": "yu", "я": "ya" };
// Taqqoslash uchun: kichik harf, kirill -> lotin, apostroflar olib tashlanadi
function norm(s) {
  s = String(s == null ? "" : s).toLowerCase();
  s = s.replace(/[Ѐ-ӿ]/g, function (c) { return CYR[c] != null ? CYR[c] : c; });
  return s.replace(/[ʻʼ‘’'`´ʹ]/g, "").replace(/\s+/g, " ").trim();
}
function initials(name) {
  var p = String(name || "").trim().split(/\s+/);
  return ((p[0] || "?").charAt(0) + (p[1] ? p[1].charAt(0) : "")).toUpperCase();
}
function shortName(name) {
  var p = String(name || "").trim().split(/\s+/);
  return p.slice(0, 2).join(" ") || "—";
}
function hash(str) { // oddiy, tuzli xesh (PIN uchun)
  var h1 = 0xdeadbeef ^ 7, h2 = 0x41c6ce57 ^ 7;
  for (var i = 0, ch; i < str.length; i++) { ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

/* =================== Maydonlar =================== */
var FIELDS = [
  { k: "fish", label: "F.I.Sh", head: "Talabaning F.I.Sh", g: "Asosiy", w: 30 },
  { k: "yonalish", label: "Taʼlim yoʻnalishi, kursi va guruhi", head: "Taʼlim yoʻnalishi, kursi va guruhi", g: "Asosiy", w: 22 },
  { k: "kirgan", label: "Oʻqishga kirgan yili", head: "Talabaning oʻqishga kirgan yili", g: "Asosiy", w: 10 },
  { k: "shakl", label: "Taʼlim shakli", head: "Taʼlim shakli", g: "Asosiy", w: 11 },
  { k: "tugilgan", label: "Tugʻilgan sanasi", head: "Tugʻilgan sanasi", g: "Asosiy", w: 12 },
  { k: "millat", label: "Millati", head: "Millati", g: "Asosiy", w: 10 },
  { k: "jins", label: "Jinsi", head: "Jinsi", g: "Asosiy", w: 7 },
  { k: "tel", label: "Talabaning telefon raqami", head: "Talabaning tel nomeri", g: "Aloqa", w: 16 },
  { k: "ota", label: "Otasi, ish joyi, telefoni", head: "Talabaning otasi, ish joyi, tel nomeri", g: "Aloqa", w: 28, multi: true },
  { k: "ona", label: "Onasi, ish joyi, telefoni", head: "Talabaning onasi, ish joyi, tel nomeri", g: "Aloqa", w: 28, multi: true },
  { k: "otaOnaManzil", label: "Ota-onasining yashash manzili", head: "Talabaning ota-onasining yashash manzili", g: "Manzil", w: 28, multi: true },
  { k: "manzil", label: "Doimiy yashash manzili", head: "Talabaning yashash manzili", g: "Manzil", w: 28, multi: true },
  { k: "hozirgi", label: "Hozirgi yashash manzili", head: "Talabaning hozirgi kundagi yashash manzili", g: "Manzil", w: 28, multi: true },
  { k: "ijarachi", label: "Ijara (uy egasi) toʻgʻrisida", head: "Ijarachi toʻgʻrisida maʼlumot (F.I.Sh, ish joyi, tel nomeri, yashash manzili)", g: "Manzil", w: 28, multi: true },
  { k: "pasport", label: "Pasport maʼlumotlari", head: "Talabaning pasport maʼlumotlari", g: "Hujjat va holat", w: 18 },
  { k: "yetim", label: "Yetim", head: "Yetim", g: "Hujjat va holat", w: 8 },
  { k: "chinYetim", label: "Chin yetim", head: "Chin yetim", g: "Hujjat va holat", w: 8 },
  { k: "nogiron", label: "Nogironligi (guruhi, tugʻma yoki orttirilgan)", head: "Nogiron (guruhi, tugʻma yoki orttirilganligi)", g: "Hujjat va holat", w: 14 },
  { k: "harbiy", label: "Harbiy xizmatga munosabati", head: "Harbiy xizmatga munosabati", g: "Hujjat va holat", w: 12 },
  { k: "oilaviy", label: "Oilaviy holati", head: "Oilaviy holati (oilali yoki boʻydoq)", g: "Hujjat va holat", w: 13 },
  { k: "tugatgan", label: "Qayerni qachon tugatgan", head: "Qayerni qachon tugatgan", g: "Hujjat va holat", w: 26, multi: true },
  { k: "uyiga", label: "Uyiga borilganlar (Exceldagi yozuv)", head: "Uyiga borilganlar", g: "Tashrif", w: 26, multi: true }
];
var FIELD = {}; FIELDS.forEach(function (f) { FIELD[f.k] = f; });
// Excel hisobotda asl jadvaldagi ustunlar tartibi
var EXPORT_ORDER = ["fish", "yonalish", "kirgan", "shakl", "tugilgan", "millat", "jins", "ota", "ona", "otaOnaManzil", "manzil", "hozirgi", "ijarachi", "pasport", "tel", "yetim", "chinYetim", "nogiron", "harbiy", "oilaviy", "tugatgan", "uyiga"].map(function (k) { return FIELD[k]; });
// Excel sarlavhasini maydonga moslash (tartib muhim: aniqroq qoidalar oldin)
var HEAD_RULES = [
  ["photo", /rasm/], ["ijarachi", /ijarachi|uy egasi/], ["otaOnaManzil", /ota-?\s?onasining|ota onasi.*manzil/],
  ["ota", /otasi/], ["ona", /onasi/], ["hozirgi", /hozirgi/], ["manzil", /yashash manzil|manzili/], ["pasport", /pasport/],
  ["tel", /tel/], ["fish", /f\.?\s?i\.?\s?sh|familiya|ism/], ["yonalish", /yonalish/], ["kirgan", /kirgan/], ["shakl", /shakl/],
  ["tugilgan", /tugilgan/], ["millat", /millat/], ["jins", /jins/], ["chinYetim", /chin\s*yetim/], ["yetim", /yetim/],
  ["nogiron", /nogiron/], ["harbiy", /[xh]arbiy/], ["oilaviy", /oilaviy/], ["tugatgan", /tugatgan/], ["uyiga", /uyiga/], ["no", /^(№|n|no|t\/r|#)$/]
];

/* =================== Hududlar =================== */
var TUMANLAR = [
  ["Angor tumani", /angor/], ["Bandixon tumani", /bandi[xh]on/], ["Boysun tumani", /boysun/], ["Denov tumani", /denov/],
  ["Jarqoʻrgʻon tumani", /jarq[ou]rg[ou]n/], ["Qiziriq tumani", /qiziriq/], ["Qumqoʻrgʻon tumani", /qumq[ou]rg[ou]n/],
  ["Muzrabod tumani", /muzrabo[dt]/], ["Oltinsoy tumani", /oltinsoy/], ["Sariosiyo tumani", /sar[a-z]?o?siyo/],
  ["Sherobod tumani", /sherobo[dt]/], ["Shoʻrchi tumani", /sh[ou]rchi/], ["Termiz tumani", /term[ie]z\s*t[uo]+m/],
  ["Termiz shahar", /term[ie]z\s*(sh\b|sh\.|shah|shax)/], ["Uzun tumani", /\buzun\b/]
];
var VILOYATLAR = [
  ["Andijon viloyati", /andijon/], ["Buxoro viloyati", /buxoro\s*vil|buxoro\s*v\b|gijduvon|buxoro\s*sh/], ["Fargʻona viloyati", /fargona/],
  ["Jizzax viloyati", /jizzax/], ["Xorazm viloyati", /xorazm/], ["Namangan viloyati", /namangan/], ["Navoiy viloyati", /navoiy\s*(vil|v\b)/],
  ["Qashqadaryo viloyati", /qashqadaryo/], ["Qoraqalpogʻiston Respublikasi", /qoraqalpog/], ["Samarqand viloyati", /samarqand/],
  ["Sirdaryo viloyati", /sirdaryo/], ["Surxondaryo viloyati", /surxondaryo/], ["Toshkent viloyati", /toshkent\s*vil/], ["Toshkent shahri", /toshkent\s*sh/],
  ["Boshqa davlat fuqarosi", /tojikiston|qozogiston|qirgiziston|turkmaniston|rossiya|afgoniston/]
];
var SURXON = "Surxondaryo viloyati";
function detectHudud(s) {
  var addr = norm(s.manzil || s.otaOnaManzil || s.hozirgi || "");
  if (!addr) return { tuman: null, viloyat: null };
  var vil = null;
  for (var i = 0; i < VILOYATLAR.length; i++) if (VILOYATLAR[i][1].test(addr)) { vil = VILOYATLAR[i][0]; break; }
  var tum = null;
  if (!vil || vil === SURXON) {
    for (var j = 0; j < TUMANLAR.length; j++) if (TUMANLAR[j][1].test(addr)) { tum = TUMANLAR[j][0]; break; }
    if (!tum && /term[ie]z/.test(addr)) tum = "Termiz shahar";
    if (tum) vil = SURXON;
  }
  return { tuman: tum, viloyat: vil };
}
function tumanLabel(t) { return t === "Termiz tumani" ? "Termiz tum." : t.replace(" tumani", ""); }
function hududOf(s) {
  if (s.hududTuman || s.hududViloyat) return { tuman: s.hududTuman || null, viloyat: s.hududViloyat || (s.hududTuman ? SURXON : null) };
  return detectHudud(s);
}

/* =================== Telefon raqamlar =================== */
function phonesIn(text) {
  var out = [], seen = {};
  String(text || "").replace(/(\+?\d[\d\s\-().]{7,18}\d)/g, function (m) {
    var d = m.replace(/\D/g, "");
    if (d.length === 9) d = "998" + d;
    if (d.length === 12 && d.indexOf("998") === 0 && !seen[d]) { seen[d] = 1; out.push({ raw: m.trim(), tel: "+" + d, nice: "+998 " + d.slice(3, 5) + " " + d.slice(5, 8) + " " + d.slice(8, 10) + " " + d.slice(10) }); }
    return m;
  });
  return out;
}

/* =================== Saqlash =================== */
var KEY = "kurator-v1";
var db = { students: [], att: {}, meta: { group: "", kurator: "", fakultet: "", title: "", importedAt: "" }, settings: { pin: "", theme: "auto" } };
function load() {
  try { var raw = localStorage.getItem(KEY); if (raw) { var d = JSON.parse(raw); if (d && Array.isArray(d.students)) { db.students = d.students; db.att = d.att || {}; db.meta = Object.assign(db.meta, d.meta || {}); db.settings = Object.assign(db.settings, d.settings || {}); } } }
  catch (e) { console.warn(e); }
}
function save() {
  if (typeof scheduleSync === "function") scheduleSync();
  try { localStorage.setItem(KEY, JSON.stringify(db)); return true; }
  catch (e) { toast("Saqlab boʻlmadi: xotira toʻldi. Ayrim rasmlarni oʻchirib koʻring."); return false; }
}
function byId(id) { for (var i = 0; i < db.students.length; i++) if (db.students[i].id === id) return db.students[i]; return null; }
function sorted() {
  return db.students.slice().sort(function (a, b) {
    if (a.section !== b.section) return a.section === "ijara" ? -1 : 1;
    return (a.order || 0) - (b.order || 0);
  });
}

/* =================== UI: umumiy =================== */
var toastT = null;
function toast(t) { var el = $("toast"); el.textContent = t; el.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(function () { el.classList.remove("show"); }, 2600); }
function busy(on, text) { $("busy").classList.toggle("hidden", !on); if (text) $("busyText").textContent = text; }
function avatarHtml(s, cls) {
  return '<div class="avatar' + (cls ? " " + cls : "") + '">' + (s.photo ? '<img alt="" src="' + s.photo + '">' : esc(initials(s.fish))) + "</div>";
}
function secBadge(s) { return s.section === "ijara" ? '<span class="badge b-ijara">Ijarada</span>' : '<span class="badge b-uy">Oʻz uyida</span>'; }
function lastVisit(s) { var v = (s.visits || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; }); return v[0] || null; }

var curView = "students";
var VIEW_TITLES = { students: "Talabalar", obj: "Talaba obyektivkasi", att: "Davomat", visits: "Uyiga tashrif", report: "Hisobot" };
function setView(v) {
  curView = v;
  document.querySelectorAll(".view").forEach(function (el) { el.classList.toggle("on", el.id === "v-" + v); });
  document.querySelectorAll(".navlist button[data-v]").forEach(function (b) { b.classList.toggle("on", b.dataset.v === v); });
  $("main").scrollTop = 0;
  render();
}
function render() {
  $("hTitle").textContent = VIEW_TITLES[curView];
  var n = db.students.length;
  $("hSub").textContent = (db.meta.group ? db.meta.group + " · " : "") + (n ? n + " nafar talaba" : "Kurator yordamchisi");
  document.querySelectorAll("[data-cnt=students]").forEach(function (c) { c.textContent = n || ""; });
  if (curView === "students") renderStudents();
  else if (curView === "obj") renderObj();
  else if (curView === "att") renderAtt();
  else if (curView === "visits") renderVisits();
  else renderReport();
}
function emptyState(target) {
  var enc = !!window.KURATOR_ENC;
  document.querySelectorAll(".view").forEach(function (v) { if (v.id !== target) v.innerHTML = ""; });
  var h = (target === "v-students" ? heroHtml() : "") + '<div class="card empty">' + (enc ? '<div class="unlock-banner"><img src="tisu-logo.png" alt="TISU logotipi"></div>' : "");
  if (enc) {
    h += "<h2>Guruh maʼlumotlarini ochish</h2><p>Talabalarning shaxsiy maʼlumotlari (pasport, telefon, manzil) himoyalangan. Ochish uchun parolni kiriting.</p>" +
      '<form class="actions" id="unlockForm" style="max-width:340px;margin:0 auto" autocomplete="off"><input type="password" id="unlockPw" placeholder="Parol" aria-label="Parol" style="height:50px;text-align:center;font-size:17px">' +
      '<button class="btn primary block" type="submit">' + svg("i-lock") + "Ochish</button>" +
      '<div id="unlockErr" style="color:var(--bad);font-weight:700;min-height:20px"></div></form>' +
      '<details style="margin-top:6px"><summary class="muted" style="cursor:pointer;font-size:13.5px">Boshqa usullar</summary><div class="actions" style="max-width:340px;margin:10px auto 0">' +
      '<button class="btn ghost block" data-act="restore">' + svg("i-upload") + "Zaxira faylini tanlash (.json)</button>" +
      '<button class="btn ghost block" data-act="import">' + svg("i-file") + "Excel roʻyxatni tanlash (.xlsx)</button></div></details>";
  } else {
    h += "<h2>Guruh maʼlumotlarini yuklang</h2><p>Zaxira faylini (.json) yoki Excel roʻyxatni tanlang.</p>" +
      '<div class="actions" style="max-width:340px;margin:0 auto"><button class="btn primary block" data-act="restore">' + svg("i-upload") + "Zaxira faylini tanlash (.json)</button>" +
      '<button class="btn ghost block" data-act="import">' + svg("i-file") + "Excel roʻyxatni tanlash (.xlsx)</button>" +
      '<button class="btn ghost block" data-act="add">' + svg("i-plus") + "Talabani qoʻlda qoʻshish</button></div>";
  }
  $(target).innerHTML = h + "</div>";
  var f = $("unlockForm");
  if (f) f.addEventListener("submit", function (e) { e.preventDefault(); unlock($("unlockPw").value); });
}
function b64bytes(s) { var bin = atob(s), a = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) a[i] = bin.charCodeAt(i); return a; }
async function unlock(pw) {
  var E = window.KURATOR_ENC; if (!E || !pw) return;
  busy(true, "Maʼlumotlar ochilmoqda…");
  try {
    var base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw.trim()), "PBKDF2", false, ["deriveKey"]);
    var key = await crypto.subtle.deriveKey({ name: "PBKDF2", salt: b64bytes(E.salt), iterations: E.iter, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, true, ["encrypt", "decrypt"]);
    busy(false);
    if (!(await unlockKey(key))) throw new Error("bad");
    if (typeof fbPublishKey === "function") fbPublishKey(key);
  } catch (e) {
    busy(false); var er = $("unlockErr"); if (er) er.textContent = "Parol notoʻgʻri. Qaytadan urinib koʻring.";
  }
}
async function unlockKey(key, silent) {
  var E = window.KURATOR_ENC; if (!E) return false;
  busy(true, "Maʼlumotlar ochilmoqda…");
  try {
    var plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64bytes(E.iv) }, key, b64bytes(E.ct));
    var d = JSON.parse(new TextDecoder().decode(plain));
    if (db.students.length) {
      var old = {}; db.students.forEach(function (x) { old[x.id] = x; });
      d.db.students.forEach(function (x) { var o = old[x.id]; if (o) { x.visits = o.visits || []; if (o.joy) x.joy = o.joy; if (o.hududTuman) x.hududTuman = o.hududTuman; if (o.hududViloyat) x.hududViloyat = o.hududViloyat; } });
      db.students = d.db.students; db.meta = Object.assign(db.meta, d.db.meta || {});
    } else { db.students = d.db.students; db.att = d.db.att || {}; db.meta = Object.assign(db.meta, d.db.meta || {}); }
    db.meta.encVer = E.ver || 1;
    busy(false); await storeKey(key); save(); if (!silent) toast("Xush kelibsiz! " + db.students.length + " nafar talaba yuklandi"); setView("students");
    return true;
  } catch (e) { busy(false); return false; }
}

/* =================== Talabalar =================== */
var stFilter = "all", stQuery = "";
var ST_FILTERS = [
  ["all", "Hammasi", function () { return true; }],
  ["ijara", "Ijarada", function (s) { return s.section === "ijara"; }],
  ["uy", "Oʻz uyida", function (s) { return s.section !== "ijara"; }],
  ["qiz", "Qizlar", function (s) { return genderOf(s) === "A"; }],
  ["ogil", "Yigitlar", function (s) { return genderOf(s) === "E"; }],
  ["borilmagan", "Uyiga borilmagan", function (s) { return !(s.visits || []).length; }],
  ["oilali", "Oilali", function (s) { var o = norm(s.oilaviy); return /oilali|turmush qurgan|turmushga chiqqan|uylangan/.test(o) && !/chiqmagan|qurmagan|boydoq/.test(o); }]
];
function genderOf(s) { var g = norm(s.jins); if (/^(a|ayol|qiz|female|f)/.test(g)) return "A"; if (/^(e|erkak|yigit|male|m)/.test(g)) return "E"; return ""; }
function renderStudents() {
  var el = $("v-students");
  if (!db.students.length) { emptyState("v-students"); return; }
  var all = sorted(), h = heroHtml();
  setTimeout(function () { var uf = $("updForm"); if (uf) uf.addEventListener("submit", function (e) { e.preventDefault(); unlock($("updPw").value); }); }, 0);
  h += '<div class="search">' + svg("i-search") + '<input id="stSearch" type="search" placeholder="Ism, telefon yoki manzil boʻyicha qidirish" value="' + esc(stQuery) + '"></div>';
  h += '<div class="chips" id="stChips">';
  ST_FILTERS.forEach(function (f) { var c = all.filter(f[2]).length; h += '<button class="chip' + (stFilter === f[0] ? " on" : "") + '" data-f="' + f[0] + '">' + f[1] + '<span class="n">' + c + "</span></button>"; });
  h += "</div>";
  h += '<div id="stList"></div>';
  h += '<div style="margin-top:14px"><button class="btn ghost block" data-act="add">' + svg("i-plus") + "Talaba qoʻshish</button></div>";
  el.innerHTML = h;
  renderStudentList();
  $("stSearch").addEventListener("input", function (e) { stQuery = e.target.value; renderStudentList(); });
}
function renderStudentList() {
  var f = ST_FILTERS.filter(function (x) { return x[0] === stFilter; })[0] || ST_FILTERS[0];
  var q = norm(stQuery);
  var list = sorted().filter(f[2]).filter(function (s) {
    if (!q) return true;
    return norm([s.fish, s.tel, s.ota, s.ona, s.manzil, s.hozirgi, s.otaOnaManzil].join(" ")).indexOf(q) >= 0 || String(s.tel || "").replace(/\D/g, "").indexOf(q.replace(/\D/g, "") || "x") >= 0;
  });
  var h = "", lastSec = null;
  if (!list.length) h = '<div class="empty" style="padding:24px"><p>Hech kim topilmadi.</p></div>';
  list.forEach(function (s) {
    if (stFilter === "all" && !q && s.section !== lastSec) {
      lastSec = s.section;
      var cnt = list.filter(function (x) { return x.section === s.section; }).length;
      h += '<div class="groupline">' + (s.section === "ijara" ? "Ijarada turadigan talabalar" : "Oʻz uyidan qatnaydigan talabalar") + '<span class="n">' + cnt + "</span></div>";
    }
    var hd = hududOf(s), meta = secBadge(s);
    if (hd.tuman || hd.viloyat) meta += '<span class="badge b-plain">' + esc(hd.tuman ? tumanLabel(hd.tuman) : hd.viloyat.replace(" viloyati", " vil.")) + "</span>";
    if ((s.visits || []).length) meta += '<span class="badge b-good">Uyiga borilgan</span>';
    h += '<button class="st" data-open="' + s.id + '"><span class="no">' + (s.no || "") + "</span>" + avatarHtml(s) + '<div class="grow"><div class="nm">' + esc(s.fish || "Ismsiz") + '</div><div class="meta">' + meta + "</div></div></button>";
  });
  $("stList").innerHTML = '<div class="list">' + h + "</div>";
}

/* =================== Davomat =================== */
var attDate = todayIso();
var ATT = { k: "Keldi", s: "Sababli", ss: "Sababsiz" };
function renderAtt() {
  var el = $("v-att");
  if (!db.students.length) { emptyState("v-att"); return; }
  var day = db.att[attDate] || {}, list = sorted();
  var c = { k: 0, s: 0, ss: 0, none: 0 };
  list.forEach(function (s) { var v = day[s.id]; if (v) c[v]++; else c.none++; });
  var d = parseIso(attDate), isToday = attDate === todayIso();
  var h = '<div class="daybar"><button class="iconbtn" data-day="-1" aria-label="Oldingi kun">' + svg("i-left") + "</button>" +
    '<label class="d" for="attPick">' + (isToday ? "Bugun, " : "") + longDate(attDate) + "<small>" + KUNLAR[d.getDay()] + " · " + d.getFullYear() + "</small>" +
    '<input type="date" id="attPick" value="' + attDate + '"></label>' +
    '<button class="iconbtn" data-day="1" aria-label="Keyingi kun">' + svg("i-right") + "</button></div>";
  h += '<div class="summary"><div class="sum k"><b>' + c.k + '</b><span>Keldi</span></div><div class="sum s"><b>' + c.s + '</b><span>Sababli</span></div><div class="sum ss"><b>' + c.ss + '</b><span>Sababsiz</span></div><div class="sum"><b>' + c.none + "</b><span>Belgilanmagan</span></div></div>";
  h += '<div class="row" style="margin-bottom:10px"><button class="btn soft grow" data-act="allk">' + svg("i-check") + 'Hammasi keldi</button><button class="btn ghost" data-act="clearday">Tozalash</button></div>';
  h += '<div class="list">';
  list.forEach(function (s) {
    var v = day[s.id] || "";
    h += '<div class="att">' + avatarHtml(s) + '<div class="grow"><div class="nm">' + esc(shortName(s.fish)) + "</div></div>" +
      '<div class="seg" data-att="' + s.id + '">' +
      '<button class="k' + (v === "k" ? " on" : "") + '" data-v="k" aria-label="Keldi">✓</button>' +
      '<button class="s' + (v === "s" ? " on" : "") + '" data-v="s" aria-label="Sababli">S</button>' +
      '<button class="ss' + (v === "ss" ? " on" : "") + '" data-v="ss" aria-label="Sababsiz">NB</button></div></div>';
  });
  h += "</div>";
  h += '<p class="legend"><b>✓</b> — keldi, <b>S</b> — sababli kelmadi, <b>NB</b> — sababsiz kelmadi. Belgini qayta bossangiz, bekor qilinadi. Oylik hisobot «Hisobot» boʻlimida.</p>';
  el.innerHTML = h;
  $("attPick").addEventListener("change", function (e) { if (e.target.value) { attDate = e.target.value; renderAtt(); } });
}
function setAtt(id, v) {
  var day = db.att[attDate] = db.att[attDate] || {};
  if (day[id] === v) delete day[id]; else day[id] = v;
  if (!Object.keys(day).length) delete db.att[attDate];
  save(); renderAtt();
}

/* =================== Tashriflar =================== */
var visFilter = "ijara";
function renderVisits() {
  var el = $("v-visits");
  if (!db.students.length) { emptyState("v-visits"); return; }
  var all = sorted();
  var pool = visFilter === "ijara" ? all.filter(function (s) { return s.section === "ijara"; }) : all;
  var done = pool.filter(function (s) { return visitsIn(s).length; }).length;
  var pct = pool.length ? Math.round(done * 100 / pool.length) : 0;
  var totalV = pool.reduce(function (a, s) { return a + visitsIn(s).length; }, 0);
  var cur = todayIso().slice(0, 7), isMonth = /^\d{4}-\d{2}$/.test(visPeriod);
  var h = '<div class="card"><div class="row" style="flex-wrap:wrap;gap:8px;margin-bottom:10px">' +
    '<div class="seg" role="group" aria-label="Davr"><button class="' + (isMonth ? "on k" : "") + '" data-vper="' + (isMonth ? visPeriod : cur) + '">Oy</button><button class="' + (visPeriod === "sem" ? "on k" : "") + '" data-vper="sem">Semestr</button><button class="' + (visPeriod === "all" ? "on k" : "") + '" data-vper="all">Hammasi</button></div>' +
    (isMonth ? '<div class="row" style="gap:2px"><button class="iconbtn" data-vmon="-1" aria-label="Oldingi oy">' + svg("i-left") + '</button><b style="min-width:120px;text-align:center;text-transform:capitalize">' + periodLabel() + '</b><button class="iconbtn" data-vmon="1" aria-label="Keyingi oy">' + svg("i-right") + "</button></div>" : '<b style="text-transform:capitalize">' + periodLabel() + "</b>") + "</div>" +
    '<div class="row"><div class="grow"><b style="font:600 24px var(--font-display)">' + done + " / " + pool.length + '</b><div class="muted" style="font-size:13.5px">' +
    (visFilter === "ijara" ? "ijaradagi talabaning" : "talabaning") + " uyiga borildi · jami " + totalV + ' ta tashrif</div></div><b style="font:600 24px var(--font-display);color:var(--primary-text)">' + pct + "%</b></div>" +
    '<div class="progress"><i style="width:' + pct + '%"></i></div></div>';
  var withLoc = pool.filter(function (s) { return s.joy; }).length;
  h += '<div class="card" style="margin-top:12px"><div class="row" style="flex-wrap:wrap"><div class="grow" style="min-width:200px"><b style="font-size:18px">' + withLoc + " / " + pool.length + '</b><div class="muted" style="font-size:13.5px">talabaning uy joylashuvi bor</div></div>' +
    '<button class="btn soft" data-act="tghelp">' + svg("i-pin") + 'Telegram orqali yigʻish</button><button class="btn ghost" data-act="tgimport">' + svg("i-upload") + "result.json yuklash</button></div></div>";
  h += '<div class="chips" style="margin-top:12px"><button class="chip' + (visFilter === "ijara" ? " on" : "") + '" data-vf="ijara">Ijaradagilar</button><button class="chip' + (visFilter === "all" ? " on" : "") + '" data-vf="all">Barcha talabalar</button></div>';
  var notDone = pool.filter(function (s) { return !visitsIn(s).length; });
  var doneList = pool.filter(function (s) { return visitsIn(s).length; });
  if (notDone.length) {
    h += '<div class="sec-title">Bu davrda borilmagan · ' + notDone.length + '</div><div class="list vgrid">';
    notDone.forEach(function (s) {
      var lv = lastVisit(s);
      h += '<button class="visit" data-visit="' + s.id + '">' + avatarHtml(s) + '<div class="grow"><div style="font-weight:700">' + esc(shortName(s.fish)) + '</div><div class="when">' +
        (lv ? "Oxirgi tashrif: " + fmtDate(lv.date) : esc(short(s.hozirgi || s.manzil || "Manzil kiritilmagan", 60))) + "</div>" + locBadge(s) + "</div>" + '<span class="badge b-warn">Borilmagan</span></button>';
    });
    h += "</div>";
  }
  if (doneList.length) {
    h += '<div class="sec-title">Bu davrda borilgan · ' + doneList.length + '</div><div class="list vgrid">';
    doneList.forEach(function (s) {
      var vv = visitsIn(s).sort(function (a, b) { return a.date < b.date ? 1 : -1; }), lv = vv[0];
      var nph = vv.reduce(function (a, v) { return a + (v.photos || []).length; }, 0);
      h += '<button class="visit" data-open="' + s.id + '">' + avatarHtml(s) + '<div class="grow"><div style="font-weight:700">' + esc(shortName(s.fish)) + '</div><div class="when">' + fmtDate(lv.date) + (lv.note ? " · " + esc(short(lv.note, 46)) : "") + "</div>" +
        '<div style="margin-top:4px;display:flex;gap:6px;flex-wrap:wrap">' + (nph ? '<span class="badge b-plain">' + nph + " ta rasm</span>" : "") + (s.joy ? '<span class="badge b-good">Joylashuv bor</span>' : "") + "</div></div>" +
        '<span class="badge b-good">' + (vv.length > 1 ? vv.length + " marta" : "Borilgan") + "</span></button>";
    });
    h += "</div>";
  }
  h += '<p class="note">Borilmagan talabani bosing — tashrif sanasi, izoh va uyda olingan rasmlarni kiriting. Har oy yoki semestrda qayta borilsa, yangi tashrif qoʻshiladi va oldingilari tarixda saqlanadi.</p>';
  el.innerHTML = h;
}
function locBadge(s) { return '<div style="margin-top:4px">' + (s.joy ? '<span class="badge b-good">Joylashuv bor</span>' : '<span class="badge b-plain">Joylashuv yoʻq</span>') + "</div>"; }
function short(s, n) { s = String(s || "").replace(/\s+/g, " ").trim(); return s.length > n ? s.slice(0, n - 1) + "…" : s; }

/* =================== Statistika =================== */
function stats() {
  var L = db.students, r = { jami: L.length, qiz: 0, ogil: 0, ijara: 0, uy: 0, ijaraQiz: 0, boshqaVil: 0, boshqaVilQiz: 0, tuman: {}, viloyat: {}, aniqmas: [], social: {} };
  L.forEach(function (s) {
    var g = genderOf(s), qiz = g === "A";
    if (qiz) r.qiz++; else if (g === "E") r.ogil++;
    if (s.section === "ijara") { r.ijara++; if (qiz) r.ijaraQiz++; } else r.uy++;
    var hd = hududOf(s);
    if (hd.viloyat) { var v = r.viloyat[hd.viloyat] = r.viloyat[hd.viloyat] || { n: 0, qiz: 0 }; v.n++; if (qiz) v.qiz++; }
    if (hd.viloyat && hd.viloyat !== SURXON) { r.boshqaVil++; if (qiz) r.boshqaVilQiz++; }
    if (hd.tuman) { var t = r.tuman[hd.tuman] = r.tuman[hd.tuman] || { n: 0, qiz: 0 }; t.n++; if (qiz) t.qiz++; }
    if (!hd.viloyat) r.aniqmas.push(s);
    ["yetim", "chinYetim", "nogiron", "harbiy", "oilaviy"].forEach(function (k) {
      var raw = String(s[k] == null ? "" : s[k]).trim(), key = norm(raw).replace(/yuq/, "yoq") || "—";
      var m = r.social[k] = r.social[k] || {};
      (m[key] = m[key] || { label: raw || "(boʻsh)", n: 0 }).n++;
    });
  });
  return r;
}
function monthAtt(ym) { // ym: "2026-11"
  var days = Object.keys(db.att).filter(function (d) { return d.indexOf(ym) === 0; }).sort(), per = {};
  db.students.forEach(function (s) { per[s.id] = { k: 0, s: 0, ss: 0 }; });
  days.forEach(function (d) { var day = db.att[d]; for (var id in day) if (per[id]) per[id][day[id]]++; });
  return { days: days, per: per };
}
var repMonth = todayIso().slice(0, 7);
function renderReport() {
  var el = $("v-report");
  if (!db.students.length) { emptyState("v-report"); return; }
  var r = stats(), h = "";
  h += '<div class="kpis">' +
    '<div class="kpi"><b>' + r.jami + "</b><span>Jami talabalar</span></div>" +
    '<div class="kpi"><b>' + r.qiz + " / " + r.ogil + "</b><span>Qizlar / yigitlar</span></div>" +
    '<div class="kpi"><b>' + r.ijara + "</b><span>Ijarada turadi</span></div>" +
    '<div class="kpi"><b>' + r.uy + "</b><span>Oʻz uyidan qatnaydi</span></div></div>";

  // Davomat (oy)
  var ma = monthAtt(repMonth), tot = { k: 0, s: 0, ss: 0 };
  Object.keys(ma.per).forEach(function (id) { tot.k += ma.per[id].k; tot.s += ma.per[id].s; tot.ss += ma.per[id].ss; });
  var all = tot.k + tot.s + tot.ss, pct = all ? Math.round(tot.k * 100 / all) : 0;
  var ymd = parseIso(repMonth + "-01");
  h += '<div class="sec-title">Davomat</div><div class="card">';
  h += '<div class="row" style="margin-bottom:8px"><button class="iconbtn" data-mon="-1" aria-label="Oldingi oy">' + svg("i-left") + '</button><div class="grow" style="text-align:center;font-weight:700;text-transform:capitalize">' + OYLAR[ymd.getMonth()] + " " + ymd.getFullYear() + '</div><button class="iconbtn" data-mon="1" aria-label="Keyingi oy">' + svg("i-right") + "</button></div>";
  if (!ma.days.length) h += '<p class="muted" style="margin:4px 0 6px;text-align:center">Bu oy uchun davomat belgilanmagan.</p>';
  else {
    h += '<div class="summary" style="margin-top:0"><div class="sum"><b>' + ma.days.length + '</b><span>Dars kuni</span></div><div class="sum k"><b>' + pct + '%</b><span>Qatnashuv</span></div><div class="sum s"><b>' + tot.s + '</b><span>Sababli</span></div><div class="sum ss"><b>' + tot.ss + "</b><span>Sababsiz</span></div></div>";
    var worst = db.students.filter(function (s) { return ma.per[s.id].ss > 0; }).sort(function (a, b) { return ma.per[b.id].ss - ma.per[a.id].ss; }).slice(0, 5);
    if (worst.length) {
      h += '<div style="font-weight:650;font-size:13.5px;margin:6px 0 2px">Eng koʻp sababsiz qoldirganlar</div><table class="mini">';
      worst.forEach(function (s) { h += "<tr><td>" + esc(shortName(s.fish)) + '</td><td><span class="badge b-bad">' + ma.per[s.id].ss + " kun</span></td></tr>"; });
      h += "</table>";
    }
  }
  h += "</div>";

  // Tumanlar kesimi
  var tk = Object.keys(r.tuman).sort(function (a, b) { return r.tuman[b].n - r.tuman[a].n; });
  var maxT = tk.length ? r.tuman[tk[0]].n : 1;
  h += '<div class="sec-title">Tumanlar kesimi (Surxondaryo)</div><div class="card">';
  if (tk.length) {
    h += '<div class="keyrow"><span><i style="background:var(--accent)"></i>Qizlar</span><span><i style="background:var(--primary)"></i>Yigitlar</span></div><div class="bars">';
    tk.forEach(function (t) {
      var x = r.tuman[t];
      h += '<div class="bar"><span class="lbl">' + esc(tumanLabel(t)) + '</span><span class="trk"><i class="b" style="width:' + (x.qiz * 100 / maxT) + '%"></i><i class="a" style="width:' + ((x.n - x.qiz) * 100 / maxT) + '%"></i></span><span class="v">' + x.n + (x.qiz ? " (" + x.qiz + " q)" : "") + "</span></div>";
    });
    h += "</div>";
  } else h += '<p class="muted" style="margin:0">Manzillardan tuman aniqlanmadi.</p>';
  if (r.aniqmas.length) h += '<div class="warnbox">' + r.aniqmas.length + " nafar talabaning hududi manzildan aniqlanmadi: " + esc(r.aniqmas.map(function (s) { return shortName(s.fish); }).join(", ")) + ". Talaba kartochkasida «Hudud»ni qoʻlda tanlang.</div>";
  h += "</div>";

  // Viloyatlar
  var vk = Object.keys(r.viloyat).sort(function (a, b) { return r.viloyat[b].n - r.viloyat[a].n; });
  h += '<div class="sec-title">Viloyatlar kesimi</div><div class="card"><table class="mini">';
  vk.forEach(function (v) { h += "<tr><td>" + esc(v) + "</td><td>" + r.viloyat[v].n + " nafar" + (r.viloyat[v].qiz ? ", " + r.viloyat[v].qiz + " qiz" : "") + "</td></tr>"; });
  h += "<tr><td><b>Boshqa viloyatdan</b></td><td><b>" + r.boshqaVil + " nafar</b></td></tr></table></div>";

  // Ijtimoiy holat — Exceldagi qiymatlar qanday yozilgan boʻlsa, shunday sanaladi
  h += '<div class="sec-title">Ijtimoiy holat (Exceldagi yozuvlar boʻyicha)</div><div class="card"><table class="mini">';
  [["yetim", "Yetim"], ["chinYetim", "Chin yetim"], ["nogiron", "Nogironlik"], ["harbiy", "Harbiy xizmat"], ["oilaviy", "Oilaviy holat"]].forEach(function (p) {
    var m = r.social[p[0]] || {};
    var parts = Object.keys(m).sort(function (a, b) { return m[b].n - m[a].n; }).map(function (k) { return esc(m[k].label) + " — " + m[k].n; });
    h += "<tr><td>" + p[1] + '</td><td style="white-space:normal;text-align:right">' + parts.join("<br>") + "</td></tr>";
  });
  h += '</table></div>';

  // Tashrif
  var ijV = db.students.filter(function (s) { return s.section === "ijara" && (s.visits || []).length; }).length;
  var allV = db.students.filter(function (s) { return (s.visits || []).length; }).length;
  h += '<div class="sec-title">Uyiga tashrif</div><div class="card"><table class="mini"><tr><td>Ijaradagilardan borilgan</td><td>' + ijV + " / " + r.ijara + "</td></tr><tr><td>Jami borilgan</td><td>" + allV + " / " + r.jami + "</td></tr></table></div>";

  h += '<div class="sec-title">Yuklab olish</div><div class="actions">' +
    '<button class="btn primary block" data-act="export">' + svg("i-download") + "Excel hisobot (" + OYLAR[ymd.getMonth()] + ")</button>" +
    '<button class="btn ghost block" data-act="backup">' + svg("i-file") + "Zaxira nusxa saqlash</button></div>" +
    '<p class="note">Excel hisobotda: talabalar roʻyxati, umumiy maʼlumot, tumanlar va viloyatlar kesimi (fakultet jadvaliga koʻchirish uchun), tanlangan oy davomati va uyiga tashriflar. Rasmlar hisobotga kirmaydi.</p>';
  el.innerHTML = h;
}


/* =================== Kurator bloki (bosh sahifa boshi) =================== */
var KURATOR_PHOTO = "kurator.jpg";
function heroHtml() {
  var name = db.meta.kurator || "Usmonov Chorshanbi";
  var h = '<section class="hero"><img class="uni-logo" src="tisu-logo.png" alt="TISU logotipi"><img class="ph" src="' + KURATOR_PHOTO + '" alt="' + esc(name) + '">' +
    '<div><span class="lbl">Guruh kuratori</span><h2>' + esc(name) + '</h2><div class="role">Dekan o‘rinbosari</div>' +
    '<div class="uni"><span>Termiz iqtisodiyot va servis universiteti</span><span>Tibbiyot fakulteti</span><span>' + esc(db.meta.group || "Davolash ishi 26-39") + "</span></div></div></section>";
  var needUpd = db.students.length && window.KURATOR_ENC && (window.KURATOR_ENC.ver || 1) > (db.meta.encVer || 1);
  var needKey = db.students.length && typeof SYNC !== "undefined" && SYNC && SYNC.db && !SYNC.key;
  if (needUpd || needKey) {
    h += '<form class="card" id="updForm" style="margin-bottom:16px;border:2px solid var(--gold)"><b>' + (needUpd ? "Saytga yangi maʼlumotlar qoʻshilgan." : "Maʼlumotlarni bazaga ulash") + '</b><div class="muted" style="font-size:13.5px;margin:2px 0 10px">' +
      (needUpd ? "Ularni olish uchun parolni kiriting. Davomat, tashriflar va joylashuvlaringiz saqlanib qoladi." : "Parolni bir marta kiriting: shundan keyin davomat, tashriflar, rasmlar va joylashuvlar bazada saqlanadi va kuratorda ham koʻrinadi.") + '</div>' +
      '<div class="row"><input type="password" id="updPw" placeholder="Parol" aria-label="Parol" style="max-width:240px"><button class="btn gold" type="submit">Yangilash</button></div><div id="unlockErr" style="color:var(--bad);font-weight:700"></div></form>';
  }
  if (db.students.length) {
    var r = stats(), day = db.att[todayIso()] || {}, k = 0, marked = 0;
    for (var id in day) { marked++; if (day[id] === "k") k++; }
    var fl = db.students.filter(function (s) { return s.ob && (s.ob.flags || []).length; }).length;
    h += '<div class="stats">' +
      '<div class="stat"><b>' + r.jami + "</b><span>Talabalar</span></div>" +
      '<div class="stat"><b>' + r.qiz + " / " + r.ogil + "</b><span>Qizlar / yigitlar</span></div>" +
      '<div class="stat"><b>' + r.ijara + "</b><span>Ijarada turadi</span></div>" +
      '<div class="stat"><b>' + (marked ? k + " / " + db.students.length : "—") + "</b><span>" + (marked ? "Bugun darsda" : "Bugun davomat belgilanmagan") + "</span></div></div>";
    if (fl) h += '<button class="warnbox" data-goobj="1" style="display:block;width:100%;text-align:left;margin:-6px 0 16px;border:0;cursor:pointer"><b>' + fl + " ta obyektivkada aniqlashtirish kerak bo‘lgan joylar bor.</b> Ro‘yxatni ko‘rish uchun bosing.</button>";
  }
  return h;
}

/* =================== Talaba obyektivkasi =================== */
var TISU_STATUS = "Termiz iqtisodiyot va servis universiteti Tibbiyot fakulteti «Davolash ishi» ta’lim yo‘nalishi 1-kurs talabasi";
function titleCase(s) {
  return String(s || "").trim().split(/\s+/).map(function (w) {
    var l = w.toLowerCase();
    if (norm(l) === "ogli" || norm(l) === "qizi") return l;
    return l.charAt(0).toUpperCase() + l.slice(1);
  }).join(" ");
}
function parentFromCell(cell) {
  var lines = String(cell || "").split(/\n/).map(function (x) { return x.trim(); }).filter(Boolean);
  lines = lines.filter(function (l) { return !(phonesIn(l).length && !l.replace(/[\d\s+\-().]/g, "")); });
  return { fish: lines[0] || "—", ish: lines.slice(1).join(" ") || "—" };
}
// Obyektivkasi yo'q talaba (masalan, keyin Excel orqali qo'shilgan) uchun jadvaldan tuziladi
function obOf(s) {
  if (s.ob) return s.ob;
  var o = parentFromCell(s.ota), m = parentFromCell(s.ona), addr = s.otaOnaManzil || "—";
  return {
    fish: titleCase(s.fish), davr: "2026-yil sentabrdan", status: TISU_STATUS, generated: true,
    f: { tug: s.tugilgan || "—", tj: "—", millat: s.millat || "—", part: "yo‘q", mal: "Tugallanmagan oliy",
      tam: String(s.tugatgan || "—").replace(/\s*\((tugatgan yili[^)]*)\)/, ""), mut: "yo‘q", til: "—", ild: "yo‘q", ilu: "yo‘q", muk: "yo‘q", dep: "yo‘q" },
    mehnat: [["2026-yil sentabrdan", TISU_STATUS]],
    q: [["Otasi", o.fish, "—", o.ish, addr], ["Onasi", m.fish, "—", m.ish, addr]],
    flags: ["Obyektivka yuklanmagan — jadvaldagi ma’lumotlardan tuzildi. Qizil «—» joylarni to‘ldiring."]
  };
}
function mv(v) { return (!v || v === "—") ? '<span class="miss">—</span>' : esc(v); }
function paperHtml(s) {
  var ob = obOf(s), f = ob.f, h = "";
  h += '<div class="paper"><h3>MA’LUMOTNOMA</h3><div class="p-top"><div><p class="p-name">' + esc(ob.fish) + "</p><div>" + esc(ob.davr) + "<br>" + esc(ob.status) + "</div></div>" +
    (s.photo ? '<img class="p-photo" alt="' + esc(ob.fish) + '" src="' + s.photo + '">' : '<div class="p-photo" style="display:flex;align-items:center;justify-content:center;color:#B03020;font-size:12px;text-align:center">rasm 3×4</div>') + "</div>";
  h += '<div class="p-grid">';
  [["Tug‘ilgan yili:", f.tug], ["Tug‘ilgan joyi:", f.tj], ["Millati:", f.millat], ["Partiyaviyligi:", f.part], ["Ma’lumoti:", f.mal], ["Tamomlagan:", f.tam],
   ["Ma’lumoti bo‘yicha mutaxassisligi:", f.mut], ["Qaysi chet tillarini biladi:", f.til], ["Ilmiy darajasi:", f.ild], ["Ilmiy unvoni:", f.ilu]].forEach(function (x) {
    h += '<div class="p-f"><b>' + x[0] + "</b><span>" + mv(x[1]) + "</span></div>";
  });
  h += '</div><div class="p-f" style="margin-top:8px"><b>Davlat mukofotlari bilan taqdirlanganmi (qanaqa):</b><span>' + mv(f.muk) + "</span></div>" +
    '<div class="p-f" style="margin-top:6px"><b>Xalq deputatlari, respublika, viloyat, shahar va tuman Kengashi deputatimi yoki boshqa saylanadigan organlarning a’zosimi (to‘liq ko‘rsatilishi lozim):</b><span>' + mv(f.dep) + "</span></div>";
  h += '<div class="p-sec">MEHNAT FAOLIYATI</div><div class="p-meh">';
  ob.mehnat.forEach(function (m) { h += "<div>" + esc(m[0]) + " –</div><div>" + esc(m[1]) + "</div>"; });
  h += "</div></div>";
  h += '<div class="paper"><p class="p-sub">' + esc(ob.fish) + 'ning yaqin qarindoshlari haqida</p><p class="p-sub" style="margin-bottom:12px">MA’LUMOT</p>' +
    '<table><thead><tr><th style="width:14%">Qarindoshligi</th><th style="width:22%">Familiyasi, ismi va otasining ismi</th><th style="width:20%">Tug‘ilgan yili va joyi</th><th style="width:22%">Ish joyi va lavozimi</th><th>Turar joyi</th></tr></thead><tbody>';
  ob.q.forEach(function (r) { h += "<tr>" + r.map(function (v) { return "<td>" + mv(v) + "</td>"; }).join("") + "</tr>"; });
  h += "</tbody></table></div>";
  return h;
}
function allDataHtml(s) {
  var groups = {}, h = '<div class="data-grid">';
  FIELDS.forEach(function (f) { (groups[f.g] = groups[f.g] || []).push(f); });
  Object.keys(groups).forEach(function (g) {
    h += '<div class="fields" style="margin:0"><div class="fh">' + g + "</div>";
    groups[g].forEach(function (f) {
      var v = s[f.k], ph = /^(tel|ota|ona|ijarachi)$/.test(f.k) ? phonesIn(v) : [];
      h += '<div class="f"><div class="k">' + esc(f.label) + '</div><div class="v' + (v ? "" : " empty") + '">' + (v ? esc(v) : "kiritilmagan") + "</div>" +
        ph.map(function (p) { return '<a class="tel" href="tel:' + p.tel + '">' + svg("i-phone") + p.nice + "</a>"; }).join("") + "</div>";
    });
    h += "</div>";
  });
  return h + "</div>";
}
function objToolbar(s) {
  return '<div class="ob-head no-print"><div class="grow"><div style="font:600 18px/1.3 var(--font-display)">' + esc(obOf(s).fish) + '</div><div class="muted" style="font-size:13px">Manba: ' + esc((s.ob && s.ob.source) || "jadval") + "</div></div>" +
    '<button class="btn primary" data-word="' + s.id + '">' + svg("i-download") + "Word (.docx)</button>" +
    '<button class="btn ghost" data-print="1">' + svg("i-file") + "Chop etish</button>" +
    '<button class="btn ghost" data-open="' + s.id + '">' + svg("i-users") + "Kartochka</button></div>";
}
function flagsHtml(s) {
  var fl = obOf(s).flags || [];
  if (!fl.length) return '<div class="flags no-print" style="background:var(--good-soft);color:var(--good)"><b>Obyektivka to‘liq.</b> Aniqlashtiriladigan joy topilmadi.</div>';
  return '<div class="flags no-print"><b>Aniqlashtirish kerak (' + fl.length + ")</b><ul>" + fl.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>";
}
var objSel = null, objFilter = "all";
function renderObj() {
  var el = $("v-obj");
  if (!db.students.length) { emptyState("v-obj"); return; }
  var list = sorted();
  if (!objSel || !byId(objSel)) objSel = list[0].id;
  var nFlag = list.filter(function (s) { return (obOf(s).flags || []).length; }).length;
  var shown = objFilter === "flag" ? list.filter(function (s) { return (obOf(s).flags || []).length; }) : list;
  var h = '<div class="ob-layout"><div class="ob-list"><div class="chips"><button class="chip' + (objFilter === "all" ? " on" : "") + '" data-of="all">Hammasi<span class="n">' + list.length + '</span></button>' +
    '<button class="chip' + (objFilter === "flag" ? " on" : "") + '" data-of="flag">Aniqlashtirish kerak<span class="n">' + nFlag + "</span></button></div>";
  shown.forEach(function (s) {
    var n = (obOf(s).flags || []).length;
    h += '<button class="ob-item' + (s.id === objSel ? " on" : "") + '" data-osel="' + s.id + '">' + avatarHtml(s) + '<div class="grow"><div class="nm">' + esc(obOf(s).fish) + '</div><div style="margin-top:3px">' +
      (n ? '<span class="badge b-warn">' + n + " ta savol</span>" : '<span class="badge b-good">To‘liq</span>') + (s.ob ? "" : ' <span class="badge b-plain">Jadvaldan</span>') + "</div></div></button>";
  });
  var s = byId(objSel);
  h += '</div><div class="ob-main">' + objToolbar(s) + flagsHtml(s) + '<div class="paper-wrap">' + paperHtml(s) + "</div>" +
    '<div class="sec-title no-print">Talabaning barcha ma’lumotlari (Excel jadvalidan)</div><div class="no-print">' + allDataHtml(s) + "</div></div></div>";
  el.innerHTML = h;
}
function openObjSheet(id) {
  var s = byId(id); if (!s) return;
  openSheet("Talaba obyektivkasi", objToolbar(s) + flagsHtml(s) + '<div class="paper-wrap">' + paperHtml(s) + "</div>", { full: true });
  $("sheet").classList.add("wide");
}
async function downloadWord(id) {
  var s = byId(id); if (!s) return;
  busy(true, "Word fayl tayyorlanmoqda…");
  try {
    var b64 = await DocxGen.build(obOf(s), s.photo);
    busy(false);
    var name = (obOf(s).fish || "talaba").replace(/[\\\/:*?"<>|]+/g, " ") + " — obyektivka.docx";
    saveFile(name, "application/vnd.openxmlformats-officedocument.wordprocessingml.document", b64);
  } catch (e) { busy(false); console.error(e); toast("Word faylni yaratib bo‘lmadi."); }
}
function doPrint() {
  var inFrame = false; try { inFrame = window.self !== window.top; } catch (e) { inFrame = true; }
  if (inFrame) toast("Chop etish uchun «Word (.docx)» ni yuklab oling va Word’dan chop eting.");
  try { window.print(); } catch (e) { }
}


/* =================== Uy joylashuvi =================== */
// Matndan koordinatani topish: "41.31, 69.24", Google Maps (@lat,lng / q=lat,lng / !3dlat!4dlng), Yandex (ll=lng,lat / pt=lng,lat)
function parseLoc(text) {
  var t = String(text || "").trim(); if (!t) return null;
  var m, lat, lng;
  if ((m = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/.exec(t))) { lat = +m[1]; lng = +m[2]; }
  else if ((m = /@(-?\d+\.\d+),\s*(-?\d+\.\d+)/.exec(t))) { lat = +m[1]; lng = +m[2]; }
  else if ((m = /[?&](?:q|query|ll|destination|daddr)=(-?\d+\.\d+)(?:,|%2C)\s*(-?\d+\.\d+)/i.exec(t)) && !/yandex/i.test(t)) { lat = +m[1]; lng = +m[2]; }
  else if ((m = /yandex[^\s]*[?&](?:pt|ll|whatshere%5Bpoint%5D|rtext)=(-?\d+\.\d+)(?:,|%2C)(-?\d+\.\d+)/i.exec(t))) { lng = +m[1]; lat = +m[2]; }
  else if ((m = /(-?\d{1,2}\.\d{3,})\s*[,; ]\s*(-?\d{1,3}\.\d{3,})/.exec(t))) { lat = +m[1]; lng = +m[2]; }
  if (lat != null && Math.abs(lat) <= 90 && Math.abs(lng) <= 180) {
    // O'zbekiston uchun kenglik ~37–46, uzunlik ~55–74: teskari yozilgan bo'lsa almashtiramiz
    if (lat > 50 && lng < 50) { var x = lat; lat = lng; lng = x; }
    return { lat: +lat.toFixed(6), lng: +lng.toFixed(6) };
  }
  if (/^https?:\/\//i.test(t)) return { link: t.split(/\s/)[0] };
  return null;
}
function locLinks(j) {
  if (!j) return null;
  if (j.lat != null) {
    var c = j.lat + "," + j.lng;
    return { google: "https://www.google.com/maps/search/?api=1&query=" + c, yandex: "https://yandex.uz/maps/?pt=" + j.lng + "," + j.lat + "&z=17&l=map",
      route: "https://www.google.com/maps/dir/?api=1&destination=" + c, text: j.lat.toFixed(5) + ", " + j.lng.toFixed(5) };
  }
  return { google: j.link, yandex: null, route: j.link, text: "Xarita havolasi" };
}
function locBlock(s) {
  var j = s.joy, L = locLinks(j), h = '<div class="fields"><div class="fh">Uy joylashuvi</div>';
  if (!L) {
    h += '<div class="f"><div class="v empty">Joylashuv hali yuborilmagan</div><div class="row" style="flex-wrap:wrap;margin-top:8px"><button class="btn soft" data-loc="' + s.id + '">' + svg("i-pin") + "Joylashuv qoʻshish</button></div></div>";
  } else {
    h += '<div class="f"><div class="k">' + (j.src ? esc(j.src) + (j.at ? " · " + esc(j.at) : "") : "Joylashuv") + '</div><div class="v" style="font-variant-numeric:tabular-nums">' + esc(L.text) + "</div>" +
      '<div class="row" style="flex-wrap:wrap;margin-top:8px;gap:8px">' +
      '<a class="btn primary" target="_blank" rel="noopener" href="' + esc(L.route) + '">' + svg("i-pin") + "Yoʻl koʻrsatish</a>" +
      '<a class="btn ghost" target="_blank" rel="noopener" href="' + esc(L.google) + '">Google xarita</a>' +
      (L.yandex ? '<a class="btn ghost" target="_blank" rel="noopener" href="' + esc(L.yandex) + '">Yandex xarita</a>' : "") +
      '<button class="btn ghost" data-loc="' + s.id + '">' + svg("i-edit") + "Oʻzgartirish</button></div></div>";
  }
  return h + "</div>";
}
function openLocEdit(id) {
  var s = byId(id); if (!s) return;
  var cur = s.joy ? (s.joy.lat != null ? s.joy.lat + ", " + s.joy.lng : s.joy.link) : "";
  var h = '<form class="form" id="locForm"><div class="row">' + avatarHtml(s) + '<div class="grow"><b>' + esc(s.fish) + "</b></div></div>" +
    '<div><label for="locText">Joylashuv</label><textarea id="locText" rows="3" placeholder="Google yoki Yandex xarita havolasini, yoki koordinatani (masalan: 37.2241, 67.2783) qoʻying">' + esc(cur) + "</textarea></div>" +
    '<p class="note" style="margin:0">Telegramda talaba yuborgan joylashuvni bosing → xarita ochiladi → «Ulashish» orqali havolani nusxalab shu yerga qoʻying.</p>' +
    '<div id="locPrev" class="muted" style="min-height:20px;font-weight:700"></div>' +
    '<button type="submit" class="btn primary block">' + svg("i-check") + "Saqlash</button>" +
    (s.joy ? '<button type="button" class="btn danger block" data-locdel="' + s.id + '">' + svg("i-trash") + "Joylashuvni oʻchirish</button>" : "") + "</form>";
  openSheet("Uy joylashuvi", h, { onBack: function () { openStudent(id); } });
  var ta = $("locText"), pv = $("locPrev");
  function prev() { var p = parseLoc(ta.value); pv.textContent = !ta.value.trim() ? "" : p ? (p.lat != null ? "Topildi: " + p.lat + ", " + p.lng : "Havola saqlanadi (koordinata ichida yoʻq)") : "Koordinata yoki havola topilmadi"; pv.style.color = p ? "var(--good)" : "var(--bad)"; }
  ta.addEventListener("input", prev); prev();
  $("locForm").addEventListener("submit", function (e) {
    e.preventDefault(); var p = parseLoc(ta.value);
    if (!p) { toast("Koordinata yoki xarita havolasini qoʻying"); return; }
    p.src = "Qoʻlda kiritilgan"; p.at = fmtDate(todayIso()); s.joy = p;
    if (save()) { toast("Joylashuv saqlandi"); render(); openStudent(id); }
  });
}

/* ---------- Telegramdan bir yo'la yuklash (Telegram Desktop → Export chat history → JSON) ---------- */
function tgText(t) { return Array.isArray(t) ? t.map(function (x) { return typeof x === "string" ? x : (x.text || ""); }).join("") : String(t || ""); }
function nameScore(a, b) {
  var A = norm(a).replace(/[^a-z ]/g, " ").split(/\s+/).filter(function (w) { return w.length > 2; });
  var B = norm(b).replace(/[^a-z ]/g, " ").split(/\s+/).filter(function (w) { return w.length > 2; });
  var sc = 0;
  A.forEach(function (w) { B.forEach(function (v) { if (w === v) sc += 2; else if (w.length > 3 && v.length > 3 && (w.indexOf(v) === 0 || v.indexOf(w) === 0)) sc += 1; }); });
  return sc;
}
function guessStudent(names) {
  var best = null, bs = 0;
  db.students.forEach(function (s) {
    var sc = 0; names.forEach(function (n) { sc = Math.max(sc, nameScore(n, s.fish)); });
    if (sc > bs) { bs = sc; best = s; }
  });
  return bs >= 2 ? best : null;
}
function parseTelegram(json) {
  var chats = [];
  if (json.messages) chats.push(json);
  if (json.chats && json.chats.list) chats = chats.concat(json.chats.list);
  var found = [];
  chats.forEach(function (c) {
    var msgs = c.messages || [];
    msgs.forEach(function (m, i) {
      var li = m.location_information; if (!li || li.latitude == null) return;
      var who = m.forwarded_from || m.from || c.name || "";
      // Joylashuvdan keyingi 1-2 ta xabarda talaba ismini yozgan bo'lishi mumkin
      var extra = [];
      for (var k = 1; k <= 2 && msgs[i + k]; k++) if (msgs[i + k].from_id === m.from_id && (msgs[i + k].forwarded_from || "") === (m.forwarded_from || "")) extra.push(tgText(msgs[i + k].text));
      for (var k2 = 1; k2 <= 2 && msgs[i - k2]; k2++) if (msgs[i - k2].from_id === m.from_id && (msgs[i - k2].forwarded_from || "") === (m.forwarded_from || "")) extra.push(tgText(msgs[i - k2].text));
      found.push({ who: who, chat: c.name || "", note: extra.join(" ").slice(0, 80), lat: +(+li.latitude).toFixed(6), lng: +(+li.longitude).toFixed(6), date: (m.date || "").slice(0, 10), live: !!m.live_location_period_seconds });
    });
  });
  // Bir odamdan bir nechta bo'lsa — eng oxirgisi
  var byWho = {};
  found.forEach(function (f) { var k = norm(f.who) || f.lat + "," + f.lng; if (!byWho[k] || byWho[k].date <= f.date) byWho[k] = f; });
  return Object.keys(byWho).map(function (k) { return byWho[k]; });
}
function openTgImport(found) {
  if (!found.length) { openSheet("Telegramdan yuklash", '<p style="line-height:1.5">Faylda joylashuv xabari topilmadi.</p><p class="note">Telegram Desktop’da chatni oching → ⋮ → «Export chat history» → format: <b>Machine-readable JSON</b>. Hosil boʻlgan <b>result.json</b> faylini tanlang.</p>'); return; }
  var opts = '<option value="">— tashlab ketish —</option>' + sorted().map(function (s) { return '<option value="' + s.id + '">' + esc(s.fish) + "</option>"; }).join("");
  var h = '<p style="margin:0 0 12px;line-height:1.5"><b>' + found.length + ' ta joylashuv topildi.</b> Har birini qaysi talabaniki ekanini tekshiring — ism Telegramdagi nom boʻyicha taxminan tanlangan.</p><div class="list" style="grid-template-columns:1fr">';
  found.forEach(function (f, i) {
    var g = guessStudent([f.who, f.note, f.chat]);
    h += '<div class="card" style="padding:12px"><div class="row" style="align-items:flex-start"><div class="grow"><b>' + esc(f.who || "Nomaʼlum") + "</b>" + (f.note ? '<div class="muted" style="font-size:13px">«' + esc(f.note) + "»</div>" : "") +
      '<div class="muted" style="font-size:13px;font-variant-numeric:tabular-nums">' + f.lat + ", " + f.lng + " · " + esc(f.date) + (f.live ? " · jonli" : "") + "</div></div>" +
      '<a class="btn ghost" style="height:38px" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + f.lat + "," + f.lng + '">Xarita</a></div>' +
      '<select class="tgsel" data-i="' + i + '" style="margin-top:8px" aria-label="Talaba">' + opts.replace('value="' + (g ? g.id : "x") + '"', 'value="' + (g ? g.id : "x") + '" selected') + "</select></div>";
  });
  h += '</div><button class="btn primary block" id="tgOk" style="margin-top:14px">' + svg("i-check") + "Joylashuvlarni saqlash</button>";
  openSheet("Telegramdan joylashuvlar", h, { full: true });
  $("tgOk").onclick = function () {
    var n = 0;
    document.querySelectorAll(".tgsel").forEach(function (sel) {
      var s = byId(sel.value); if (!s) return; var f = found[+sel.dataset.i];
      s.joy = { lat: f.lat, lng: f.lng, src: "Telegram: " + (f.who || ""), at: f.date ? fmtDate(f.date) : "" }; n++;
    });
    if (save()) { closeSheet(); toast(n + " ta joylashuv saqlandi"); render(); }
  };
}
function doTgImport(file) {
  var rd = new FileReader();
  rd.onload = function () {
    try { openTgImport(parseTelegram(JSON.parse(rd.result))); }
    catch (e) { toast("Bu fayl Telegram eksporti (result.json) emas."); }
  };
  rd.readAsText(file);
}
var TG_MSG = "Assalomu alaykum! Kurator uyingizga tashrif rejasi uchun uyingiz joylashuvi kerak.\n\n" +
  "Uyingizda turgan holda menga Telegramda shunday yuboring:\n" +
  "1) 📎 (qisqich) belgisini bosing → «Joylashuv» (Location)\n" +
  "2) «Joriy joylashuvimni yuborish» ni bosing (jonli joylashuv emas)\n" +
  "3) Keyingi xabarda ism-familiyangizni yozing.\n\nJoylashuv faqat kurator tashrifi uchun ishlatiladi. Rahmat!";
function openTgHelp() {
  var h = '<p style="margin:0 0 10px;line-height:1.5">Bu xabarni guruh chatiga tashlang. Talabalar joylashuvni <b>sizga shaxsan</b> yuboradi (guruhga emas — boshqalar bir-birining uyini koʻrmasin).</p>' +
    '<textarea id="tgMsg" rows="9" readonly style="font-size:14px">' + esc(TG_MSG) + '</textarea><button class="btn primary block" id="tgCopy" style="margin-top:10px">' + svg("i-file") + "Xabarni nusxalash</button>" +
    '<div class="sec-title">Keyin saytga qanday kiritiladi</div>' +
    '<div class="fields"><div class="f"><div class="k">1-usul · bir yo‘la (kompyuterda)</div><div class="v">Har bir talabadan kelgan joylashuvni Telegramdagi «Saqlangan xabarlar»ga <b>forward</b> qiling. Keyin Telegram Desktop’da «Saqlangan xabarlar» → ⋮ → «Export chat history» → faqat matn, format <b>JSON</b>. Hosil boʻlgan <b>result.json</b> ni quyidagi tugma bilan yuklang — sayt ismlar boʻyicha oʻzi joylaydi, siz faqat tekshirasiz.</div></div>' +
    '<div class="f"><div class="k">2-usul · bittalab (telefonda ham)</div><div class="v">Talabaning kartochkasini oching → «Joylashuv qoʻshish» → Telegramdagi joylashuvni bosib, xarita havolasini nusxalab qoʻying.</div></div></div>' +
    '<button class="btn soft block" data-act="tgimport">' + svg("i-upload") + "Telegram eksportini yuklash (result.json)</button>";
  openSheet("Joylashuvni Telegram orqali yigʻish", h, { full: true });
  $("tgCopy").onclick = function () {
    var ta = $("tgMsg"); ta.select();
    var ok = false; try { ok = document.execCommand("copy"); } catch (e) { }
    if (navigator.clipboard) navigator.clipboard.writeText(TG_MSG).then(function () { toast("Xabar nusxalandi"); }, function () { toast(ok ? "Xabar nusxalandi" : "Matnni belgilab, oʻzingiz nusxalang"); });
    else toast(ok ? "Xabar nusxalandi" : "Matnni belgilab, oʻzingiz nusxalang");
  };
}


/* =================== Tashrif rasmlari (IndexedDB — katta hajm uchun) =================== */
var PHDB = null, PHMEM = {};
function phdb() {
  if (PHDB) return PHDB;
  PHDB = new Promise(function (res) {
    try {
      var rq = indexedDB.open("kurator-rasmlar", 1);
      rq.onupgradeneeded = function () { rq.result.createObjectStore("p"); };
      rq.onsuccess = function () { res(rq.result); };
      rq.onerror = function () { res(null); };
    } catch (e) { res(null); }
  });
  return PHDB;
}
async function phPut(id, data) {
  PHMEM[id] = data; var d = await phdb(); if (!d) return;
  await new Promise(function (r) { try { var tx = d.transaction("p", "readwrite"); tx.objectStore("p").put(data, id); tx.oncomplete = r; tx.onerror = r; } catch (e) { r(); } });
}
async function phGet(id) {
  if (PHMEM[id]) return PHMEM[id];
  var d = await phdb();
  if (id.indexOf("a:") === 0) {
    var loc = d ? await new Promise(function (r) { try { var q = d.transaction("p").objectStore("p").get(id); q.onsuccess = function () { r(q.result || null); }; q.onerror = function () { r(null); }; } catch (e) { r(null); } }) : null;
    if (loc) { PHMEM[id] = loc; return loc; }
    var u = await fetchPhoto(id); if (u) { await phPut(id, u); } return u;
  }
  if (!d) return null;
  return new Promise(function (r) { try { var q = d.transaction("p").objectStore("p").get(id); q.onsuccess = function () { if (q.result) PHMEM[id] = q.result; r(q.result || null); }; q.onerror = function () { r(null); }; } catch (e) { r(null); } });
}
async function phDel(id) {
  delete PHMEM[id]; var d = await phdb(); if (!d) return;
  try { d.transaction("p", "readwrite").objectStore("p").delete(id); } catch (e) { }
}
// Sahifadagi <img data-ph="..."> larni to'ldirish
function hydratePhotos(root) {
  (root || document).querySelectorAll("img[data-ph]:not([src])").forEach(function (im) {
    phGet(im.dataset.ph).then(function (u) { if (u) im.src = u; else im.closest(".vthumb").classList.add("lost"); });
  });
}
function thumbs(v, sid) {
  var ps = v.photos || []; if (!ps.length) return "";
  return '<div class="vthumbs">' + ps.map(function (pid) {
    return '<button type="button" class="vthumb" data-phopen="' + pid + '" data-cap="' + esc(fmtDate(v.date)) + '"><img data-ph="' + pid + '" alt="Tashrif rasmi, ' + esc(fmtDate(v.date)) + '"></button>';
  }).join("") + "</div>";
}
function openPhoto(pid, cap) {
  phGet(pid).then(function (u) {
    if (!u) { toast("Rasm bu brauzerda topilmadi"); return; }
    openSheet("Tashrif rasmi · " + cap, '<img src="' + u + '" alt="Tashrif rasmi" style="width:100%;border-radius:14px;display:block">');
    $("sheet").classList.add("wide");
  });
}

/* =================== Tashrif oynasi (rasmlar bilan) =================== */
function openVisitForm(id, visitId) {
  var s = byId(id); if (!s) return;
  var v = visitId ? (s.visits || []).filter(function (x) { return x.id === visitId; })[0] : null;
  var pending = [];   // yangi tanlangan rasmlar (dataURL)
  var h = '<form class="form" id="visitForm"><div class="row">' + avatarHtml(s) + '<div class="grow"><b>' + esc(s.fish) + '</b><div class="muted" style="font-size:13.5px">' + esc(s.hozirgi || s.manzil || "") + "</div></div></div>" +
    '<div><label for="vDate">Tashrif sanasi</label><input type="date" id="vDate" name="date" value="' + (v ? v.date : todayIso()) + '" required></div>' +
    '<div><label for="vNote">Izoh (yashash sharoiti, kim bilan suhbatlashildi, xulosa)</label><textarea id="vNote" name="note" rows="4" placeholder="Masalan: Ijara uyi talabga javob beradi, uy egasi bilan suhbatlashildi.">' + esc(v ? v.note : "") + "</textarea></div>" +
    '<div><label>Rasmlar</label>' + (v ? thumbs(v, s.id) : "") + '<div class="vthumbs" id="vNew"></div>' +
    '<label class="btn ghost block" for="vFiles" style="cursor:pointer">' + svg("i-camera") + 'Rasm qoʻshish</label><input type="file" id="vFiles" accept="image/*" multiple class="hidden"></div>' +
    '<button type="submit" class="btn primary block">' + svg("i-check") + (v ? "Oʻzgarishlarni saqlash" : "Tashrifni saqlash") + "</button></form>";
  openSheet(v ? "Tashrifni tahrirlash" : "Uyiga tashrif", h, { onBack: function () { openStudent(id); } });
  hydratePhotos($("sheetBody"));
  $("vFiles").addEventListener("change", async function (e) {
    var files = [].slice.call(e.target.files || []);
    for (var i = 0; i < files.length; i++) {
      busy(true, "Rasm tayyorlanmoqda… " + (i + 1) + "/" + files.length);
      var d = await shrinkImage(files[i], 1280);
      if (d) { pending.push(d); $("vNew").insertAdjacentHTML("beforeend", '<span class="vthumb"><img src="' + d + '" alt="Yangi rasm"></span>'); }
    }
    busy(false); e.target.value = "";
  });
  $("visitForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    var fd = new FormData(e.target), ids = [];
    busy(true, "Saqlanmoqda…");
    for (var i = 0; i < pending.length; i++) { busy(true, "Rasm bazaga yuklanmoqda… " + (i + 1) + "/" + pending.length); var pid = (await uploadPhoto(pending[i])) || ("ph_" + uid()); await phPut(pid, pending[i]); ids.push(pid); }
    busy(false);
    if (v) { v.date = fd.get("date") || v.date; v.note = String(fd.get("note") || "").trim(); v.photos = (v.photos || []).concat(ids); }
    else (s.visits = s.visits || []).push({ id: uid(), date: fd.get("date") || todayIso(), note: String(fd.get("note") || "").trim(), photos: ids });
    if (save()) { toast(v ? "Tashrif yangilandi" : "Tashrif qayd etildi" + (ids.length ? " · " + ids.length + " ta rasm" : "")); render(); openStudent(id); }
  });
}
function visitHistory(s) {
  var vs = (s.visits || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; });
  var h = '<div class="fields"><div class="fh">Uyiga tashriflar · ' + vs.length + ' marta</div><div class="vlist">';
  if (!vs.length) h += '<div class="f"><div class="v empty">Hali tashrif qayd etilmagan</div></div>';
  vs.forEach(function (v, i) {
    h += '<div class="vi"><div class="vnum">' + (vs.length - i) + '</div><div class="grow"><b>' + fmtDate(v.date) + ' <span class="muted" style="font-weight:600">· ' + OYLAR[parseIso(v.date).getMonth()] + "</span></b>" +
      '<div class="muted" style="white-space:pre-wrap">' + esc(v.note || "Izohsiz") + "</div>" + thumbs(v, s.id) + "</div>" +
      '<button class="iconbtn" data-vedit="' + s.id + "|" + v.id + '" aria-label="Tahrirlash yoki rasm qoʻshish">' + svg("i-edit") + "</button>" +
      '<button class="iconbtn" data-delvisit="' + s.id + "|" + v.id + '" aria-label="Oʻchirish">' + svg("i-trash") + "</button></div>";
  });
  return h + '</div></div><button class="btn soft block" data-visit="' + s.id + '">' + svg("i-plus") + "Yangi tashrif qoʻshish</button>";
}

/* =================== Davr bo'yicha tashriflar =================== */
var visPeriod = todayIso().slice(0, 7);   // "2026-11", "sem" yoki "all"
function semesterRange(iso) {
  var d = parseIso(iso), y = d.getFullYear(), m = d.getMonth() + 1;
  if (m >= 9) return [y + "-09-01", (y + 1) + "-01-31", "kuzgi semestr " + y];
  if (m <= 1) return [(y - 1) + "-09-01", y + "-01-31", "kuzgi semestr " + (y - 1)];
  return [y + "-02-01", y + "-08-31", "bahorgi semestr " + y];
}
function inPeriod(date) {
  if (visPeriod === "all") return true;
  if (visPeriod === "sem") { var r = semesterRange(todayIso()); return date >= r[0] && date <= r[1]; }
  return date.indexOf(visPeriod) === 0;
}
function periodLabel() {
  if (visPeriod === "all") return "butun davr";
  if (visPeriod === "sem") return semesterRange(todayIso())[2];
  var d = parseIso(visPeriod + "-01"); return OYLAR[d.getMonth()] + " " + d.getFullYear();
}
function visitsIn(s) { return (s.visits || []).filter(function (v) { return inPeriod(v.date); }); }

/* =================== Sheet (oyna) =================== */
var sheetStack = [];
function openSheet(title, body, opts) {
  opts = opts || {};
  $("sheetTitle").textContent = title;
  $("sheetBody").innerHTML = body;
  $("sheetActions").innerHTML = opts.actions || "";
  $("sheet").classList.toggle("full", !!opts.full);
  $("sheet").classList.remove("wide");
  $("sheet").classList.add("open");
  $("sheetBody").scrollTop = 0;
  sheetStack = [opts.onBack || null];
  if (typeof hydratePhotos === "function") hydratePhotos($("sheetBody"));
}
function closeSheet() { $("sheet").classList.remove("open"); sheetStack = []; }
function sheetOpen() { return $("sheet").classList.contains("open"); }

/* ---------- Talaba kartochkasi ---------- */
function openStudent(id) {
  var s = byId(id); if (!s) return;
  var hd = hududOf(s), studentPhones = phonesIn(s.tel), parentPhones = phonesIn(s.ota).concat(phonesIn(s.ona));
  var h = '<div class="profile">' + avatarHtml(s) + '<div class="grow"><h2>' + esc(s.fish || "Ismsiz") + '</h2><div class="row" style="flex-wrap:wrap;gap:6px">' + secBadge(s) +
    (hd.tuman || hd.viloyat ? '<span class="badge b-plain">' + esc(hd.tuman || hd.viloyat) + "</span>" : "") +
    (genderOf(s) ? '<span class="badge b-plain">' + (genderOf(s) === "A" ? "Qiz" : "Yigit") + "</span>" : "") + "</div></div></div>";
  h += '<div class="qa">' +
    (studentPhones[0] ? '<a href="tel:' + studentPhones[0].tel + '">' + svg("i-phone") + "Talaba</a>" : '<a class="dis">' + svg("i-phone") + "Talaba</a>") +
    (parentPhones[0] ? '<a href="tel:' + parentPhones[0].tel + '">' + svg("i-phone") + "Ota-ona</a>" : '<a class="dis">' + svg("i-phone") + "Ota-ona</a>") +
    '<button data-visit="' + s.id + '">' + svg("i-home") + "Tashrif</button>" +
    '<button data-obj="' + s.id + '">' + svg("i-file") + "Obyektivka</button>" +
    '<button data-edit="' + s.id + '">' + svg("i-edit") + "Tahrirlash</button></div>";
  var groups = {};
  FIELDS.forEach(function (f) { if (f.k !== "fish") (groups[f.g] = groups[f.g] || []).push(f); });
  Object.keys(groups).forEach(function (g) {
    if (g === "Tashrif" && !s.uyiga) return;
    h += '<div class="fields"><div class="fh">' + g + "</div>";
    groups[g].forEach(function (f) {
      var v = s[f.k];
      if (g === "Tashrif" && !v) return;
      var ph = (f.k === "tel" || f.k === "ota" || f.k === "ona" || f.k === "ijarachi") ? phonesIn(v) : [];
      if (f.k === "jins" && v) v = genderOf(s) === "A" ? "Ayol (" + v + ")" : genderOf(s) === "E" ? "Erkak (" + v + ")" : v;
      var half = /^(kirgan|shakl|tugilgan|millat|jins|yetim|chinYetim|harbiy|oilaviy)$/.test(f.k);
      var onlyPhone = ph.length && !String(v).replace(/[\d\s+\-().,;]/g, "");
      h += '<div class="f' + (half ? " half" : "") + '"><div class="k">' + esc(f.label) + "</div>" + (onlyPhone ? "" : '<div class="v' + (v ? "" : " empty") + '">' + (v ? esc(v) : "kiritilmagan") + "</div>") +
        ph.map(function (p) { return '<a class="tel" href="tel:' + p.tel + '">' + svg("i-phone") + p.nice + "</a>"; }).join("") + "</div>";
    });
    if (g === "Tashrif" && !s.uyiga) h += "";
    h += "</div>";
  });
  h += locBlock(s);
  h += visitHistory(s);
  // Davomat (joriy oy)
  var ym = todayIso().slice(0, 7), ma = monthAtt(ym).per[s.id] || { k: 0, s: 0, ss: 0 };
  h += '<div class="fields" style="margin-top:12px"><div class="fh">Davomat — ' + OYLAR[new Date().getMonth()] + '</div><div class="f"><div class="row" style="gap:6px;flex-wrap:wrap"><span class="badge b-good">Keldi: ' + ma.k + '</span><span class="badge b-warn">Sababli: ' + ma.s + '</span><span class="badge b-bad">Sababsiz: ' + ma.ss + "</span></div></div></div>";
  openSheet(shortName(s.fish), h, { full: true, actions: '<button class="iconbtn" data-edit="' + s.id + '" aria-label="Tahrirlash">' + svg("i-edit") + "</button>" });
}

/* ---------- Tahrirlash / qoʻshish ---------- */
var editPhoto = null;
function openEdit(id) {
  var s = id ? byId(id) : { id: "", section: "ijara", fish: "" };
  if (id && !s) return;
  editPhoto = s.photo || null;
  var h = '<form class="form" id="editForm" autocomplete="off">';
  h += '<div class="photo-edit"><div id="editAva">' + avatarHtml({ photo: editPhoto, fish: s.fish }) + '</div><div class="row" style="flex-wrap:wrap;gap:8px"><button type="button" class="btn soft" data-act="pickphoto">' + svg("i-camera") + 'Rasm</button><button type="button" class="btn ghost" data-act="rmphoto">Olib tashlash</button></div></div>';
  h += "<div><label>Yashash turi</label><select name=\"section\"><option value=\"ijara\"" + (s.section === "ijara" ? " selected" : "") + ">Ijarada turadi</option><option value=\"uy\"" + (s.section !== "ijara" ? " selected" : "") + ">Oʻz uyidan qatnaydi</option></select></div>";
  FIELDS.forEach(function (f) {
    var v = s[f.k] == null ? "" : String(s[f.k]);
    if (f.k === "jins") {
      var g = genderOf(s);
      h += '<div><label>Jinsi</label><select name="jins"><option value="">—</option><option value="E"' + (g === "E" ? " selected" : "") + '>Erkak (E)</option><option value="A"' + (g === "A" ? " selected" : "") + ">Ayol (A)</option></select></div>";
      return;
    }
    h += "<div><label>" + esc(f.label) + "</label>" + (f.multi ? '<textarea name="' + f.k + '">' + esc(v) + "</textarea>" : '<input name="' + f.k + '" value="' + esc(v) + '"' + (f.k === "tel" ? ' inputmode="tel"' : "") + ">") + "</div>";
  });
  var hd = detectHudud(s), opts = '<option value="">Avtomatik' + (hd.tuman || hd.viloyat ? " (" + esc(hd.tuman || hd.viloyat) + ")" : " — aniqlanmadi") + "</option>";
  TUMANLAR.forEach(function (t) { opts += '<option value="T|' + t[0] + '"' + (s.hududTuman === t[0] ? " selected" : "") + ">" + t[0] + "</option>"; });
  VILOYATLAR.forEach(function (v) { if (v[0] !== SURXON) opts += '<option value="V|' + v[0] + '"' + (!s.hududTuman && s.hududViloyat === v[0] ? " selected" : "") + ">" + v[0] + "</option>"; });
  h += '<div><label>Hudud (hisobot uchun)</label><select name="hudud">' + opts + "</select></div>";
  h += '<button type="submit" class="btn primary block">Saqlash</button>';
  if (id) h += '<button type="button" class="btn danger block" data-del="' + s.id + '">' + svg("i-trash") + "Talabani oʻchirish</button>";
  h += "</form>";
  openSheet(id ? "Tahrirlash" : "Yangi talaba", h, { full: true, onBack: id ? function () { openStudent(id); } : null });
  $("editForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(e.target), t = id ? byId(id) : { id: uid(), custom: true, visits: [], order: (db.students.length + 1), no: db.students.length + 1 };
    if (!String(fd.get("fish") || "").trim()) { toast("F.I.Sh ni kiriting."); return; }
    FIELDS.forEach(function (f) { t[f.k] = String(fd.get(f.k) || "").trim(); });
    t.section = fd.get("section");
    var hv = String(fd.get("hudud") || "");
    t.hududTuman = hv.indexOf("T|") === 0 ? hv.slice(2) : "";
    t.hududViloyat = hv.indexOf("V|") === 0 ? hv.slice(2) : (t.hududTuman ? SURXON : "");
    t.photo = editPhoto;
    if (!id) db.students.push(t);
    if (save()) { toast("Saqlandi"); render(); openStudent(t.id); }
  });
}

/* ---------- Tashrif ---------- */
function openVisit(id) { return openVisitForm(id); }
function openVisitOld(id) {
  var s = byId(id); if (!s) return;
  var h = '<form class="form" id="visitForm"><div class="row">' + avatarHtml(s) + '<div class="grow"><b>' + esc(s.fish) + '</b><div class="muted" style="font-size:13.5px">' + esc(s.hozirgi || s.manzil || "") + "</div></div></div>" +
    '<div><label>Tashrif sanasi</label><input type="date" name="date" value="' + todayIso() + '" required></div>' +
    '<div><label>Izoh (yashash sharoiti, kim bilan suhbatlashildi, xulosa)</label><textarea name="note" rows="4" placeholder="Masalan: Ijara uyi talabga javob beradi, uy egasi bilan suhbatlashildi."></textarea></div>' +
    '<button type="submit" class="btn primary block">' + svg("i-check") + "Tashrifni saqlash</button></form>";
  openSheet("Uyiga tashrif", h, { onBack: null });
  $("visitForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var fd = new FormData(e.target);
    (s.visits = s.visits || []).push({ id: uid(), date: fd.get("date") || todayIso(), note: String(fd.get("note") || "").trim() });
    if (save()) { toast("Tashrif qayd etildi"); closeSheet(); render(); }
  });
}

/* ---------- Sozlamalar ---------- */
function openSettings() {
  var m = db.meta, h = '<form class="form" id="setForm">' +
    '<div class="fields" style="margin:0"><div class="fh">Guruh</div><div class="f"><label>Guruh nomi</label><input name="group" value="' + esc(m.group) + '" placeholder="Masalan: Davolash ishi 26-39"></div>' +
    '<div class="f"><label>Fakultet</label><input name="fakultet" value="' + esc(m.fakultet) + '"></div>' +
    '<div class="f"><label>Kurator F.I.Sh</label><input name="kurator" value="' + esc(m.kurator) + '"></div></div>' +
    '<button type="submit" class="btn primary block">Saqlash</button></form>';
  h += '<div class="sec-title">Maʼlumotlar</div><div class="actions">' +
    '<button class="btn ghost block" data-act="import">' + svg("i-upload") + "Excel roʻyxatni yuklash</button>" +
    '<button class="btn ghost block" data-act="backup">' + svg("i-download") + "Zaxira nusxa saqlash</button>" +
    '<button class="btn ghost block" data-act="restore">' + svg("i-file") + "Zaxira nusxadan tiklash</button>" +
    '<button class="btn ghost block" data-act="tghelp">' + svg("i-pin") + "Joylashuvlarni Telegram orqali yigʻish</button></div>";
  h += '<div class="sec-title">Akkaunt</div><div class="fields"><div class="f"><div class="k">Kirgan akkaunt</div><div class="v" data-who>' + esc(FB.user ? FB.user.email : "—") + "</div></div></div><div class=\"actions\">" +
    (FB.isAdmin ? '<button class="btn soft block" id="btnAccess">' + svg("i-users") + "Kirish ruxsati (kuratorni qoʻshish)</button>" : "") +
    '<button class="btn ghost block" id="btnSignOut">' + svg("i-lock") + "Chiqish</button></div>";
  h += '<div class="sec-title">Xavfsizlik</div><div class="actions">' +
    (db.settings.pin ? '<button class="btn ghost block" data-act="pinoff">' + svg("i-lock") + "PIN-kodni oʻchirish</button>" : '<button class="btn ghost block" data-act="pinon">' + svg("i-lock") + "PIN-kod oʻrnatish</button>") + "</div>" +
    '<p class="note">Pasport, telefon va manzillar — shaxsiy maʼlumot. Ular shifrlangan holda saqlanadi va faqat ruxsat berilgan akkauntlar parol kaliti bilan ocha oladi.</p>';
  h += '<div class="sec-title">Koʻrinish</div><div class="chips">' + [["auto", "Avtomatik"], ["light", "Yorugʻ"], ["dark", "Qorongʻi"]].map(function (t) { return '<button class="chip' + (db.settings.theme === t[0] ? " on" : "") + '" data-theme="' + t[0] + '">' + t[1] + "</button>"; }).join("") + "</div>";
  h += '<div class="sec-title">Xavfli amal</div><button class="btn danger block" data-act="wipe">' + svg("i-trash") + "Barcha maʼlumotlarni oʻchirish</button>";
  openSheet("Sozlamalar", h, { full: true });
  if ($("btnAccess")) $("btnAccess").onclick = openAccess;
  if ($("btnSignOut")) $("btnSignOut").onclick = function () { confirmBox("Chiqish", "Bu kompyuterdan chiqasiz. Maʼlumotlar bazada qoladi, keyingi safar email va parol bilan kirasiz.", "Chiqish", fbSignOut); };
  $("setForm").addEventListener("submit", function (e) {
    e.preventDefault(); var fd = new FormData(e.target);
    db.meta.group = String(fd.get("group") || "").trim(); db.meta.fakultet = String(fd.get("fakultet") || "").trim(); db.meta.kurator = String(fd.get("kurator") || "").trim();
    if (save()) { toast("Saqlandi"); render(); }
  });
}
function applyTheme() {
  var t = db.settings.theme;
  if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme");
}
function confirmBox(title, text, okLabel, onOk, danger) {
  openSheet(title, '<p style="margin:4px 2px 16px;line-height:1.5">' + text + '</p><div class="actions"><button class="btn ' + (danger ? "danger" : "primary") + ' block" id="cOk">' + okLabel + '</button><button class="btn ghost block" id="cNo">Bekor qilish</button></div>');
  $("cOk").onclick = function () { closeSheet(); onOk(); };
  $("cNo").onclick = closeSheet;
}

/* =================== Excel import =================== */
function excelDate(v) {
  if (typeof v === "number" && v > 1000 && v < 80000) {
    var d = new Date(Math.round((v - 25569) * 86400000));
    return pad(d.getUTCDate()) + "." + pad(d.getUTCMonth() + 1) + "." + d.getUTCFullYear();
  }
  var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(v));
  if (m) return m[3] + "." + m[2] + "." + m[1];
  return String(v);
}
async function shrinkImage(blob, max) {
  max = max || 320;
  var url = URL.createObjectURL(blob);
  try {
    var img = await new Promise(function (res, rej) { var i = new Image(); i.onload = function () { res(i); }; i.onerror = rej; i.src = url; });
    var r = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
    var c = document.createElement("canvas"); c.width = Math.max(1, Math.round(img.naturalWidth * r)); c.height = Math.max(1, Math.round(img.naturalHeight * r));
    var ctx = c.getContext("2d"); ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height); ctx.drawImage(img, 0, 0, c.width, c.height);
    return c.toDataURL("image/jpeg", 0.82);
  } catch (e) { return null; } finally { URL.revokeObjectURL(url); }
}
async function parseRoster(file) {
  var wb = await XlsxIO.readWorkbook(file), pick = null, headRow = 0;
  for (var i = 0; i < wb.sheets.length && !pick; i++) {
    var sh = await wb.loadSheet(wb.sheets[i]);
    var rows = Object.keys(sh.rows).map(Number).sort(function (a, b) { return a - b; });
    for (var j = 0; j < rows.length && j < 30; j++) {
      var cells = sh.rows[rows[j]], hit = 0;
      for (var c in cells) { var t = norm(cells[c]); if (/f\.?\s?i\.?\s?sh/.test(t) || /tugilgan/.test(t) || /pasport/.test(t)) hit++; }
      if (hit >= 2 || (hit && Object.keys(cells).length > 4)) { pick = sh; headRow = rows[j]; break; }
    }
  }
  if (!pick) throw new Error("Faylda talabalar jadvali topilmadi. Sarlavhada «F.I.Sh» ustuni boʻlishi kerak.");
  // Ustunlarni aniqlash
  var head = pick.rows[headRow], colMap = {}, used = {};
  Object.keys(head).map(Number).sort(function (a, b) { return a - b; }).forEach(function (c) {
    var t = norm(head[c]);
    for (var k = 0; k < HEAD_RULES.length; k++) {
      var key = HEAD_RULES[k][0];
      if (used[key]) continue;
      if (HEAD_RULES[k][1].test(t)) { colMap[c] = key; used[key] = 1; break; }
    }
  });
  if (!used.fish) throw new Error("«F.I.Sh» ustuni topilmadi.");
  var fishCol = +Object.keys(colMap).filter(function (c) { return colMap[c] === "fish"; })[0];
  var photoCol = +(Object.keys(colMap).filter(function (c) { return colMap[c] === "photo"; })[0] || 0);
  // Sarlavhadagi guruh nomi
  var title = "";
  Object.keys(pick.rows).map(Number).filter(function (r) { return r < headRow; }).forEach(function (r) { for (var c in pick.rows[r]) if (String(pick.rows[r][c]).length > title.length) title = String(pick.rows[r][c]); });
  // Qatorlar
  var section = "ijara", students = [], rowOf = {};
  Object.keys(pick.rows).map(Number).filter(function (r) { return r > headRow; }).sort(function (a, b) { return a - b; }).forEach(function (r) {
    var cells = pick.rows[r], keys = Object.keys(cells), fish = cells[fishCol];
    if (!fish || norm(fish).length < 3) {
      var txt = norm(keys.map(function (k) { return cells[k]; }).join(" "));
      if (keys.length <= 3 && txt) {
        if (/ijara/.test(txt)) section = "ijara";
        else if (/uyidan|oz uy|uyida|ota-?onasi bilan/.test(txt)) section = "uy";
      }
      return;
    }
    var s = { id: uid(), section: section, visits: [], order: students.length + 1, no: students.length + 1, photo: null };
    for (var c in colMap) {
      var key = colMap[c], v = cells[c];
      if (key === "photo" || v == null) continue;
      if (key === "no") { if (typeof v === "number") s.no = v; continue; }
      if (key === "tugilgan") v = excelDate(v);
      else if (typeof v === "number") v = String(v);
      else if (typeof v === "boolean") v = v ? "ha" : "yoʻq";
      s[key] = String(v).replace(/\r\n/g, "\n").trim();
    }
    s.no = students.length + 1;
    rowOf[r] = s; students.push(s);
  });
  if (!students.length) throw new Error("Jadvalda talaba topilmadi.");
  // Rasmlar
  var photos = 0;
  var imgs = pick.images.filter(function (im) { return rowOf[im.row] && (!photoCol || Math.abs(im.col - photoCol) <= 1); });
  for (var p = 0; p < imgs.length; p++) {
    var st = rowOf[imgs[p].row]; if (st.photo) continue;
    busy(true, "Rasmlar oʻqilmoqda… " + (p + 1) + "/" + imgs.length);
    var data = await shrinkImage(await imgs[p].getBlob());
    if (data) { st.photo = data; photos++; }
  }
  var gm = /([\wʻʼ'`ʻ\- ]+?)\s*ta.?lim.*?(\d{2}\s?-\s?\d{2,3})\s*-?\s*guruh/i.exec(title);
  var groupGuess = "";
  var g2 = /(\d{2}\s?-\s?\d{2,3})\s*-?\s*guruh/i.exec(title);
  var yn = /«([^»]+)»|"([^"]+)"/.exec(title);
  if (g2) groupGuess = ((yn && (yn[1] || yn[2])) ? (yn[1] || yn[2]) + " " : "") + g2[1].replace(/\s/g, "");
  return { students: students, photos: photos, title: title.trim(), group: groupGuess, sheetName: pick.name, cols: Object.keys(colMap).length };
}
async function doImport(file) {
  busy(true, "Excel fayl oʻqilmoqda…");
  try {
    var res = await parseRoster(file);
    busy(false);
    var ij = res.students.filter(function (s) { return s.section === "ijara"; }).length;
    var h = '<div class="card" style="margin-bottom:12px"><div style="font-size:22px;font-weight:750">' + res.students.length + ' nafar talaba topildi</div><div class="muted" style="margin-top:4px">' +
      ij + " nafari ijarada, " + (res.students.length - ij) + " nafari oʻz uyida · " + res.photos + " ta rasm · " + res.cols + ' ta ustun</div></div>';
    h += '<div class="fields"><div class="fh">Birinchi qatorlar</div>' + res.students.slice(0, 4).map(function (s) {
      return '<div class="f row">' + avatarHtml(s) + '<div class="grow"><b>' + esc(s.fish) + '</b><div class="muted" style="font-size:13px">' + esc(s.yonalish || "") + "</div></div></div>";
    }).join("") + "</div>";
    if (db.students.length) h += '<div class="warnbox" style="margin:0 0 12px">Ilovada ' + db.students.length + " nafar talaba bor. Yangi roʻyxat ularning oʻrnini egallaydi. F.I.Sh bir xil boʻlgan talabalarning davomati, tashriflari va qoʻlda tanlangan hududi saqlanib qoladi.</div>";
    h += '<button class="btn primary block" id="impOk">' + svg("i-check") + "Roʻyxatni saqlash</button>";
    openSheet("Excel fayl", h);
    $("impOk").onclick = function () {
      var old = {}; db.students.forEach(function (s) { old[norm(s.fish)] = s; });
      var keepIds = {};
      res.students.forEach(function (s) {
        var o = old[norm(s.fish)];
        if (o) { s.id = o.id; s.visits = o.visits || []; if (o.ob) s.ob = o.ob; s.hududTuman = o.hududTuman || ""; s.hududViloyat = o.hududViloyat || ""; if (!s.photo && o.photo) s.photo = o.photo; }
        keepIds[s.id] = 1;
      });
      Object.keys(db.att).forEach(function (d) { for (var id in db.att[d]) if (!keepIds[id]) delete db.att[d][id]; if (!Object.keys(db.att[d]).length) delete db.att[d]; });
      db.students = res.students;
      db.meta.title = res.title; db.meta.importedAt = new Date().toISOString();
      if (!db.meta.group && res.group) db.meta.group = res.group;
      if (save()) { closeSheet(); toast("Roʻyxat saqlandi: " + res.students.length + " nafar"); setView("students"); }
    };
  } catch (e) {
    busy(false); console.error(e);
    openSheet("Faylni oʻqib boʻlmadi", '<p style="line-height:1.5">' + esc(e.message || String(e)) + '</p><p class="muted">Fayl .xlsx formatida boʻlishi kerak (eski .xls boʻlsa, Excelda «Saqlash: .xlsx» qiling).</p><button class="btn primary block" data-act="import">Boshqa faylni tanlash</button>');
  }
}

/* =================== Excel eksport =================== */
function H(v) { return { v: v, s: "header" }; }
function C(v) { return { v: v, s: "cell" }; }
function N(v) { return { v: v, s: "num" }; }
function buildReport(ym) {
  var list = sorted(), r = stats(), sheets = [], ymd = parseIso(ym + "-01"), monName = OYLAR[ymd.getMonth()] + " " + ymd.getFullYear();
  var grpFull = db.meta.group || "", fak = db.meta.fakultet || "";
  var gm = /\d{2}\s?-\s?\d{2,3}/.exec(grpFull), grp = gm ? gm[0].replace(/\s/g, "") : grpFull;

  // 1. Talabalar roʻyxati (asl jadval tartibida)
  var cols = [5].concat(EXPORT_ORDER.map(function (f) { return f.w; }));
  var rows = [], merges = [], last = EXPORT_ORDER.length + 1, lastCol = XlsxIO.numToCol(last);
  rows.push([{ v: db.meta.title || (grpFull + " guruhi talabalari toʻgʻrisida maʼlumot"), s: "title" }]); merges.push("A1:" + lastCol + "1");
  rows.push([]);
  rows.push([H("№")].concat(EXPORT_ORDER.map(function (f) { return H(f.head); })));
  var sec = null, n = 0;
  list.forEach(function (s) {
    if (s.section !== sec) {
      sec = s.section; rows.push([{ v: sec === "ijara" ? "Ijarada turadigan talabalar" : "Oʻz uyidan qatnaydigan talabalar", s: "section" }]);
      merges.push("A" + rows.length + ":" + lastCol + rows.length);
    }
    n++;
    rows.push([N(n)].concat(EXPORT_ORDER.map(function (f) {
      if (f.k === "uyiga") {
        var parts = (s.visits || []).slice().sort(function (a, b) { return a.date > b.date ? 1 : -1; }).map(function (v) { return fmtDate(v.date) + (v.note ? " — " + v.note : ""); });
        if (s.uyiga) parts.unshift(s.uyiga);
        return C(parts.join("\n"));
      }
      return C(s[f.k] || "");
    })));
  });
  sheets.push({ name: "Talabalar roʻyxati", cols: cols, rows: rows, merges: merges, freeze: "C4", heights: { 0: 36, 2: 64 } });

  // 2. Umumiy maʼlumot (asl jadval shaklida)
  var u = [];
  u.push([{ v: "Ijarada yashab tahsil olayotgan talabalar toʻgʻrisida MAʼLUMOT", s: "title" }]); u.push([]);
  u.push([H("№"), H("Fakultet nomi"), H("Yoʻnalish nomi"), H("Guruhi"), H("Guruhidagi talabalar soni"), H("Shundan, qizlar"), H("Shundan,"), H(""), H("Boshqa viloyatdan"), H("Shundan,"), H("")]);
  u.push([H(""), H(""), H(""), H(""), H(""), H(""), H("Ijarada turadi"), H("Oʻz uyidan qatnaydi"), H(""), H("Oʻgʻil bola"), H("Qiz bola")]);
  var yon = (list[0] && list[0].yonalish) || "";
  u.push([N(1), C(fak), C(yon), C(grp), N(r.jami), N(r.qiz), N(r.ijara), N(r.uy), N(r.boshqaVil), N(r.boshqaVil - r.boshqaVilQiz), N(r.boshqaVilQiz)]);
  sheets.push({ name: "Umumiy maʼlumot", cols: [5, 26, 24, 14, 12, 10, 11, 12, 11, 10, 10], rows: u, merges: ["A1:K1", "A3:A4", "B3:B4", "C3:C4", "D3:D4", "E3:E4", "F3:F4", "G3:H3", "I3:I4", "J3:K3"], heights: { 0: 30, 2: 30, 3: 30 } });

  // 3. Tumanlar kesimi (fakultet jadvali shaklida: tuman + shundan qiz)
  var tr = [], tm = [];
  tr.push([{ v: "Talabalar toʻgʻrisida tumanlar kesimida MAʼLUMOT", s: "title" }]); tr.push([]);
  var th = [H("№"), H("Fakultet nomi"), H("Yoʻnalish nomi"), H("Guruhi")], tv = [N(1), C(fak), C(yon), C(grp)];
  TUMANLAR.forEach(function (t) { var x = r.tuman[t[0]] || { n: 0, qiz: 0 }; th.push(H(t[0]), H("Shundan, qiz bolalar")); tv.push(N(x.n), N(x.qiz)); });
  th.push(H("Aniqlanmagan")); tv.push(N(r.aniqmas.length));
  tr.push(th); tr.push(tv);
  tm.push("A1:" + XlsxIO.numToCol(th.length) + "1");
  sheets.push({ name: "Tumanlar kesimi", cols: [5, 24, 22, 12].concat(TUMANLAR.map(function () { return [11, 9]; }).reduce(function (a, b) { return a.concat(b); }, [])).concat([12]), rows: tr, merges: tm, heights: { 0: 30, 2: 48 } });

  // 4. Boshqa viloyat
  var vr = [];
  vr.push([{ v: "Boshqa viloyatdan kelib tahsil olayotgan talabalar toʻgʻrisida MAʼLUMOT", s: "title" }]); vr.push([]);
  var vh = [H("№"), H("Fakultet nomi"), H("Yoʻnalish nomi"), H("Guruhi")], vv = [N(1), C(fak), C(yon), C(grp)];
  VILOYATLAR.filter(function (v) { return v[0] !== "Toshkent shahri"; }).forEach(function (v) {
    var x = r.viloyat[v[0]] || { n: 0, qiz: 0 };
    if (v[0] === "Toshkent viloyati" && r.viloyat["Toshkent shahri"]) { x = { n: x.n + r.viloyat["Toshkent shahri"].n, qiz: x.qiz + r.viloyat["Toshkent shahri"].qiz }; }
    vh.push(H(v[0]), H("Shundan, qiz bola")); vv.push(N(x.n), N(x.qiz));
  });
  vr.push(vh); vr.push(vv);
  sheets.push({ name: "Boshqa viloyat", cols: [5, 24, 22, 12].concat(vh.slice(4).map(function (_, i) { return i % 2 ? 9 : 12; })), rows: vr, merges: ["A1:" + XlsxIO.numToCol(vh.length) + "1"], heights: { 0: 30, 2: 48 } });

  // 5. Davomat (oy)
  var ma = monthAtt(ym), dr = [], mark = { k: { v: "+", s: "good" }, s: { v: "S", s: "warn" }, ss: { v: "NB", s: "bad" } };
  dr.push([{ v: (grpFull ? grpFull + " — " : "") + "davomat, " + monName, s: "title" }]); dr.push([]);
  var dh = [H("№"), H("F.I.Sh")].concat(ma.days.map(function (d) { return H(d.slice(8)); })).concat([H("Keldi"), H("Sababli"), H("Sababsiz"), H("Qatnashuv %")]);
  dr.push(dh);
  list.forEach(function (s, i) {
    var row = [N(i + 1), C(s.fish)];
    ma.days.forEach(function (d) { var v = (db.att[d] || {})[s.id]; row.push(v ? mark[v] : N("")); });
    var p = ma.per[s.id], t = p.k + p.s + p.ss;
    row.push(N(p.k), N(p.s), N(p.ss), N(t ? Math.round(p.k * 100 / t) : ""));
    dr.push(row);
  });
  dr.push([]);
  dr.push([{ v: "", s: "normal" }, { v: "+ — keldi;  S — sababli;  NB — sababsiz", s: "normal" }]);
  sheets.push({ name: "Davomat " + OYLAR[ymd.getMonth()], cols: [5, 32].concat(ma.days.map(function () { return 5; })).concat([8, 9, 10, 12]), rows: dr, merges: ["A1:" + XlsxIO.numToCol(dh.length) + "1"], freeze: "C4", heights: { 0: 30 } });

  // 6. Uyiga tashriflar
  var wr = [];
  wr.push([{ v: "Talabalar uyiga tashriflar", s: "title" }]); wr.push([]);
  wr.push([H("№"), H("F.I.Sh"), H("Yashash turi"), H("Hozirgi manzili"), H("Tashrif sanasi"), H("Izoh"), H("Rasmlar"), H("Joylashuv (xarita)")]);
  var k = 0;
  list.forEach(function (s) {
    var vs = (s.visits || []).slice().sort(function (a, b) { return a.date > b.date ? 1 : -1; });
    if (!vs.length) { wr.push([N(++k), C(s.fish), C(s.section === "ijara" ? "Ijarada" : "Oʻz uyida"), C(s.hozirgi || s.manzil || ""), { v: "Borilmagan", s: "bad" }, C(""), N(""), C(s.joy ? locLinks(s.joy).google : "")]); return; }
    vs.forEach(function (v) { wr.push([N(++k), C(s.fish), C(s.section === "ijara" ? "Ijarada" : "Oʻz uyida"), C(s.hozirgi || s.manzil || ""), { v: fmtDate(v.date), s: "good" }, C(v.note || ""), N((v.photos || []).length || ""), C(s.joy ? locLinks(s.joy).google : "")]); });
  });
  sheets.push({ name: "Uyiga tashriflar", cols: [5, 32, 12, 36, 13, 44, 9, 40], rows: wr, merges: ["A1:H1"], freeze: "A4", heights: { 0: 30 } });
  return sheets;
}
async function doExport() {
  busy(true, "Hisobot tayyorlanmoqda…");
  try {
    var b64 = await XlsxIO.writeWorkbook(buildReport(repMonth));
    var name = "Kurator_hisobot_" + (db.meta.group || "guruh").replace(/[^\w\-]+/g, "_") + "_" + repMonth + ".xlsx";
    busy(false);
    saveFile(name, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", b64);
  } catch (e) { busy(false); console.error(e); toast("Hisobotni yaratib boʻlmadi: " + e.message); }
}
function utf8ToB64(str) {
  var bytes = new TextEncoder().encode(str), bin = "", chunk = 0x8000;
  for (var i = 0; i < bytes.length; i += chunk) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  return btoa(bin);
}
async function doBackup() {
  var photos = {};
  busy(true, "Zaxira tayyorlanmoqda…");
  for (var i = 0; i < db.students.length; i++) for (var j = 0; j < (db.students[i].visits || []).length; j++) {
    var ps = db.students[i].visits[j].photos || [];
    for (var k = 0; k < ps.length; k++) { var u = await phGet(ps[k]); if (u) photos[ps[k]] = u; }
  }
  busy(false);
  var data = JSON.stringify({ app: "kurator", v: 2, savedAt: new Date().toISOString(), db: { students: db.students, att: db.att, meta: db.meta }, photos: photos });
  saveFile("Kurator_zaxira_" + todayIso() + ".json", "application/json", utf8ToB64(data));
}
function doRestore(file) {
  var rd = new FileReader();
  rd.onload = function () {
    try {
      var d = JSON.parse(rd.result);
      if (!d || d.app !== "kurator" || !d.db || !Array.isArray(d.db.students)) throw new Error("bad");
      confirmBox("Zaxiradan tiklash", d.db.students.length + " nafar talaba va " + Object.keys(d.db.att || {}).length + " kunlik davomat tiklanadi. Hozirgi maʼlumotlar almashtiriladi.", "Tiklash", function () {
        db.students = d.db.students; db.att = d.db.att || {}; db.meta = Object.assign({ group: "", kurator: "", fakultet: "", title: "" }, d.db.meta || {});
        Object.keys(d.photos || {}).forEach(function (k) { phPut(k, d.photos[k]); });
        if (save()) { toast("Maʼlumotlar tiklandi"); setView("students"); }
      });
    } catch (e) { toast("Bu fayl Kurator zaxira nusxasi emas."); }
  };
  rd.readAsText(file);
}
var DL = null;
try { if (window.claude && window.claude.use) window.claude.use("downloads").then(function (n) { DL = n; }, function () {}); } catch (e) { }
function b64ToBytes(b64) { var bin = atob(b64), arr = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i); return arr; }
function saveFile(name, mime, b64) {
  if (window.KuratorAndroid && window.KuratorAndroid.saveFile) { window.KuratorAndroid.saveFile(name, mime, b64); return; }
  if (DL) {
    DL.save({ filename: name, data: b64ToBytes(b64) }).then(function () { toast("Saqlandi: " + name); }, function (e) {
      toast(e && e.code === "declined" ? "Saqlash bekor qilindi" : "Bu oynada faylni saqlab boʻlmadi");
    });
    return;
  }
  try {
    var bin = atob(b64), arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    var url = URL.createObjectURL(new Blob([arr], { type: mime })), a = document.createElement("a");
    a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    toast("Fayl yuklab olindi: " + name);
  } catch (e) { toast("Faylni saqlab boʻlmadi."); }
}
window.onAndroidSaved = function (ok, msg) { toast(ok ? "Saqlandi: " + msg : (msg || "Saqlanmadi")); };

/* =================== PIN qulf =================== */
function showLock(mode) { // mode: "unlock" | "set" | "confirm"
  var el = $("lock"), entered = "", first = "";
  function draw(title, err) {
    el.innerHTML = svg("i-lock") + "<h2>" + title + '</h2><div class="dots">' + [0, 1, 2, 3].map(function (i) { return '<i class="' + (i < entered.length ? "f" : "") + '"></i>'; }).join("") +
      '</div><div class="err">' + (err || "") + '</div><div class="pad">' + [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (n) { return '<button data-k="' + n + '">' + n + "</button>"; }).join("") +
      (mode === "unlock" ? '<span></span>' : '<button data-k="x" style="font-size:15px">Bekor</button>') + '<button data-k="0">0</button><button data-k="b" aria-label="Oʻchirish" style="font-size:20px">⌫</button></div>';
    el.querySelector("svg").style.cssText = "width:40px;height:40px";
  }
  var titles = { unlock: "PIN-kodni kiriting", set: "Yangi PIN-kod", confirm: "PIN-kodni takrorlang" };
  el.classList.remove("hidden");
  draw(titles[mode]);
  el.onclick = function (e) {
    var b = e.target.closest("button"); if (!b) return;
    var k = b.dataset.k;
    if (k === "x") { el.classList.add("hidden"); return; }
    if (k === "b") { entered = entered.slice(0, -1); draw(titles[mode]); return; }
    if (entered.length >= 4) return;
    entered += k; draw(titles[mode]);
    if (entered.length < 4) return;
    setTimeout(function () {
      if (mode === "unlock") {
        if (hash("kurator:" + entered) === db.settings.pin) { el.classList.add("hidden"); el.onclick = null; }
        else { entered = ""; el.classList.add("shake"); draw(titles.unlock, "Notoʻgʻri PIN-kod"); setTimeout(function () { el.classList.remove("shake"); }, 400); }
      } else if (mode === "set") { first = entered; entered = ""; mode = "confirm"; draw(titles.confirm); }
      else {
        if (entered === first) { db.settings.pin = hash("kurator:" + entered); save(); el.classList.add("hidden"); toast("PIN-kod oʻrnatildi"); openSettings(); }
        else { entered = ""; first = ""; mode = "set"; draw(titles.set, "Mos kelmadi, qaytadan kiriting"); }
      }
    }, 120);
  };
}

/* =================== Hodisalar =================== */
document.addEventListener("click", function (e) {
  var t = e.target.closest("[data-act],[data-open],[data-edit],[data-visit],[data-del],[data-delvisit],[data-f],[data-vf],[data-day],[data-mon],[data-theme],[data-obj],[data-osel],[data-of],[data-word],[data-print],[data-goobj],[data-loc],[data-locdel],[data-vedit],[data-phopen],[data-vper],[data-vmon]");
  if (!t || t.closest("#lock")) return;
  if (t.dataset.loc) return openLocEdit(t.dataset.loc);
  if (t.dataset.vedit) { var pv = t.dataset.vedit.split("|"); return openVisitForm(pv[0], pv[1]); }
  if (t.dataset.phopen) return openPhoto(t.dataset.phopen, t.dataset.cap || "");
  if (t.dataset.vper) { visPeriod = t.dataset.vper; return renderVisits(); }
  if (t.dataset.vmon) { var vm = parseIso(visPeriod + "-01"); vm.setMonth(vm.getMonth() + (+t.dataset.vmon)); visPeriod = isoDate(vm).slice(0, 7); return renderVisits(); }
  if (t.dataset.locdel) { var sl = byId(t.dataset.locdel); delete sl.joy; save(); toast("Joylashuv oʻchirildi"); render(); return openStudent(sl.id); }
  if (t.dataset.obj) { closeSheet(); objSel = t.dataset.obj; return setView("obj"); }
  if (t.dataset.osel) { objSel = t.dataset.osel; renderObj(); if (window.innerWidth < 1180) { var m = document.querySelector(".ob-main"); if (m) m.scrollIntoView({ behavior: "smooth", block: "start" }); } return; }
  if (t.dataset.of) { objFilter = t.dataset.of; return renderObj(); }
  if (t.dataset.goobj) { objFilter = "flag"; return setView("obj"); }
  if (t.dataset.word) return downloadWord(t.dataset.word);
  if (t.dataset.print) return doPrint();
  if (t.dataset.open) return openStudent(t.dataset.open);
  if (t.dataset.edit) return openEdit(t.dataset.edit);
  if (t.dataset.visit) return openVisit(t.dataset.visit);
  if (t.dataset.f) { stFilter = t.dataset.f; document.querySelectorAll("#stChips .chip").forEach(function (c) { c.classList.toggle("on", c === t); }); return renderStudentList(); }
  if (t.dataset.vf) { visFilter = t.dataset.vf; return renderVisits(); }
  if (t.dataset.day) { var d = parseIso(attDate); d.setDate(d.getDate() + (+t.dataset.day)); attDate = isoDate(d); return renderAtt(); }
  if (t.dataset.mon) { var m = parseIso(repMonth + "-01"); m.setMonth(m.getMonth() + (+t.dataset.mon)); repMonth = isoDate(m).slice(0, 7); return renderReport(); }
  if (t.dataset.theme) { db.settings.theme = t.dataset.theme; save(); applyTheme(); return openSettings(); }
  if (t.dataset.del) {
    var sd = byId(t.dataset.del);
    return confirmBox("Talabani oʻchirish", esc(sd.fish) + " va uning davomati hamda tashriflari oʻchiriladi.", "Oʻchirish", function () {
      db.students = db.students.filter(function (x) { return x.id !== sd.id; });
      Object.keys(db.att).forEach(function (dd) { delete db.att[dd][sd.id]; });
      save(); toast("Oʻchirildi"); render();
    }, true);
  }
  if (t.dataset.delvisit) {
    var p = t.dataset.delvisit.split("|"), sv = byId(p[0]);
    var dv = (sv.visits || []).filter(function (v) { return v.id === p[1]; })[0];
    return confirmBox("Tashrifni oʻchirish", fmtDate(dv.date) + " dagi tashrif" + ((dv.photos || []).length ? " va uning " + dv.photos.length + " ta rasmi" : "") + " oʻchiriladi.", "Oʻchirish", function () {
      (dv.photos || []).forEach(function (x) { phDel(x); if (x.indexOf("a:") === 0 && SYNC.assets) SYNC.assets.delete(x.slice(2)).catch(function () { }); });
      sv.visits = (sv.visits || []).filter(function (v) { return v.id !== p[1]; }); save(); render(); openStudent(sv.id);
    }, true);
  }
  switch (t.dataset.act) {
    case "import": $("fileXlsx").value = ""; $("fileXlsx").click(); break;
    case "restore": $("fileJson").value = ""; $("fileJson").click(); break;
    case "tgimport": $("fileTg").value = ""; $("fileTg").click(); break;
    case "tghelp": openTgHelp(); break;
    case "add": openEdit(null); break;
    case "export": doExport(); break;
    case "backup": doBackup(); break;
    case "pickphoto": $("filePhoto").value = ""; $("filePhoto").click(); break;
    case "rmphoto": editPhoto = null; $("editAva").innerHTML = avatarHtml({ photo: null, fish: "" }); break;
    case "allk": var day = db.att[attDate] = db.att[attDate] || {}; db.students.forEach(function (s) { if (!day[s.id]) day[s.id] = "k"; }); save(); renderAtt(); break;
    case "clearday": delete db.att[attDate]; save(); renderAtt(); break;
    case "pinon": closeSheet(); showLock("set"); break;
    case "pinoff": db.settings.pin = ""; save(); toast("PIN-kod oʻchirildi"); openSettings(); break;
    case "wipe": confirmBox("Hammasini oʻchirish", "Barcha talabalar, rasmlar, davomat va tashriflar butunlay oʻchiriladi. Avval zaxira nusxa saqlashni tavsiya qilamiz.", "Ha, oʻchirish", function () {
      db.students = []; db.att = {}; db.meta = { group: "", kurator: "", fakultet: "", title: "", importedAt: "" }; save(); toast("Maʼlumotlar oʻchirildi"); setView("students");
    }, true); break;
  }
});
document.addEventListener("click", function (e) {
  var b = e.target.closest(".seg button"); if (!b) return;
  setAtt(b.parentNode.dataset.att, b.dataset.v);
});
document.querySelectorAll(".navlist").forEach(function (nv) { nv.addEventListener("click", function (e) { var b = e.target.closest("button[data-v]"); if (b) { closeSheet(); setView(b.dataset.v); } }); });
$("btnSettings").addEventListener("click", openSettings);
$("btnSettings2").addEventListener("click", openSettings);
$("sheetClose").addEventListener("click", function () { var back = sheetStack[0]; if (back) back(); else closeSheet(); });
$("sheet").addEventListener("click", function (e) { if (e.target.id === "sheet") closeSheet(); });
$("fileXlsx").addEventListener("change", function (e) { var f = e.target.files[0]; if (f) doImport(f); });
$("fileTg").addEventListener("change", function (e) { var f = e.target.files[0]; if (f) doTgImport(f); });
$("fileJson").addEventListener("change", function (e) { var f = e.target.files[0]; if (f) doRestore(f); });
$("filePhoto").addEventListener("change", async function (e) {
  var f = e.target.files[0]; if (!f) return;
  var d = await shrinkImage(f, 360); if (!d) { toast("Rasmni oʻqib boʻlmadi"); return; }
  editPhoto = d; $("editAva").innerHTML = avatarHtml({ photo: d, fish: "" });
});

// Android "Orqaga" tugmasi
window.handleBack = function () {
  if (!$("lock").classList.contains("hidden")) return false;
  if (!$("busy").classList.contains("hidden")) return true;
  if (sheetOpen()) { var back = sheetStack[0]; if (back) back(); else closeSheet(); return true; }
  if (curView !== "students") { setView("students"); return true; }
  return false;
};
window.__kparse = parseLoc; window.__kurator = { db: db, parseRoster: parseRoster, buildReport: buildReport, stats: stats, detectHudud: detectHudud, phonesIn: phonesIn, XlsxIO: XlsxIO };

/* =================== Ishga tushirish =================== */
load(); applyTheme(); render();

/* =================== Bulut (sayt bazasi) bilan sinxronlash ===================
   Davomat, tashriflar, rasmlar, joylashuv va tahrirlar sayt bazasiga yoziladi.
   Hammasi bazaga yozilishidan oldin parol kaliti bilan shifrlanadi (AES-GCM). */
var SYNC = { db: null, assets: null, key: null, hash: {}, attHash: {}, known: {}, timer: null, busy: false, again: false, status: "local", started: false, gotStudents: false, gotAtt: false };
var KEYSLOT = "kurator-k1";
function b64(u8) { var s = "", c = 0x8000; for (var i = 0; i < u8.length; i += c) s += String.fromCharCode.apply(null, u8.subarray(i, i + c)); return btoa(s); }
async function storeKey(key) {
  SYNC.key = key;
  try { var raw = new Uint8Array(await crypto.subtle.exportKey("raw", key)); localStorage.setItem(KEYSLOT, b64(raw)); } catch (e) { }
  startSync();
}
async function loadKey() {
  try {
    var r = localStorage.getItem(KEYSLOT); if (!r) return null;
    return await crypto.subtle.importKey("raw", b64bytes(r), { name: "AES-GCM" }, true, ["encrypt", "decrypt"]);
  } catch (e) { return null; }
}
async function encObj(obj) {
  var iv = crypto.getRandomValues(new Uint8Array(12));
  var ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: iv }, SYNC.key, new TextEncoder().encode(JSON.stringify(obj))));
  return { v: 1, iv: b64(iv), ct: b64(ct) };
}
async function decObj(o) {
  var pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv: b64bytes(o.iv) }, SYNC.key, b64bytes(o.ct));
  return JSON.parse(new TextDecoder().decode(pt));
}
var SHARED_KEYS = FIELDS.map(function (f) { return f.k; }).concat(["section", "no", "order"]);
function sharedOf(s) {
  var f = {}; SHARED_KEYS.forEach(function (k) { if (s[k] != null) f[k] = s[k]; });
  return { f: f, visits: s.visits || [], joy: s.joy || null, ht: s.hududTuman || "", hv: s.hududViloyat || "", custom: !!s.custom, ob: s.custom ? (s.ob || null) : null };
}
function setSyncStatus(st, note) {
  SYNC.status = st;
  var txt = { local: "Faqat shu kompyuterda", wait: "Bazaga ulanmoqda…", ok: "Bazada saqlangan", saving: "Saqlanmoqda…", ro: "Bazadan oʻqish (faqat koʻrish)", err: "Baza bilan aloqa yoʻq" }[st] || st;
  document.querySelectorAll("[data-sync]").forEach(function (el) { el.textContent = note || txt; el.parentNode.dataset.state = st; });
}

/* ---- Rasmlar: bazada shifrlangan holda ---- */
async function uploadPhoto(dataUrl) {
  if (!SYNC.assets || !SYNC.key) return null;
  try {
    var blob = new Blob([JSON.stringify(await encObj({ d: dataUrl }))], { type: "application/json" });
    var r = await SYNC.assets.upload(blob);
    return "a:" + r.id;
  } catch (e) { console.warn("upload", e); return null; }
}
async function fetchPhoto(pid) {
  if (!SYNC.key) return null;
  try {
    var raw = SYNC.getBlob ? await SYNC.getBlob(pid.slice(2)) : await (await fetch("/_blob/" + pid.slice(2))).json();
    if (!raw) return null;
    var o = await decObj(raw); return o.d || null;
  } catch (e) { return null; }
}

/* ---- Bazadan kelgan o'zgarishlarni qo'llash ---- */
var renderT = null;
function softRender() { clearTimeout(renderT); renderT = setTimeout(function () { render(); }, 250); }
async function applyStudentDoc(id, raw) {
  if (!raw || !raw.ct) {
    if (raw && raw.deleted) { db.students = db.students.filter(function (x) { return x.id !== id; }); delete SYNC.hash[id]; SYNC.known[id] = "del"; return true; }
    return false;
  }
  var d; try { d = await decObj(raw); } catch (e) { return false; }
  var s = byId(id);
  if (!s) { if (!d.custom) return false; s = { id: id, custom: true, visits: [] }; db.students.push(s); }
  Object.assign(s, d.f || {});
  s.visits = d.visits || []; if (d.joy) s.joy = d.joy; else delete s.joy;
  s.hududTuman = d.ht || ""; s.hududViloyat = d.hv || ""; if (d.custom) { s.custom = true; if (d.ob) s.ob = d.ob; }
  SYNC.hash[id] = JSON.stringify(sharedOf(s)); SYNC.known[id] = 1;
  return true;
}
async function applyAttDoc(ym, raw) {
  var d; try { d = await decObj(raw); } catch (e) { return false; }
  Object.keys(db.att).forEach(function (k) { if (k.indexOf(ym) === 0) delete db.att[k]; });
  Object.keys(d.days || {}).forEach(function (k) { db.att[k] = d.days[k]; });
  SYNC.attHash[ym] = JSON.stringify(d.days || {});
  return true;
}
function monthsOf() { var m = {}; Object.keys(db.att).forEach(function (d) { (m[d.slice(0, 7)] = m[d.slice(0, 7)] || {})[d] = db.att[d]; }); return m; }

/* ---- O'zgarishlarni bazaga yozish ---- */
function scheduleSync() { if (!SYNC.db || !SYNC.key || !SYNC.gotStudents || !SYNC.gotAtt) return; clearTimeout(SYNC.timer); SYNC.timer = setTimeout(pushAll, 700); }
async function pushAll() {
  if (!db.students.length) return;
  if (SYNC.busy) { SYNC.again = true; return; }
  SYNC.busy = true; var wrote = 0, failed = false;
  try {
    for (var i = 0; i < db.students.length; i++) {
      var s = db.students[i];
      // Faqat shu brauzerda turgan rasmlarni bazaga ko'chirish
      for (var j = 0; j < (s.visits || []).length; j++) {
        var v = s.visits[j], ps = v.photos || [];
        for (var k = 0; k < ps.length; k++) if (ps[k].indexOf("a:") !== 0) {
          var u = await phGet(ps[k]); if (!u) continue;
          var nid = await uploadPhoto(u); if (nid) { PHMEM[nid] = u; await phPut(nid, u); ps[k] = nid; }
        }
      }
      var h = JSON.stringify(sharedOf(s));
      if (h === SYNC.hash[s.id]) continue;
      setSyncStatus("saving");
      await SYNC.db.doc("students/" + s.id).set(await encObj(sharedOf(s)));
      SYNC.hash[s.id] = h; SYNC.known[s.id] = 1; wrote++;
    }
    var have = {}; db.students.forEach(function (x) { have[x.id] = 1; });
    for (var id in SYNC.known) if (SYNC.known[id] === 1 && !have[id]) { await SYNC.db.doc("students/" + id).set({ deleted: true }); SYNC.known[id] = "del"; wrote++; }
    var mons = monthsOf();
    var allM = Object.keys(mons).concat(Object.keys(SYNC.attHash)).filter(function (x, i, a) { return a.indexOf(x) === i; });
    for (var m = 0; m < allM.length; m++) {
      var ym = allM[m], days = mons[ym] || {}, hh = JSON.stringify(days);
      if (hh === SYNC.attHash[ym]) continue;
      setSyncStatus("saving");
      await SYNC.db.doc("att/" + ym).set(await encObj({ days: days }));
      SYNC.attHash[ym] = hh; wrote++;
    }
    try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { }
  } catch (e) {
    failed = true; console.warn("sync", e);
    if (e && e.code === "invalid_argument") setSyncStatus("ro");
    else if (e && e.code === "quota_exceeded") { setSyncStatus("err", "Baza toʻldi"); toast("Bazada joy qolmadi: eski rasmlarni oʻchiring."); }
    else setSyncStatus("err");
  }
  SYNC.busy = false;
  if (!failed) setSyncStatus("ok");
  if (SYNC.again) { SYNC.again = false; scheduleSync(); }
}

/* ---- Ishga tushirish ---- */
async function startSync() {
  if (SYNC.started || !SYNC.db || !SYNC.key || !db.students.length) return;
  SYNC.started = true; setSyncStatus("wait");
  var to = setTimeout(function () { if (!SYNC.gotStudents) setSyncStatus("err", "Bazaga ulanib boʻlmadi — oʻzgarishlar shu kompyuterda saqlanadi"); }, 10000);
  SYNC.db.collection("students").onSnapshot(async function (snap) {
    var changed = false;
    for (var i = 0; i < snap.docs.length; i++) { var dsn = snap.docs[i]; if (await applyStudentDoc(dsn.id, dsn.data())) changed = true; }
    if (!snap.metadata.fromCache && !SYNC.gotStudents) { SYNC.gotStudents = true; clearTimeout(to); setSyncStatus("ok"); scheduleSync(); }
    if (changed) { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { } softRender(); }
  }, function (e) { setSyncStatus(e && e.code === "revoked" ? "local" : "err"); });
  SYNC.db.collection("att").onSnapshot(async function (snap) {
    var changed = false;
    for (var i = 0; i < snap.docs.length; i++) { var dsn = snap.docs[i]; if (await applyAttDoc(dsn.id, dsn.data())) changed = true; }
    if (!snap.metadata.fromCache && !SYNC.gotAtt) { SYNC.gotAtt = true; scheduleSync(); }
    if (changed) { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { } softRender(); }
  }, function () { });
}
(function initSync() {
  loadKey().then(function (k) { if (k) SYNC.key = k; startSync(); if (SYNC.db && !k && db.students.length) render(); });
  try {
    if (window.claude && window.claude.use) {
      window.claude.use("db").then(function (d) {
        SYNC.db = d; if (!d) { setSyncStatus("local"); return; }
        if (!SYNC.key && db.students.length) { setSyncStatus("local", "Bazaga ulanish uchun parol kerak"); render(); }
        startSync();
      }, function () { });
      window.claude.use("assets").then(function (a) { SYNC.assets = a; if (a) scheduleSync(); }, function () { });
    }
  } catch (e) { }
})();

if (db.settings.pin) showLock("unlock");

/* =================== Firebase: kirish, ruxsat va umumiy baza =================== */
var FB_CONFIG = { apiKey: "AIzaSyB4TG1L62RiCbjrDg_fbxVNBRH3U-RDXMg", authDomain: "davolash-26-39.firebaseapp.com", projectId: "davolash-26-39",
  storageBucket: "davolash-26-39.firebasestorage.app", messagingSenderId: "1078752734057", appId: "1:1078752734057:web:203e089588cf02fe202bf8" };
var ADMIN_EMAIL = "jurayev265@gmail.com";
var FB = { app: null, auth: null, fs: null, user: null, allowed: false, isAdmin: false };

function fbAdapter(fs) {
  return {
    collection: function (n) {
      return { onSnapshot: function (cb, err) {
        return fs.collection("k_" + n).onSnapshot(function (s) {
          cb({ docs: s.docs.map(function (d) { return { id: d.id, data: function () { return d.data(); } }; }), metadata: { fromCache: s.metadata.fromCache } });
        }, function (e) { console.warn(e); if (err) err({ code: e && e.code === "permission-denied" ? "revoked" : "unavailable" }); });
      } };
    },
    doc: function (p) {
      return { set: function (o) {
        return fs.doc("k_" + p).set(o).catch(function (e) {
          throw { code: e && e.code === "permission-denied" ? "invalid_argument" : e && e.code === "resource-exhausted" ? "quota_exceeded" : "unavailable", message: String(e && e.message) };
        });
      } };
    }
  };
}
function fbAssets(fs) {
  return {
    upload: async function (blob) {
      var txt = await blob.text(); var id = uid() + uid();
      if (txt.length > 950000) throw new Error("Rasm juda katta");
      await fs.collection("k_photos").doc(id).set({ d: txt });
      return { id: id };
    },
    delete: function (id) { return fs.collection("k_photos").doc(id).delete(); }
  };
}
async function fbGetBlob(id) {
  var snap = await FB.fs.collection("k_photos").doc(id).get();
  return snap.exists ? JSON.parse(snap.data().d) : null;
}

/* ---- Kalit: admin bir marta parol bilan ochadi, kalit bazaga (faqat ruxsatlilarga ko'rinadigan) yoziladi ---- */
async function fbFetchKey() {
  try {
    var s = await FB.fs.collection("kurator_config").doc("key").get();
    if (!s.exists) return null;
    return await crypto.subtle.importKey("raw", b64bytes(s.data().k), { name: "AES-GCM" }, true, ["encrypt", "decrypt"]);
  } catch (e) { return null; }
}
async function fbPublishKey(key) {
  if (!FB.isAdmin || !FB.fs) return;
  try {
    var s = await FB.fs.collection("kurator_config").doc("key").get();
    if (s.exists) return;
    var raw = new Uint8Array(await crypto.subtle.exportKey("raw", key));
    await FB.fs.collection("kurator_config").doc("key").set({ k: b64(raw), at: new Date().toISOString() });
  } catch (e) { console.warn("key publish", e); }
}
async function fbAccessList() {
  try { var s = await FB.fs.collection("kurator_config").doc("access").get(); return s.exists ? (s.data().emails || []) : []; } catch (e) { return null; }
}

/* ---- Kirish oynasi ---- */
var authMode = "in";
function showAuth(msg, err) {
  var el = $("authScreen"); el.classList.remove("hidden");
  var signedIn = !!FB.user;
  var h = '<div class="auth-card"><div class="auth-banner"><img src="tisu-logo.png" alt="TISU logotipi"></div><div class="auth-body">' +
    '<div class="auth-kur"><img src="kurator.jpg" alt="Usmonov Chorshanbi"><div><div class="lbl">Guruh kuratori</div><b>Usmonov Chorshanbi</b><small>Davolash ishi 26-39 · Tibbiyot fakulteti</small></div></div>';
  if (signedIn) {
    h += '<h2>Ruxsat kutilmoqda</h2><p class="muted">Siz <b>' + esc(FB.user.email) + "</b> bilan kirdingiz, lekin bu sahifaga hali ruxsat berilmagan. Guruh sardoriga shu emailni yuboring — u Sozlamalar → «Kirish ruxsati» boʻlimida qoʻshadi.</p>" +
      '<div class="actions" style="max-width:none"><button class="btn primary block" id="authRetry">Qayta tekshirish</button><button class="btn ghost block" id="authOut">Boshqa akkaunt bilan kirish</button></div>';
  } else {
    var up = authMode === "up";
    h += "<h2>" + (up ? "Roʻyxatdan oʻtish" : "Kirish") + '</h2><p class="muted">' + (up ? "Email va oʻzingiz oʻylab topgan parolni kiriting. Keyin guruh sardori sizga ruxsat beradi." : "«Davolash 26-39» ilovasidagi email va parolingiz bilan kiring.") + "</p>" +
      '<form id="authForm" class="form" autocomplete="on"><div><label for="authEmail">Email</label><input type="email" id="authEmail" autocomplete="username" required></div>' +
      '<div><label for="authPass">Parol</label><input type="password" id="authPass" autocomplete="' + (up ? "new-password" : "current-password") + '" required minlength="6"></div>' +
      '<button class="btn primary block" type="submit">' + (up ? "Roʻyxatdan oʻtish" : "Kirish") + "</button></form>" +
      '<div class="row" style="justify-content:space-between;margin-top:10px;flex-wrap:wrap"><button class="linkbtn" id="authSwitch">' + (up ? "Akkauntim bor — kirish" : "Akkauntim yoʻq — roʻyxatdan oʻtish") + "</button>" +
      (up ? "" : '<button class="linkbtn" id="authReset">Parolni unutdim</button>') + "</div>";
  }
  h += '<div class="auth-msg' + (err ? " err" : "") + '" id="authMsg">' + esc(msg || "") + "</div></div></div>";
  el.innerHTML = h;
  var f = $("authForm");
  if (f) f.addEventListener("submit", async function (e) {
    e.preventDefault(); var em = $("authEmail").value.trim().toLowerCase(), pw = $("authPass").value;
    $("authMsg").textContent = "Kutib turing…"; $("authMsg").className = "auth-msg";
    try {
      if (authMode === "up") await FB.auth.createUserWithEmailAndPassword(em, pw);
      else await FB.auth.signInWithEmailAndPassword(em, pw);
    } catch (er) {
      var m = { "auth/invalid-credential": "Email yoki parol notoʻgʻri.", "auth/wrong-password": "Parol notoʻgʻri.", "auth/user-not-found": "Bunday akkaunt yoʻq — roʻyxatdan oʻting.",
        "auth/email-already-in-use": "Bu email bilan akkaunt bor — «Kirish»ni tanlang.", "auth/weak-password": "Parol kamida 6 belgidan iborat boʻlsin.", "auth/invalid-email": "Email notoʻgʻri yozilgan.",
        "auth/too-many-requests": "Juda koʻp urinish. Biroz kutib qayta urining.", "auth/network-request-failed": "Internet aloqasi yoʻq." }[er && er.code] || ("Xato: " + (er && er.message));
      $("authMsg").textContent = m; $("authMsg").className = "auth-msg err";
    }
  });
  var sw = $("authSwitch"); if (sw) sw.onclick = function () { authMode = authMode === "up" ? "in" : "up"; showAuth(); };
  var rs = $("authReset"); if (rs) rs.onclick = async function () {
    var em = $("authEmail").value.trim(); if (!em) { $("authMsg").textContent = "Avval emailni yozing."; return; }
    try { await FB.auth.sendPasswordResetEmail(em); $("authMsg").textContent = "Parolni tiklash havolasi emailingizga yuborildi."; } catch (e) { $("authMsg").textContent = "Yuborib boʻlmadi: emailni tekshiring."; }
  };
  var rt = $("authRetry"); if (rt) rt.onclick = function () { checkAccess(); };
  var ao = $("authOut"); if (ao) ao.onclick = function () { fbSignOut(); };
}
function hideAuth() { $("authScreen").classList.add("hidden"); }
async function fbSignOut() {
  try { await FB.auth.signOut(); } catch (e) { }
  try { localStorage.removeItem(KEY); localStorage.removeItem(KEYSLOT); } catch (e) { }
  location.reload();
}

/* ---- Ruxsatni tekshirish va ishga tushirish ---- */
async function checkAccess() {
  var u = FB.user; if (!u) return showAuth();
  FB.isAdmin = (u.email || "").toLowerCase() === ADMIN_EMAIL;
  var list = await fbAccessList();
  FB.allowed = FB.isAdmin || (Array.isArray(list) && list.map(function (x) { return String(x).toLowerCase(); }).indexOf((u.email || "").toLowerCase()) >= 0);
  if (!FB.allowed) return showAuth("", false);
  hideAuth();
  SYNC.db = fbAdapter(FB.fs); SYNC.assets = fbAssets(FB.fs); SYNC.getBlob = fbGetBlob;
  document.querySelectorAll("[data-who]").forEach(function (e) { e.textContent = u.email; });
  if (!SYNC.key) { var k = await fbFetchKey(); if (k) { if (!db.students.length) await unlockKey(k, true); else await storeKey(k); } }
  else if (FB.isAdmin) fbPublishKey(SYNC.key);
  if (!db.students.length) { setSyncStatus("local", "Maʼlumotlarni ochish uchun parol kerak"); render(); return; }
  startSync(); render();
}
(function initFirebase() {
  if (!window.firebase) { showAuth("Firebase yuklanmadi. Internetni tekshirib, sahifani yangilang.", true); return; }
  try {
    FB.app = firebase.initializeApp(FB_CONFIG); FB.auth = firebase.auth(); FB.fs = firebase.firestore();
    FB.auth.onAuthStateChanged(function (u) { FB.user = u; if (u) checkAccess(); else showAuth(); });
  } catch (e) { showAuth("Firebase xatosi: " + e.message, true); }
})();

/* ---- Sozlamalar: kirish ruxsati (faqat admin) ---- */
async function openAccess() {
  var list = (await fbAccessList()) || [];
  var h = '<p style="margin:0 0 12px;line-height:1.5">Bu roʻyxatdagi emaillar sahifaga kira oladi. Kurator avval sahifada <b>«Roʻyxatdan oʻtish»</b> orqali oʻz emaili bilan akkaunt ochadi, siz esa uning emailini shu yerga qoʻshasiz.</p>' +
    '<div class="fields">' + (list.length ? list.map(function (e) { return '<div class="f row"><div class="grow">' + esc(e) + '</div><button class="iconbtn" data-accdel="' + esc(e) + '" aria-label="Olib tashlash">' + svg("i-trash") + "</button></div>"; }).join("") : '<div class="f"><div class="v empty">Hali hech kim qoʻshilmagan</div></div>') + "</div>" +
    '<form class="row" id="accForm"><input type="email" id="accEmail" placeholder="kurator@gmail.com" aria-label="Email" required><button class="btn primary" type="submit">Qoʻshish</button></form>';
  openSheet("Kirish ruxsati", h);
  $("accForm").addEventListener("submit", async function (e) {
    e.preventDefault(); var em = $("accEmail").value.trim().toLowerCase(); if (!em) return;
    if (list.indexOf(em) < 0) list.push(em);
    try { await FB.fs.collection("kurator_config").doc("access").set({ emails: list }); toast("Ruxsat berildi: " + em); openAccess(); } catch (er) { toast("Saqlab boʻlmadi: Firebase qoidalarini tekshiring."); }
  });
  document.querySelectorAll("[data-accdel]").forEach(function (b) {
    b.onclick = async function () {
      list = list.filter(function (x) { return x !== b.dataset.accdel; });
      try { await FB.fs.collection("kurator_config").doc("access").set({ emails: list }); toast("Olib tashlandi"); openAccess(); } catch (er) { toast("Saqlab boʻlmadi."); }
    };
  });
}

})();
