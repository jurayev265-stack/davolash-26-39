/* Savollar banki: har bir fan alohida faylda QB.add(...) bilan qo'shiladi.
   Atamalar: "lotincha|o'zbekcha" qatorlari.
   Savollar: "Savol|to'g'ri javob|xato1|xato2|xato3|izoh (ixtiyoriy)" qatorlari. */
window.QB = {
  order: ["anat", "kim", "bio", "tarix", "til", "kasb"],
  subj: {},
  add(key, name, termLabel, topics) {
    const rows = (txt, min) => (txt || "").split("\n").map(l => l.trim()).filter(l => l && !l.startsWith("#"))
      .map(l => l.split("|").map(x => x.trim())).filter(r => r.length >= min && r.slice(0, min).every(Boolean));
    this.subj[key] = {
      key, name, termLabel,
      topics: topics.map((t, i) => ({ n: i + 1, t: t.t, terms: rows(t.terms, 2), qs: rows(t.qs, 4) }))
    };
  }
};
