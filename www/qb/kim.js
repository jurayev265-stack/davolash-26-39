QB.add("kim", "Tibbiy kimyo", "Atama", [
{ t: "Kimyoning asosiy tushunchalari va qonunlari",
terms: `
atom|kimyoviy elementning eng kichik zarrachasi
molekula|moddaning kimyoviy xossalarini saqlovchi eng kichik zarracha
kimyoviy element|yadro zaryadi bir xil bo'lgan atomlar turi
oddiy modda|bitta element atomlaridan tuzilgan modda
murakkab modda|turli element atomlaridan tuzilgan modda
mol|6,02·10²³ ta zarracha tutgan modda miqdori
molyar massa|1 mol moddaning massasi (g/mol)
Avogadro soni|6,02·10²³ mol⁻¹
molyar hajm|normal sharoitda 1 mol gaz hajmi — 22,4 l
valentlik|atomning boshqa atomlar bilan hosil qiladigan bog'lar soni
oksidlanish darajasi|atomning shartli zaryadi
ekvivalent|1 mol vodorod atomi bilan birikadigan yoki uni almashtiradigan modda miqdori
allotropiya|bitta elementning bir nechta oddiy modda hosil qilishi
izotoplar|protonlar soni bir xil, neytronlar soni har xil atomlar
`,
qs: `
Avogadro soni nechaga teng?|6,02·10²³ mol⁻¹|3,01·10²³ mol⁻¹|22,4 mol⁻¹|1,6·10⁻¹⁹ mol⁻¹
Normal sharoitda 1 mol gazning hajmi?|22,4 l|11,2 l|1 l|44,8 l
Massaning saqlanish qonunini kashf etgan olimlar?|M. V. Lomonosov va A. Lavuaze|D. I. Mendeleyev|J. Dalton|A. Avogadro
"Bir xil sharoitda teng hajmdagi gazlarda molekulalar soni teng" — bu qaysi qonun?|Avogadro qonuni|Tarkibning doimiylik qonuni|Karrali nisbatlar qonuni|Massaning saqlanish qonuni
Suvning molyar massasi?|18 g/mol|16 g/mol|20 g/mol|36 g/mol
Natriy xloridning (NaCl) molyar massasi taxminan?|58,5 g/mol|40 g/mol|35,5 g/mol|74,5 g/mol
Glyukozaning (C₆H₁₂O₆) molyar massasi?|180 g/mol|342 g/mol|162 g/mol|90 g/mol
Kislorodning (O₂) va ozonning (O₃) mavjudligi qaysi hodisaga misol?|Allotropiya|Izotopiya|Izomeriya|Dissotsiatsiya
Protonlar soni bir xil, neytronlar soni har xil atomlar?|Izotoplar|Izobarlar|Izomerlar|Allotroplar
Tibbiyotda qo'llaniladigan radioaktiv yod izotopi?|¹³¹I|¹²⁷I|¹²C|¹⁶O
2 mol suvning massasi?|36 g|18 g|9 g|72 g
Murakkab moddaga misol?|Suv (H₂O)|Kislorod (O₂)|Azot (N₂)|Temir (Fe)
Moddaning kimyoviy xossalarini saqlovchi eng kichik zarracha?|Molekula|Atom|Elektron|Ion
`},

{ t: "Atom tuzilishi va davriy qonun. Elementlarning lotincha nomlari",
terms: `
Hydrogenium (H)|vodorod
Oxygenium (O)|kislorod
Carboneum (C)|uglerod
Nitrogenium (N)|azot
Natrium (Na)|natriy
Kalium (K)|kaliy
Calcium (Ca)|kalsiy
Magnesium (Mg)|magniy
Ferrum (Fe)|temir
Cuprum (Cu)|mis
Zincum (Zn)|rux
Sulfur (S)|oltingugurt
Phosphorus (P)|fosfor
Chlorum (Cl)|xlor
Iodum (I)|yod
Argentum (Ag)|kumush
Aurum (Au)|oltin
Hydrargyrum (Hg)|simob
Plumbum (Pb)|qo'rg'oshin
Cobaltum (Co)|kobalt
Manganum (Mn)|marganes
Fluorum (F)|ftor
Bromum (Br)|brom
Stannum (Sn)|qalay
Barium (Ba)|bariy
Arsenicum (As)|mishyak
Selenium (Se)|selen
proton|musbat zaryadli yadro zarrachasi
neytron|zaryadsiz yadro zarrachasi
elektron|manfiy zaryadli zarracha
`,
qs: `
Davriy qonunni kashf etgan olim?|D. I. Mendeleyev|M. V. Lomonosov|A. Lavuaze|E. Rezerford
Element atomining tartib raqami nimaga teng?|Yadrodagi protonlar soniga|Neytronlar soniga|Atom massasiga|Valentligiga
Davriy sistemada element xossalarini asosan nima belgilaydi?|Atom yadrosining zaryadi|Atom massasi|Neytronlar soni|Molekula hajmi
Atomning planetar modelini taklif etgan olim?|E. Rezerford|D. Mendeleyev|J. Tomson|A. Avogadro
Davrlarda chapdan o'ngga o'tganda metallik xossalar qanday o'zgaradi?|Kamayadi|Ortadi|O'zgarmaydi|Avval ortib, keyin kamayadi
Guruhlarda yuqoridan pastga metallik xossalar?|Ortadi|Kamayadi|O'zgarmaydi|Yo'qoladi
Eng elektromanfiy element?|Ftor|Kislorod|Xlor|Azot
Natriyning lotincha nomi va belgisi?|Natrium, Na|Nitrogenium, N|Sodium, So|Neonum, Ne
Temirning lotincha nomi?|Ferrum|Fluorum|Plumbum|Stannum
"Hydrargyrum" qaysi element?|Simob|Vodorod|Mishyak|Kumush
"Argentum" qaysi element?|Kumush|Oltin|Mishyak|Argon
"Cuprum" qaysi element?|Mis|Kobalt|Kalsiy|Xrom
Davriy sistemada nechta davr bor?|7|8|10|18
Asl (inert) gazlar qaysi guruhda?|VIII A guruhda|I A guruhda|VII A guruhda|IV A guruhda
Ishqoriy metallar qaysi guruhda joylashgan?|I A guruhda|II A guruhda|VII A guruhda|VIII A guruhda
`},

{ t: "Kimyoviy bog'lanish va molekula tuzilishi",
terms: `
kovalent qutbsiz bog'|bir xil nometall atomlari orasidagi umumiy elektron juft
kovalent qutbli bog'|turli nometall atomlari orasidagi bog'
ion bog'|metall va nometall ionlari orasidagi elektrostatik tortishish
metall bog'|metall kationlari va erkin elektronlar orasidagi bog'
vodorod bog'|vodorod atomi va elektromanfiy atom orasidagi kuchsiz bog'
donor-akseptor bog'|bir atomning elektron jufti va boshqasining bo'sh orbitali hisobiga hosil bo'lgan bog'
elektromanfiylik|atomning elektronlarni o'ziga tortish xususiyati
gibridlanish|turli orbitallarning aralashib, bir xil orbitallar hosil qilishi
sigma bog'|orbitallarning o'q bo'ylab qoplanishidan hosil bo'lgan bog'
pi bog'|orbitallarning yon tomondan qoplanishidan hosil bo'lgan bog'
dipol|zaryadlari qutblarga ajralgan molekula
`,
qs: `
Natriy xloriddagi (NaCl) bog' turi?|Ion bog'|Kovalent qutbsiz bog'|Metall bog'|Vodorod bog'
Vodorod molekulasidagi (H₂) bog'?|Kovalent qutbsiz|Kovalent qutbli|Ion|Metall
Suv molekulasidagi O–H bog'i?|Kovalent qutbli|Kovalent qutbsiz|Ion|Metall
Suvning yuqori qaynash haroratiga sabab?|Molekulalar orasidagi vodorod bog'lar|Ion bog'lar|Metall bog'lar|Molekulasining og'irligi
DNK ning ikki zanjirini birlashtirib turuvchi bog'lar?|Vodorod bog'lar|Ion bog'lar|Metall bog'lar|Peptid bog'lar
Ammoniy ionida (NH₄⁺) qanday bog' mexanizmi bor?|Donor-akseptor|Ion|Metall|Faqat vodorod
Suv molekulasining shakli?|Burchakli (taxminan 104,5°)|Chiziqli|Tetraedr|Yassi uchburchak
Metan molekulasida uglerodning gibridlanishi?|sp³|sp²|sp|gibridlanmagan
Qo'sh bog' nechta bog'dan iborat?|Bitta sigma va bitta pi|Ikki sigma|Ikki pi|Uch sigma
Oqsilning ikkilamchi tuzilishini (alfa-spiral) qaysi bog'lar ushlab turadi?|Vodorod bog'lar|Disulfid bog'lar|Ion bog'lar|Metall bog'lar
`},

{ t: "Eritmalar va ularning konsentratsiyasi",
terms: `
eritma|ikki yoki undan ortiq komponentli gomogen sistema
erituvchi|eritmada ko'p miqdorda bo'lgan komponent
erigan modda|eritmada kam miqdordagi komponent
massa ulushi (ω)|erigan modda massasining eritma massasiga nisbati
molyar konsentratsiya (C)|1 litr eritmadagi erigan modda mollari soni
molyal konsentratsiya|1 kg erituvchidagi erigan modda mollari soni
titr|1 ml eritmadagi erigan modda massasi (g/ml)
to'yingan eritma|ma'lum haroratda moddani boshqa erita olmaydigan eritma
to'yinmagan eritma|yana modda eritishi mumkin bo'lgan eritma
eruvchanlik|ma'lum haroratda erituvchida erishi mumkin bo'lgan modda miqdori
gidratatsiya|erigan modda zarrachalarining suv molekulalari bilan birikishi
titrlash|eritma konsentratsiyasini aniqlash uchun reagentni asta-sekin qo'shish
`,
qs: `
Fiziologik eritmada NaCl ning massa ulushi?|0,9 %|9 %|0,09 %|5 %
Izotonik glyukoza eritmasining konsentratsiyasi?|5 %|10 %|40 %|0,9 %
100 g eritmada 5 g modda bo'lsa, massa ulushi?|5 %|10 %|0,5 %|50 %
200 g 10 % li eritmada qancha erigan modda bor?|20 g|10 g|2 g|200 g
0,5 l eritmada 1 mol modda bo'lsa, molyar konsentratsiya?|2 mol/l|0,5 mol/l|1 mol/l|5 mol/l
Molyar konsentratsiya birligi?|mol/l|g/ml|mol/kg|%
Gazlarning suvda eruvchanligi harorat ortishi bilan?|Kamayadi|Ortadi|O'zgarmaydi|Avval ortadi
Gazlarning suvda eruvchanligi bosim ortishi bilan?|Ortadi|Kamayadi|O'zgarmaydi|Nolga tushadi
Dorilarni tayyorlashda ko'p ishlatiladigan universal erituvchi?|Suv|Benzol|Xloroform|Efir
Tibbiyotda ishlatiladigan vodorod peroksid eritmasi konsentratsiyasi?|3 %|30 %|0,3 %|10 %
Yod spirtli eritmasi tibbiyotda odatda qanday konsentratsiyada?|5 %|0,5 %|50 %|0,9 %
Spirt antiseptik sifatida qanday konsentratsiyada eng samarali?|70 % ga yaqin|96 %|10 %|40 %
`},

{ t: "Kolligativ xossalar va osmos",
terms: `
osmos|erituvchining yarim o'tkazgich parda orqali konsentratsiyasi yuqori eritmaga o'tishi
osmotik bosim|osmosni to'xtatish uchun kerak bo'lgan bosim
yarim o'tkazgich parda|faqat erituvchi molekulalarini o'tkazuvchi parda
izotonik eritma|osmotik bosimi qon plazmasinikiga teng eritma
gipotonik eritma|osmotik bosimi qon plazmasinikidan past eritma
gipertonik eritma|osmotik bosimi qon plazmasinikidan yuqori eritma
gemoliz|eritrotsitlarning shishib yorilishi
plazmoliz|hujayradan suv chiqib, uning burishishi
krioskopiya|eritmaning muzlash harorati pasayishini o'lchash usuli
ebulioskopiya|eritmaning qaynash harorati ortishini o'lchash usuli
onkotik bosim|plazma oqsillari hosil qiladigan osmotik bosim
izotonik koeffitsient (i)|dissotsiatsiya tufayli zarrachalar soni ortishini ko'rsatuvchi koeffitsient
`,
qs: `
Eritrotsit gipotonik eritmaga tushirilsa nima bo'ladi?|Shishib yoriladi (gemoliz)|Burishadi (plazmoliz)|O'zgarmaydi|Bo'linadi
Eritrotsit gipertonik eritmaga tushirilsa nima bo'ladi?|Burishadi (plazmoliz)|Shishib yoriladi|O'zgarmaydi|Kattalashib bo'linadi
Qon plazmasining osmotik bosimi taxminan?|7,6 atm|1 atm|20 atm|0,5 atm
Osmotik bosim qonuni (π = iCRT) muallifi?|Vant-Goff|Raul|Avogadro|Le-Shatelye
Eritma muzlash haroratining pasayishi qaysi qonunga bo'ysunadi?|Raul qonuni|Vant-Goff qoidasi|Gess qonuni|Massalar ta'siri qonuni
Yiringli yaralarni tozalashda gipertonik (10 %) NaCl qo'llanilishiga sabab?|Yaradan suyuqlikni tortib oladi|Bakteriyalarni oziqlantiradi|Qonni ivitadi|Og'riqni qoldiradi
Qon plazmasidagi onkotik bosimni asosan qaysi oqsil ta'minlaydi?|Albumin|Fibrinogen|Gemoglobin|Insulin
Onkotik bosim kamayganda nima yuzaga keladi?|Shishlar|Gemoliz|Qon bosimi ortadi|Plazmoliz
Vena ichiga katta hajmda yuboriladigan eritmalar qanday bo'lishi kerak?|Izotonik|Gipotonik|Gipertonik|Konsentrlangan
Osmos jarayonida suv qaysi tomonga o'tadi?|Konsentratsiyasi yuqori eritma tomonga|Konsentratsiyasi past eritma tomonga|Ikkala tomonga teng|Hech qayerga
Kolligativ xossalar nimaga bog'liq?|Erigan zarrachalar soniga|Moddaning rangiga|Moddaning tabiatiga|Idish shakliga
`},

{ t: "Elektrolitik dissotsiatsiya, pH va bufer sistemalar",
terms: `
elektrolit|eritmada ionlarga ajraladigan modda
noelektrolit|eritmada ionlarga ajralmaydigan modda
dissotsiatsiya|moddaning ionlarga ajralishi
kation|musbat zaryadli ion
anion|manfiy zaryadli ion
kislota|dissotsiatsiyada H⁺ ionlarini beruvchi modda
asos|dissotsiatsiyada OH⁻ ionlarini beruvchi modda
pH|vodorod ionlari konsentratsiyasining manfiy o'nlik logarifmi
indikator|muhitga qarab rangini o'zgartiruvchi modda
bufer eritma|kam miqdorda kislota yoki ishqor qo'shilganda pH ni saqlovchi eritma
atsidoz|qon pH ining kislotali tomonga siljishi
alkaloz|qon pH ining ishqoriy tomonga siljishi
gidroliz|tuz ionlarining suv bilan o'zaro ta'siri
suvning ion ko'paytmasi|[H⁺]·[OH⁻] = 10⁻¹⁴
`,
qs: `
Qonning normal pH qiymati?|7,35–7,45|6,8–7,0|7,8–8,0|5,5–6,0
Neytral muhitning pH qiymati?|7|0|14|1
Me'da shirasining pH qiymati taxminan?|1,5–2,0|7,0|8,5|5,5
pH = 3 bo'lgan muhit qanday?|Kislotali|Neytral|Ishqoriy|Juda ishqoriy
Qonning asosiy bufer sistemasi?|Gidrokarbonat bufer|Asetat bufer|Ammiak bufer|Sitrat bufer
Bufer sistemalari pH ini hisoblash tenglamasi?|Genderson–Hasselbalx tenglamasi|Vant-Goff tenglamasi|Arrenius tenglamasi|Nernst tenglamasi
Qon pH i 7,35 dan pastga tushishi?|Atsidoz|Alkaloz|Gemoliz|Gidroliz
Fenolftalein ishqoriy muhitda qanday rangga kiradi?|Pushti (malina)|Rangsiz|Sariq|Ko'k
Lakmus kislotali muhitda qanday rangda?|Qizil|Ko'k|Binafsha|Yashil
Kuchli elektrolitga misol?|Xlorid kislota (HCl)|Sirka kislota|Glyukoza|Spirt
Noelektrolitga misol?|Glyukoza|Natriy xlorid|Kaliy gidroksid|Sulfat kislota
Suvning ion ko'paytmasi 25 °C da?|10⁻¹⁴|10⁻⁷|10⁷|1
[H⁺] = 10⁻⁵ mol/l bo'lsa, pH?|5|9|10⁻⁵|−5
Qondagi gemoglobin bufer sistemasi qayerda ishlaydi?|Eritrotsitlarda|Plazmada|Limfada|Me'dada
`},

{ t: "Kimyoviy termodinamika va kinetika",
terms: `
termodinamika|energiya o'zgarishlarini o'rganuvchi fan
entalpiya (ΔH)|sistemaning issiqlik miqdori o'zgarishi
ekzotermik reaksiya|issiqlik ajralib chiqadigan reaksiya (ΔH < 0)
endotermik reaksiya|issiqlik yutiladigan reaksiya (ΔH > 0)
entropiya (S)|sistema tartibsizligining o'lchovi
Gibbs energiyasi (ΔG)|reaksiyaning o'z-o'zidan borish imkoniyatini ko'rsatuvchi kattalik
kinetika|reaksiya tezligi va mexanizmini o'rganuvchi fan
reaksiya tezligi|vaqt birligida konsentratsiyaning o'zgarishi
katalizator|reaksiyani tezlashtiradigan, o'zi sarflanmaydigan modda
ingibitor|reaksiyani sekinlashtiruvchi modda
fermentlar|biologik katalizatorlar (oqsillar)
aktivlanish energiyasi|reaksiya boshlanishi uchun zarur minimal energiya
kimyoviy muvozanat|to'g'ri va teskari reaksiya tezliklari tenglashgan holat
`,
qs: `
O'z-o'zidan boradigan jarayonda Gibbs energiyasi qanday bo'ladi?|ΔG < 0|ΔG > 0|ΔG = 0|ΔG = 1
Ekzotermik reaksiyada entalpiya o'zgarishi?|ΔH < 0|ΔH > 0|ΔH = 0|ΔH cheksiz
Gess qonuni nimani ta'kidlaydi?|Reaksiya issiqlik effekti faqat boshlang'ich va oxirgi holatga bog'liq|Gazlar hajmi bosimga teskari proporsional|Reaksiya tezligi harorat bilan ortadi|Muvozanat tashqi ta'sirga qarshi siljiydi
Vant-Goff qoidasiga ko'ra harorat 10 °C ga oshganda reaksiya tezligi?|2–4 marta ortadi|10 marta ortadi|O'zgarmaydi|2 marta kamayadi
Katalizator reaksiyani qanday tezlashtiradi?|Aktivlanish energiyasini kamaytiradi|Aktivlanish energiyasini oshiradi|Muvozanatni siljitadi|Issiqlik effektini oshiradi
Le-Shatelye prinsipi nimani ifodalaydi?|Muvozanat tashqi ta'sirni kamaytiruvchi tomonga siljiydi|Massa saqlanadi|Energiya saqlanadi|Tezlik konsentratsiyaga bog'liq emas
Fermentlarning kimyoviy tabiati?|Oqsillar|Uglevodlar|Lipidlar|Mineral tuzlar
Odam organizmidagi fermentlar uchun optimal harorat?|37 °C atrofida|0 °C|60 °C|100 °C
Massalar ta'siri qonuni nimani ifodalaydi?|Reaksiya tezligi reagentlar konsentratsiyalari ko'paytmasiga proporsional|Massa saqlanishini|Energiya saqlanishini|Gaz hajmlari nisbatini
Moddalarning yonishi qanday reaksiya?|Ekzotermik|Endotermik|Issiqlik effektsiz|Fotokimyoviy
Glyukozaning organizmda oksidlanishi natijasida?|Energiya ajraladi|Energiya yutiladi|Oqsil hosil bo'ladi|Glikogen parchalanadi
`},

{ t: "Oksidlanish-qaytarilish reaksiyalari",
terms: `
oksidlanish|atomning elektron berishi
qaytarilish|atomning elektron qabul qilishi
oksidlovchi|elektron qabul qiluvchi modda
qaytaruvchi|elektron beruvchi modda
oksidlanish darajasi|atomning shartli zaryadi
permanganatometriya|KMnO₄ yordamida titrlash usuli
yodometriya|yod yordamida titrlash usuli
antioksidant|erkin radikallar va oksidlanishni to'xtatuvchi modda
erkin radikal|toq elektronli faol zarracha
elektrod potensiali|elektrod va eritma chegarasidagi potensiallar farqi
`,
qs: `
Oksidlanish jarayonida atom nima qiladi?|Elektron beradi|Elektron oladi|Proton oladi|Neytron beradi
Oksidlovchi nima qiladi?|Elektron qabul qiladi|Elektron beradi|Proton beradi|O'zgarmaydi
Kaliy permanganat (KMnO₄) qanday modda?|Kuchli oksidlovchi|Kuchli qaytaruvchi|Bufer modda|Indikator
KMnO₄ dagi marganesning oksidlanish darajasi?|+7|+2|+4|+6
H₂O₂ dagi kislorodning oksidlanish darajasi?|−1|−2|0|+2
H₂O dagi kislorodning oksidlanish darajasi?|−2|−1|0|+2
Oddiy moddalardagi elementlarning oksidlanish darajasi?|0|+1|−1|Valentligiga teng
Vodorod peroksidning antiseptik ta'siri nimaga asoslangan?|Oksidlovchi xossasiga (kislorod ajralishi)|Qaytaruvchi xossasiga|Ishqoriy muhitiga|Bufer xossasiga
Organizmdagi tabiiy antioksidantga misol?|Vitamin E (tokoferol)|Glyukoza|Natriy xlorid|Mochevina
Nafas zanjirida oxirgi elektron akseptori?|Kislorod|Vodorod|Uglerod|Azot
Temirning gemoglobindagi oksidlanish darajasi?|+2|+3|0|+6
`},

{ t: "Kompleks birikmalar va biogen elementlar",
terms: `
kompleks birikma|markaziy atom va unga bog'langan ligandlardan iborat birikma
markaziy atom (kompleks hosil qiluvchi)|kompleks markazidagi metall ioni
ligand|markaziy atomga bog'langan ion yoki molekula
koordinatsion son|markaziy atom bilan bog'langan ligandlar soni
xelat|polidentat ligand bilan hosil bo'lgan halqali kompleks
makroelementlar|organizmda ko'p miqdorda bo'lgan elementlar (C, H, O, N, Ca, P...)
mikroelementlar|organizmda juda oz miqdorda bo'lgan elementlar (Fe, Zn, Cu, I, Co...)
biogen elementlar|tirik organizm uchun zarur elementlar
trilon B (EDTA)|og'ir metallarni bog'lab chiqaruvchi xelat hosil qiluvchi modda
kompleksonometriya|kompleks hosil qilishga asoslangan titrlash usuli
`,
qs: `
Gemoglobin tarkibidagi metall?|Temir|Mis|Kobalt|Magniy
Vitamin B₁₂ tarkibidagi metall?|Kobalt|Temir|Rux|Mis
Xlorofill tarkibidagi metall?|Magniy|Temir|Kalsiy|Natriy
Qalqonsimon bez gormonlari tarkibidagi element?|Yod|Brom|Ftor|Temir
Organizmda yod yetishmovchiligi qaysi kasallikka olib keladi?|Endemik buqoq|Kamqonlik|Raxit|Kariyes
Temir yetishmovchiligi qaysi kasallikka olib keladi?|Temir tanqisligi anemiyasi|Buqoq|Raxit|Gemofiliya
Suyak va tishlarning asosiy elementi?|Kalsiy|Natriy|Kaliy|Temir
Hujayra ichidagi asosiy kation?|Kaliy (K⁺)|Natriy (Na⁺)|Kalsiy (Ca²⁺)|Xlor (Cl⁻)
Hujayradan tashqari suyuqlikdagi asosiy kation?|Natriy (Na⁺)|Kaliy (K⁺)|Magniy (Mg²⁺)|Temir (Fe²⁺)
Tishlarni kariyesdan himoya qiluvchi element?|Ftor|Xlor|Brom|Oltingugurt
Insulin tuzilishida qatnashadigan mikroelement?|Rux|Mis|Kobalt|Selen
Og'ir metallar bilan zaharlanganda qo'llaniladigan kompleks hosil qiluvchi?|Trilon B (EDTA) va unitiol|Glyukoza|Natriy xlorid|Kaliy permanganat
O'smaga qarshi dori — sisplatin qanday birikma?|Platinaning kompleks birikmasi|Organik kislota|Oqsil|Uglevod
[Cu(NH₃)₄]²⁺ kompleksida koordinatsion son?|4|2|6|8
Karboangidraza fermenti tarkibidagi metall?|Rux|Temir|Mis|Marganes
`},

{ t: "Organik birikmalar va biomolekulalar",
terms: `
-OH|gidroksil guruh (spirtlar, fenollar)
-COOH|karboksil guruh (karbon kislotalar)
-CHO|aldegid guruh
>C=O|karbonil (keton) guruh
-NH₂|aminoguruh (aminlar, aminokislotalar)
-SH|tiol (sulfgidril) guruh
izomeriya|tarkibi bir xil, tuzilishi va xossalari har xil moddalar mavjudligi
peptid bog'|aminokislotalarni bog'lovchi –CO–NH– bog'
glyukoza|aldogeksoza C₆H₁₂O₆
fruktoza|ketogeksoza
saxaroza|glyukoza + fruktozadan iborat disaxarid
laktoza|glyukoza + galaktozadan iborat sut shakari
maltoza|ikki molekula glyukozadan iborat disaxarid
kraxmal|o'simliklardagi zaxira polisaxarid
glikogen|hayvon va odamdagi zaxira polisaxarid
triglitserid|glitserin va yog' kislotalarining murakkab efiri
mochevina|oqsil almashinuvining oxirgi mahsuloti CO(NH₂)₂
nukleotid|azotli asos, uglevod va fosfat qoldig'idan iborat birlik
`,
qs: `
Spirtlarga xos funksional guruh?|–OH|–COOH|–CHO|–NH₂
Karbon kislotalarga xos funksional guruh?|–COOH|–OH|–CHO|–SH
Aminokislotalar tarkibida qaysi guruhlar bor?|Amino (–NH₂) va karboksil (–COOH)|Faqat gidroksil|Aldegid va keton|Faqat tiol
Aminokislotalar orasidagi bog'?|Peptid bog'|Glikozid bog'|Murakkab efir bog'i|Fosfodiefir bog'i
Glyukozaning formulasi?|C₆H₁₂O₆|C₁₂H₂₂O₁₁|C₂H₅OH|(C₆H₁₀O₅)ₙ
Saxaroza gidrolizlanganda nima hosil bo'ladi?|Glyukoza va fruktoza|Faqat glyukoza|Glyukoza va galaktoza|Glitserin va yog' kislotasi
Sut shakari?|Laktoza|Saxaroza|Maltoza|Fruktoza
Odam jigarida zaxira holda saqlanadigan polisaxarid?|Glikogen|Kraxmal|Sellyuloza|Xitin
Yog'lar gidrolizlanganda nima hosil bo'ladi?|Glitserin va yog' kislotalari|Aminokislotalar|Glyukoza|Nukleotidlar
Etil spirtining formulasi?|C₂H₅OH|CH₃OH|CH₃COOH|C₆H₅OH
Formalin nima?|Formaldegidning 40 % li suvli eritmasi|Etil spirti|Sirka kislota eritmasi|Fiziologik eritma
Qandli diabetning og'ir holatida siydikda paydo bo'ladigan keton tana?|Aseton|Etanol|Glitserin|Mochevina
Oqsil almashinuvining oxirgi mahsuloti (siydik bilan chiqadi)?|Mochevina|Glyukoza|Yog' kislotasi|Glitserin
Oqsillarga xos rangli reaksiya?|Biuret reaksiyasi|Kumush ko'zgu reaksiyasi|Yod bilan ko'k rang|Fenolftalein reaksiyasi
Kraxmal yod bilan qanday rang beradi?|Ko'k|Qizil|Sariq|Yashil
Aldegidlarni aniqlash reaksiyasi?|Kumush ko'zgu reaksiyasi|Biuret reaksiyasi|Ksantoprotein reaksiyasi|Neytrallanish reaksiyasi
`}
]);
