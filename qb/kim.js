QB.add("kim", "Tibbiy kimyo", "Atama", [
{ t: "Tibbiy kimyoga kirish. Kimyo va atrof muhit. Biogen elementlar",
terms: `
kimyo|moddalar, ularning tarkibi, tuzilishi va o'zgarishlari haqidagi fan
biogen elementlar|tirik organizm tarkibiga kiruvchi va hayot uchun zarur elementlar
makroelementlar|organizmda 10⁻² % dan ko'p bo'lgan elementlar (C, H, O, N, P, S, Ca, K, Na, Mg, Cl)
mikroelementlar|organizmda 10⁻³–10⁻⁵ % miqdordagi elementlar (Fe, Zn, Cu, Mn, Co, I...)
ultramikroelementlar|organizmda 10⁻⁵ % dan kam bo'lgan elementlar (Au, Hg, Ra...)
organogenlar|organik moddalar asosini tashkil etuvchi 6 element (C, H, O, N, P, S)
s-elementlar|oxirgi elektroni s-pog'onachaga joylashgan elementlar (Na, K, Mg, Ca...)
p-elementlar|oxirgi elektroni p-pog'onachaga joylashgan elementlar (C, N, O, P, S, Cl, I...)
d-elementlar|oxirgi elektroni d-pog'onachaga joylashgan elementlar (Fe, Cu, Zn, Co, Mn...)
toksik elementlar|organizmga zaharli ta'sir ko'rsatuvchi elementlar (Hg, Pb, Cd, As...)
ekologiya|tirik organizmlar va muhit o'zaro munosabati haqidagi fan
Ferrum (Fe)|temir
Cuprum (Cu)|mis
Zincum (Zn)|rux
Cobaltum (Co)|kobalt
Iodum (I)|yod
Hydrargyrum (Hg)|simob
Plumbum (Pb)|qo'rg'oshin
Natrium (Na)|natriy
Kalium (K)|kaliy
`,
qs: `
Barcha tirik organizmlarda eng ko'p uchraydigan 6 element (CHNOPS)?|Uglerod, vodorod, azot, kislorod, fosfor, oltingugurt|Uglerod, geliy, azot, kislorod, kaliy, oltingugurt|Kalsiy, vodorod, temir, azot, fosfor, natriy|Xlor, vodorod, azot, kislorod, fosfor, natriy
Odam organizmida massasi bo'yicha eng ko'p bo'lgan element?|Kislorod|Uglerod|Vodorod|Azot
Gemoglobin tarkibidagi metall?|Temir|Mis|Kobalt|Magniy
Vitamin B₁₂ tarkibidagi metall?|Kobalt|Temir|Rux|Mis
Qalqonsimon bez gormonlari tarkibidagi element?|Yod|Brom|Ftor|Temir
Yod yetishmovchiligi qaysi kasallikka olib keladi?|Endemik buqoq|Kamqonlik|Raxit|Kariyes
Temir yetishmovchiligi qaysi kasallikka olib keladi?|Temir tanqisligi anemiyasi|Buqoq|Raxit|Gemofiliya
Suyak va tishlarning asosiy elementi?|Kalsiy|Natriy|Kaliy|Temir
Hujayra ichidagi asosiy kation?|Kaliy (K⁺)|Natriy (Na⁺)|Kalsiy (Ca²⁺)|Xlor (Cl⁻)
Hujayradan tashqari suyuqlikdagi asosiy kation?|Natriy (Na⁺)|Kaliy (K⁺)|Magniy (Mg²⁺)|Temir (Fe²⁺)
Tishlarni kariyesdan himoya qiluvchi element?|Ftor|Xlor|Brom|Oltingugurt
Insulin tuzilishida qatnashadigan mikroelement?|Rux|Mis|Kobalt|Selen
Antioksidant fermentlar (glutationperoksidaza) tarkibidagi mikroelement?|Selen|Natriy|Kalsiy|Kremniy
Xlorofill tarkibidagi metall?|Magniy|Temir|Kalsiy|Natriy
Simob bilan surunkali zaharlanish qanday ataladi?|Merkurializm|Saturnizm|Flyuoroz|Argiriya
Qo'rg'oshin bilan zaharlanish qanday ataladi?|Saturnizm|Merkurializm|Flyuoroz|Siderozis
Ichimlik suvida ftor ortiqcha bo'lsa, qaysi kasallik rivojlanadi?|Flyuoroz|Kariyes|Buqoq|Anemiya
Biogen elementlarning aksariyati davriy sistemaning qaysi qismida joylashgan?|Birinchi to'rtta davrda|Faqat 6–7-davrlarda|Faqat lantanoidlar orasida|Faqat asl gazlar orasida
Mis yetishmovchiligi qaysi jarayonga salbiy ta'sir qiladi?|Gemoglobin sintezi va temir almashinuviga|Tish emaliga|Ko'rishga|Eshitishga
Marganes qaysi jarayonda muhim?|Ko'plab fermentlar faolligida, suyak hosil bo'lishida|Qonning kislorod tashishida|Qalqonsimon bez gormonlarida|B₁₂ vitaminida
`},

{ t: "Eritmalar. Eruvchanlik. Eritmalarning kolligativ xossalari",
terms: `
eritma|ikki yoki undan ortiq komponentli gomogen sistema
erituvchi|eritmada ko'p miqdorda bo'lgan komponent
eruvchanlik|ma'lum haroratda erituvchida erishi mumkin bo'lgan modda miqdori
to'yingan eritma|ma'lum haroratda moddani boshqa erita olmaydigan eritma
to'yinmagan eritma|yana modda eritishi mumkin bo'lgan eritma
o'ta to'yingan eritma|to'yinganidan ko'proq erigan modda tutgan beqaror eritma
massa ulushi (ω)|erigan modda massasining eritma massasiga nisbati
molyar konsentratsiya (C)|1 litr eritmadagi erigan modda mollari soni
molyal konsentratsiya|1 kg erituvchidagi erigan modda mollari soni
ekvivalent molyar konsentratsiya|1 litr eritmadagi modda ekvivalentlari soni
titr|1 ml eritmadagi erigan modda massasi (g/ml)
osmos|erituvchining yarim o'tkazgich parda orqali konsentrlangan eritma tomon o'tishi
osmotik bosim|osmosni to'xtatish uchun kerak bo'lgan bosim
izotonik eritma|osmotik bosimi qon plazmasinikiga teng eritma
gipotonik eritma|osmotik bosimi qon plazmasinikidan past eritma
gipertonik eritma|osmotik bosimi qon plazmasinikidan yuqori eritma
gemoliz|eritrotsitlarning shishib yorilishi
plazmoliz|hujayradan suv chiqib, uning burishishi
krioskopiya|eritmaning muzlash harorati pasayishini o'lchash usuli
ebulioskopiya|eritmaning qaynash harorati ortishini o'lchash usuli
onkotik bosim|plazma oqsillari hosil qiladigan osmotik bosim
titrimetriya|eritma konsentratsiyasini titrlash yo'li bilan aniqlash usuli
`,
qs: `
Fiziologik eritmada NaCl ning massa ulushi?|0,9 %|9 %|0,09 %|5 %
Izotonik glyukoza eritmasining konsentratsiyasi?|5 %|10 %|40 %|0,9 %
100 g eritmada 5 g modda bo'lsa, massa ulushi?|5 %|10 %|0,5 %|50 %
200 g 10 % li eritmada qancha erigan modda bor?|20 g|10 g|2 g|200 g
0,5 l eritmada 1 mol modda bo'lsa, molyar konsentratsiya?|2 mol/l|0,5 mol/l|1 mol/l|5 mol/l
Molyar konsentratsiya birligi?|mol/l|g/ml|mol/kg|%
Gazlarning suvda eruvchanligi harorat ortishi bilan?|Kamayadi|Ortadi|O'zgarmaydi|Avval ortadi
Gazlarning suvda eruvchanligi bosim ortishi bilan (Genri qonuni)?|Ortadi|Kamayadi|O'zgarmaydi|Nolga tushadi
Eritrotsit gipotonik eritmaga tushirilsa nima bo'ladi?|Shishib yoriladi (gemoliz)|Burishadi (plazmoliz)|O'zgarmaydi|Bo'linadi
Eritrotsit gipertonik eritmaga tushirilsa nima bo'ladi?|Burishadi (plazmoliz)|Shishib yoriladi|O'zgarmaydi|Kattalashib bo'linadi
Qon plazmasining osmotik bosimi taxminan?|7,6 atm|1 atm|20 atm|0,5 atm
Osmotik bosim qonuni (π = iCRT) muallifi?|Vant-Goff|Raul|Avogadro|Le-Shatelye
Eritma muzlash haroratining pasayishi qaysi qonunga bo'ysunadi?|Raul qonuni|Vant-Goff qoidasi|Gess qonuni|Massalar ta'siri qonuni
Yiringli yaralarda gipertonik (10 %) NaCl qo'llanilishiga sabab?|Yaradan suyuqlikni tortib oladi|Bakteriyalarni oziqlantiradi|Qonni ivitadi|Og'riqni qoldiradi
Qon plazmasidagi onkotik bosimni asosan qaysi oqsil ta'minlaydi?|Albumin|Fibrinogen|Gemoglobin|Insulin
Onkotik bosim kamayganda nima yuzaga keladi?|Shishlar|Gemoliz|Qon bosimi ortadi|Plazmoliz
Vena ichiga katta hajmda yuboriladigan eritmalar qanday bo'lishi kerak?|Izotonik|Gipotonik|Gipertonik|Konsentrlangan
Kolligativ xossalar nimaga bog'liq?|Erigan zarrachalar soniga|Moddaning rangiga|Moddaning tabiatiga|Idish shakliga
Kolligativ xossalarga kirmaydigan javob?|Eritma rangi|Osmotik bosim|Muzlash haroratining pasayishi|Qaynash haroratining ko'tarilishi
NaCl eritmasi uchun izotonik koeffitsient (i) taxminan nechaga teng?|2|1|3|0,5
Glyukoza eritmasi uchun izotonik koeffitsient?|1|2|3|4
Spirt antiseptik sifatida qanday konsentratsiyada eng samarali?|70 % ga yaqin|96 %|10 %|40 %
`},

{ t: "Termodinamika va kimyoviy termodinamika",
terms: `
termodinamika|energiya o'zgarishlari va ularning qonuniyatlarini o'rganuvchi fan
sistema|tekshirilayotgan jism yoki jismlar to'plami
ochiq sistema|muhit bilan modda va energiya almashinadigan sistema
yopiq sistema|faqat energiya almashinadigan sistema
izolyatsiyalangan sistema|na modda, na energiya almashinmaydigan sistema
ichki energiya (U)|sistemadagi barcha zarrachalar energiyasi yig'indisi
entalpiya (ΔH)|o'zgarmas bosimdagi issiqlik effekti
ekzotermik reaksiya|issiqlik ajraladigan reaksiya (ΔH < 0)
endotermik reaksiya|issiqlik yutiladigan reaksiya (ΔH > 0)
entropiya (S)|sistema tartibsizligining o'lchovi
Gibbs energiyasi (ΔG)|reaksiyaning o'z-o'zidan borish imkoniyatini ko'rsatuvchi kattalik
solishtirma issiqlik sig'imi|1 g moddani 1 °C ga isitish uchun kerak issiqlik
kaloriyametr|issiqlik effektini o'lchaydigan asbob
metabolizm|organizmdagi moddalar va energiya almashinuvi
ATF|hujayradagi asosiy energiya to'plovchi va tashuvchi modda
`,
qs: `
Termodinamikaning birinchi qonuni nimani ifodalaydi?|Energiyaning saqlanish qonunini|Entropiya ortishini|Absolyut nolni|Reaksiya tezligini
Termodinamikaning ikkinchi qonuniga ko'ra izolyatsiyalangan sistemada o'z-o'zidan boradigan jarayonlarda?|Entropiya ortadi|Entropiya kamayadi|Energiya yo'qoladi|Harorat doimo pasayadi
Tirik organizm qanday sistema?|Ochiq sistema|Yopiq sistema|Izolyatsiyalangan sistema|Ideal sistema
O'z-o'zidan boradigan jarayonda Gibbs energiyasi?|ΔG < 0|ΔG > 0|ΔG = 0|ΔG = 1
Ekzotermik reaksiyada entalpiya o'zgarishi?|ΔH < 0|ΔH > 0|ΔH = 0|ΔH cheksiz
Gess qonuni nimani ta'kidlaydi?|Reaksiya issiqlik effekti faqat boshlang'ich va oxirgi holatga bog'liq|Gaz hajmi bosimga teskari proporsional|Reaksiya tezligi harorat bilan ortadi|Muvozanat tashqi ta'sirga qarshi siljiydi
Gibbs energiyasi formulasi?|ΔG = ΔH − TΔS|ΔG = ΔH + TΔS|ΔG = ΔU + PV|ΔG = Q + A
Moddalarning yonishi qanday reaksiya?|Ekzotermik|Endotermik|Issiqlik effektsiz|Fotokimyoviy
Glyukozaning organizmda oksidlanishi natijasida?|Energiya ajraladi|Energiya yutiladi|Oqsil hosil bo'ladi|Glikogen parchalanadi
1 g uglevod oksidlanganda taxminan qancha energiya ajraladi?|~4 kkal (17 kJ)|~9 kkal|~1 kkal|~20 kkal
1 g yog' oksidlanganda taxminan qancha energiya ajraladi?|~9 kkal (39 kJ)|~4 kkal|~2 kkal|~15 kkal
Hujayradagi universal energiya tashuvchi?|ATF|Glyukoza|Glikogen|Mochevina
Moddaning tartibsizlik darajasi qaysi holatda eng katta?|Gaz holatida|Kristall holatda|Suyuq holatda|Barchasida teng
Issiqlik effektini o'lchash asbobi?|Kaloriyametr|Termometr|Barometr|Potensiometr
`},

{ t: "Kompleks birikmalar. Yadro kimyosi",
terms: `
kompleks birikma|markaziy atom va unga bog'langan ligandlardan iborat birikma
markaziy atom (kompleks hosil qiluvchi)|kompleks markazidagi, ko'pincha d-metall ioni
ligand|markaziy atomga bog'langan ion yoki molekula
koordinatsion son|markaziy atom bilan bog'langan donor atomlar soni
ichki sfera|markaziy atom va ligandlar (kvadrat qavs ichida)
tashqi sfera|kompleks ion zaryadini neytrallovchi ionlar
dentatlik|ligandning markaziy atomga bog'lanadigan atomlari soni
xelat|polidentat ligand bilan hosil bo'lgan halqali kompleks
trilon B (EDTA)|og'ir metallarni bog'lab chiqaruvchi kompleks hosil qiluvchi
kompleksonometriya|kompleks hosil qilishga asoslangan titrlash usuli
beqarorlik konstantasi|kompleksning dissotsilanish darajasini ko'rsatuvchi kattalik
biokompleks birikmalar|organizmdagi metall-oqsil, metall-ferment komplekslari
radioaktivlik|yadrolarning o'z-o'zidan nurlanib parchalanishi
izotoplar|protonlar soni bir xil, neytronlar soni har xil atomlar
yarim yemirilish davri|radioaktiv yadrolarning yarmi parchalanadigan vaqt
yadro tibbiyoti|radioaktiv moddalar yordamida tashxis va davolash
PET|pozitron-emission tomografiya
`,
qs: `
Koordinatsion nazariya muallifi?|Alfred Verner|D. Mendeleyev|S. Arrenius|A. Butlerov
[Cu(NH₃)₄]²⁺ kompleksida koordinatsion son?|4|2|6|8
K₃[Fe(CN)₆] da markaziy atom?|Temir|Kaliy|Uglerod|Azot
K₃[Fe(CN)₆] da ligand?|CN⁻ (sianid ioni)|K⁺|Fe³⁺|N
K₃[Fe(CN)₆] da tashqi sfera?|K⁺ ionlari|CN⁻|Fe³⁺|[Fe(CN)₆]³⁻
Gemoglobin kimyoviy jihatdan qanday birikma?|Temirning biokompleks birikmasi|Oddiy tuz|Lipid|Uglevod
Og'ir metallar bilan zaharlanganda qo'llaniladigan kompleks hosil qiluvchilar?|Trilon B (EDTA), unitiol|Glyukoza|Natriy xlorid|Kaliy permanganat
O'smaga qarshi dori — sisplatin qanday birikma?|Platinaning kompleks birikmasi|Organik kislota|Oqsil|Uglevod
Etilendiamin (en) necha dentatli ligand?|Ikki dentatli|Bir dentatli|Uch dentatli|Olti dentatli
EDTA odatda necha dentatli ligand?|Olti dentatli|Bir dentatli|Ikki dentatli|To'rt dentatli
Suvning umumiy qattiqligi qaysi usulda aniqlanadi?|Kompleksonometriya (trilon B bilan)|Permanganatometriya|Yodometriya|Krioskopiya
Kompleks qanchalik barqaror bo'lsa, beqarorlik konstantasi?|Shuncha kichik|Shuncha katta|O'zgarmaydi|Nolga teng
Karboangidraza fermenti tarkibidagi metall?|Rux|Temir|Mis|Marganes
Qalqonsimon bez faoliyatini tekshirishda qo'llaniladigan radioaktiv izotop?|Yod-131|Uglerod-12|Kislorod-16|Natriy-23
PET tekshiruvida organizmga nima yuboriladi?|Pozitron chiqaruvchi radioaktiv modda|Rentgen kontrast modda|Glyukoza eritmasi|Fiziologik eritma
Alfa-zarracha nima?|Geliy yadrosi|Elektron|Foton|Neytron
`},

{ t: "Elektrokimyo asoslari. Elektrolit eritmalarining elektr o'tkazuvchanligi",
terms: `
elektrolit|eritmada yoki suyuqlanmada ionlarga ajraladigan modda
noelektrolit|eritmada ionlarga ajralmaydigan modda
elektrolitik dissotsiatsiya|moddaning ionlarga ajralishi
kation|musbat zaryadli ion
anion|manfiy zaryadli ion
dissotsiatsiya darajasi (α)|ionlarga ajralgan molekulalarning umumiy molekulalarga nisbati
kuchli elektrolit|eritmada deyarli to'liq dissotsilanadigan modda
kuchsiz elektrolit|eritmada qisman dissotsilanadigan modda
I tur o'tkazgichlar|elektronlar orqali tok o'tkazuvchilar (metallar)
II tur o'tkazgichlar|ionlar orqali tok o'tkazuvchilar (elektrolit eritmalar)
solishtirma elektr o'tkazuvchanlik|1 sm³ eritmaning elektr o'tkazuvchanligi
konduktometriya|elektr o'tkazuvchanlikni o'lchashga asoslangan tahlil usuli
kislota (Arrenius bo'yicha)|dissotsiatsiyada H⁺ ionlarini beruvchi modda
asos (Arrenius bo'yicha)|dissotsiatsiyada OH⁻ ionlarini beruvchi modda
pH|vodorod ionlari konsentratsiyasining manfiy o'nlik logarifmi
bufer eritma|kam miqdorda kislota yoki ishqor qo'shilganda pH ni saqlovchi eritma
atsidoz|qon pH ining kislotali tomonga siljishi
alkaloz|qon pH ining ishqoriy tomonga siljishi
gidroliz|tuz ionlarining suv bilan o'zaro ta'siri
`,
qs: `
Elektrolitik dissotsiatsiya nazariyasi muallifi?|S. Arrenius|A. Verner|D. Mendeleyev|Vant-Goff
Kuchli elektrolitga misol?|Xlorid kislota (HCl)|Sirka kislota|Glyukoza|Etil spirti
Kuchsiz elektrolitga misol?|Sirka kislota (CH₃COOH)|NaCl|HCl|NaOH
Noelektrolitga misol?|Glyukoza|Natriy xlorid|Kaliy gidroksid|Sulfat kislota
Elektrolit eritmalari qanday o'tkazgichlar?|II tur (ionli) o'tkazgichlar|I tur (elektronli) o'tkazgichlar|Yarim o'tkazgichlar|Dielektriklar
Eritmaning elektr o'tkazuvchanligini o'lchashga asoslangan usul?|Konduktometriya|Potensiometriya|Kaloriyametriya|Krioskopiya
Qonning normal pH qiymati?|7,35–7,45|6,8–7,0|7,8–8,0|5,5–6,0
Neytral muhitning pH qiymati?|7|0|14|1
Me'da shirasining pH qiymati taxminan?|1,5–2,0|7,0|8,5|5,5
[H⁺] = 10⁻⁵ mol/l bo'lsa, pH?|5|9|10⁻⁵|−5
Suvning ion ko'paytmasi 25 °C da?|10⁻¹⁴|10⁻⁷|10⁷|1
Qonning asosiy bufer sistemasi?|Gidrokarbonat bufer|Asetat bufer|Ammiak bufer|Sitrat bufer
Bufer sistemalari pH ini hisoblash tenglamasi?|Genderson–Hasselbalx tenglamasi|Vant-Goff tenglamasi|Arrenius tenglamasi|Nernst tenglamasi
Qon pH i 7,35 dan pastga tushishi?|Atsidoz|Alkaloz|Gemoliz|Gidroliz
Eritrotsitlarda ishlaydigan bufer sistema?|Gemoglobin bufer|Asetat bufer|Ammiak bufer|Borat bufer
Fenolftalein ishqoriy muhitda qanday rangga kiradi?|Pushti (malina)|Rangsiz|Sariq|Ko'k
Lakmus kislotali muhitda qanday rangda?|Qizil|Ko'k|Binafsha|Yashil
Kislotani ishqor bilan titrlash usuli?|Neytrallash usuli (kislota-asosli titrlash)|Kompleksonometriya|Permanganatometriya|Yodometriya
Elektrolitlar eritmasi haroratining ko'tarilishi elektr o'tkazuvchanlikka qanday ta'sir qiladi?|Ortadi|Kamayadi|O'zgarmaydi|Nolga tushadi
`},

{ t: "Elektrodlardagi jarayonlar. Potensiallar hosil bo'lishi",
terms: `
elektrod|elektrolit bilan tutashgan o'tkazgich
elektrod potensiali|elektrod va eritma chegarasidagi potensiallar farqi
standart vodorod elektrodi|potensiali shartli ravishda 0 deb qabul qilingan elektrod
galvanik element|kimyoviy energiyani elektr energiyaga aylantiruvchi qurilma
Nernst tenglamasi|elektrod potensialining konsentratsiyaga bog'liqligi
potensiometriya|elektrod potensialini o'lchashga asoslangan tahlil usuli
shisha elektrod|pH ni o'lchashda ishlatiladigan elektrod
ion-selektiv elektrod|ma'lum ion konsentratsiyasini aniqlovchi elektrod
membrana potensiali|hujayra membranasining ikki tomoni orasidagi potensiallar farqi
tinchlik potensiali|qo'zg'almagan hujayradagi membrana potensiali (taxminan −70 mV)
harakat potensiali|qo'zg'alish vaqtida membrana potensialining tez o'zgarishi
oksidlanish|atomning elektron berishi
qaytarilish|atomning elektron qabul qilishi
oksidlovchi|elektron qabul qiluvchi modda
qaytaruvchi|elektron beruvchi modda
`,
qs: `
Standart vodorod elektrodining potensiali?|0 V (shartli)|1 V|−1 V|0,5 V
Elektrod potensialining konsentratsiyaga bog'liqligini ifodalovchi tenglama?|Nernst tenglamasi|Vant-Goff tenglamasi|Arrenius tenglamasi|Gess qonuni
pH ni o'lchashda qo'llaniladigan elektrod?|Shisha elektrod|Kumush elektrod|Mis elektrod|Platina sim
Galvanik element nimani nimaga aylantiradi?|Kimyoviy energiyani elektr energiyaga|Elektr energiyani issiqlikka|Yorug'likni elektrga|Mexanik energiyani kimyoviyga
Hujayra tinchlik potensialining taxminiy qiymati?|−70 mV|+70 mV|0 mV|−700 mV
Tinchlik potensialini asosan qaysi ion gradiyenti ta'minlaydi?|K⁺ ionlari|Ca²⁺ ionlari|Fe²⁺ ionlari|Cl⁻ ionlari faqat
Qondagi kaliy darajasini tez aniqlashda qo'llaniladigan qurilma?|Ion-selektiv elektrod|Kaloriyametr|Refraktometr|Mikroskop
Oksidlanish jarayonida atom nima qiladi?|Elektron beradi|Elektron oladi|Proton oladi|Neytron beradi
Oksidlovchi nima qiladi?|Elektron qabul qiladi|Elektron beradi|Proton beradi|O'zgarmaydi
Kaliy permanganat (KMnO₄) qanday modda?|Kuchli oksidlovchi|Kuchli qaytaruvchi|Bufer modda|Indikator
KMnO₄ dagi marganesning oksidlanish darajasi?|+7|+2|+4|+6
H₂O₂ dagi kislorodning oksidlanish darajasi?|−1|−2|0|+2
Vodorod peroksidning antiseptik ta'siri nimaga asoslangan?|Oksidlovchi xossasiga|Qaytaruvchi xossasiga|Ishqoriy muhitiga|Bufer xossasiga
Nafas zanjirida oxirgi elektron akseptori?|Kislorod|Vodorod|Uglerod|Azot
EKG va EEG ning fizik-kimyoviy asosi?|To'qimalarda biopotensiallar hosil bo'lishi|Osmos|Adsorbsiya|Gidroliz
`},

{ t: "Sirt hodisalarining fizik-kimyosi. Adsorbsiya. Xromatografiya",
terms: `
sirt hodisalari|fazalar chegarasida sodir bo'ladigan hodisalar
sirt tarangligi|suyuqlik sirtini qisqartirishga intiluvchi kuch
adsorbsiya|moddaning boshqa modda sirtiga yutilishi
absorbsiya|moddaning boshqa modda butun hajmiga yutilishi
xemosorbsiya|kimyoviy bog' hosil qilib yutilish
adsorbent|yutuvchi modda
adsorbat|yutiladigan modda
desorbsiya|adsorbsiyalangan moddaning sirtdan ajralishi
sirt-faol moddalar (SFM)|sirt tarangligini kamaytiruvchi moddalar
xromatografiya|moddalarni sorbent bo'ylab turli tezlikda harakatlanishiga asoslangan ajratish usuli
faollashtirilgan ko'mir|kuchli adsorbent, zaharlanishda ishlatiladi
enterosorbentlar|ichakda zaharli moddalarni yutuvchi dorilar
surfaktant|o'pka alveolalarida sirt tarangligini kamaytiruvchi modda
`,
qs: `
Moddaning boshqa modda sirtiga yutilishi?|Adsorbsiya|Absorbsiya|Desorbsiya|Diffuziya
Moddaning boshqa modda butun hajmiga yutilishi?|Absorbsiya|Adsorbsiya|Xemosorbsiya|Desorbsiya
Kimyoviy bog' hosil qilib yutilish?|Xemosorbsiya|Fizik adsorbsiya|Absorbsiya|Osmos
Zaharlanishda qo'llaniladigan adsorbent?|Faollashtirilgan ko'mir|Natriy xlorid|Glyukoza|Kaliy permanganat
Harorat ortganda fizik adsorbsiya qanday o'zgaradi?|Kamayadi|Ortadi|O'zgarmaydi|Avval ortadi, keyin ortadi
Sirt tarangligini kamaytiruvchi moddalar?|Sirt-faol moddalar (sovun, o't kislotalari)|Anorganik tuzlar|Shakarlar|Kislotalar
Moddalarni ajratish va tahlil qilishning xromatografik usulini kashf etgan olim?|M. S. Svet|A. Verner|S. Arrenius|M. Lomonosov
O'pka alveolalarining yopishib qolishiga yo'l qo'ymaydigan modda?|Surfaktant|Gemoglobin|Mutsin|Pepsin
O't kislotalari ovqat hazm qilishda qanday rol o'ynaydi?|Yog'larni emulsiyalaydi (sirt-faol moddalar)|Oqsillarni parchalaydi|Uglevodlarni parchalaydi|Kislotalikni oshiradi
Gemodializ va gemosorbsiyaning asosi?|Qondan zaharli moddalarni membrana yoki sorbent orqali chiqarish|Qonni ivitish|Qonni isitish|Qonga kislorod qo'shish
Xromatografiyada moddalar nima sababli ajraladi?|Sorbentga yutilish darajasi va harakat tezligi har xilligi|Rangi har xilligi|Massasi bir xilligi|Harorat farqi
Sirt tarangligi birligi?|N/m (J/m²)|Pa|mol/l|K
`},

{ t: "Dispers sistemalarning fizik-kimyosi",
terms: `
dispers sistema|bir modda zarrachalari boshqa modda ichida tarqalgan sistema
dispers faza|maydalangan holda tarqalgan modda
dispers muhit|dispers faza tarqalgan modda
disperslik darajasi|zarracha o'lchamiga teskari kattalik
chin eritmalar|zarracha o'lchami 1 nm dan kichik sistemalar
kolloid eritmalar|zarracha o'lchami 1–100 nm bo'lgan sistemalar
dag'al dispers sistemalar|zarracha o'lchami 100 nm dan katta sistemalar
suspenziya|suyuqlikda qattiq zarrachalar tarqalgan sistema
emulsiya|suyuqlikda boshqa suyuqlik tomchilari tarqalgan sistema
aerozol|gazda qattiq yoki suyuq zarrachalar tarqalgan sistema
ko'pik|suyuqlikda gaz pufakchalari tarqalgan sistema
dializ|kolloid eritmani yarim o'tkazgich membrana orqali tozalash
`,
qs: `
Kolloid zarrachalar o'lchami?|1–100 nm|1 nm dan kichik|100 nm dan katta|1 mm dan katta
Chin eritmada zarracha o'lchami?|1 nm dan kichik|1–100 nm|100 nm dan katta|1 mkm dan katta
Sut qanday dispers sistema?|Emulsiya|Suspenziya|Aerozol|Ko'pik
Tuman qanday dispers sistema?|Aerozol (gazda suyuqlik)|Emulsiya|Suspenziya|Gel
Tutun qanday dispers sistema?|Aerozol (gazda qattiq zarracha)|Emulsiya|Ko'pik|Chin eritma
Suyuqlikda qattiq zarrachalar tarqalgan sistema?|Suspenziya|Emulsiya|Aerozol|Ko'pik
Qon plazmasini qanday sistemaga kiritish mumkin?|Kolloid va chin eritmalar aralashmasi|Faqat chin eritma|Faqat suspenziya|Aerozol
Kolloid eritmalarni past molekulyar aralashmalardan tozalash usuli?|Dializ|Distillyatsiya|Kristallanish|Filtrlash qog'oz orqali
Sun'iy buyrak apparati qaysi jarayonga asoslangan?|Dializ (gemodializ)|Elektroliz|Adsorbsiya faqat|Krioskopiya
Dorilar suspenziya holida chiqarilganda ishlatishdan oldin nima qilinadi?|Chayqatiladi|Isitiladi|Muzlatiladi|Suyultirilmaydi
Disperslik darajasi zarracha o'lchami kichrayganda?|Ortadi|Kamayadi|O'zgarmaydi|Nolga tushadi
`},

{ t: "Kolloid eritmalarning xossalari",
terms: `
mitsella|kolloid zarrachaning tuzilish birligi
yadro (mitsellada)|mitsellaning markaziy qiyin eriydigan qismi
potensial aniqlovchi ionlar|yadro sirtiga adsorbsiyalangan ionlar
qarshi ionlar|zaryadni neytrallovchi ionlar
Tindal effekti|kolloid eritmada yorug'lik nurining sochilishi (yorug' konus)
broun harakati|kolloid zarrachalarning tartibsiz harakati
elektroforez|elektr maydonida zarrachalarning harakatlanishi
koagulyatsiya|kolloid zarrachalarning yirikla­shib cho'kishi
peptizatsiya|cho'kmaning qayta kolloid holatga o'tishi
gidrofob kolloidlar|dispers muhit bilan kuchsiz ta'sirlashuvchi kolloidlar
gidrofil kolloidlar|dispers muhit bilan kuchli ta'sirlashuvchi kolloidlar
kolloid himoya|YuMB qo'shilganda zolning barqarorlashuvi
gel|strukturalangan kolloid sistema (jele)
sedimentatsiya|zarrachalarning og'irlik kuchi ta'sirida cho'kishi
`,
qs: `
Kolloid eritmadan yorug'lik o'tganda yorug' konus hosil bo'lishi?|Tindal effekti|Broun harakati|Elektroforez|Koagulyatsiya
Kolloid zarrachalarning tartibsiz harakati?|Broun harakati|Sedimentatsiya|Dializ|Elektroosmos
Elektr maydonida kolloid zarrachalarning harakatlanishi?|Elektroforez|Dializ|Osmos|Koagulyatsiya
Kolloid zarrachalarning yiriklashib cho'kishi?|Koagulyatsiya|Peptizatsiya|Dispersiyalanish|Solvatatsiya
Cho'kmaning qayta kolloid holatga o'tishi?|Peptizatsiya|Koagulyatsiya|Sedimentatsiya|Kristallanish
Kolloid zarrachaning tuzilish birligi?|Mitsella|Molekula|Atom|Kristall panjara
Shulse–Gardi qoidasiga ko'ra koagulyatsiya kuchi nimaga bog'liq?|Koagulyant ion zaryadiga (zaryad oshsa kuchayadi)|Ion rangiga|Idish hajmiga|Faqat haroratga
Eritrotsitlarning cho'kish tezligi (EChT) qaysi hodisaga asoslangan?|Sedimentatsiyaga|Elektroforezga|Dializga|Osmosga
Qon oqsillarini ajratishda qo'llaniladigan usul?|Elektroforez|Distillyatsiya|Krioskopiya|Titrlash
Qondagi oqsillarning himoya ta'siri nimaga misol?|Kolloid himoya|Koagulyatsiya|Peptizatsiya|Sedimentatsiya
Jelatin, agar qanday sistemalar hosil qiladi?|Gel (strukturalangan sistema)|Aerozol|Ko'pik|Suspenziya
`},

{ t: "Poli- va geterofunksional birikmalar (metabolitlar va dorilar)",
terms: `
funksional guruh|molekulaning xossalarini belgilovchi atomlar guruhi
-OH|gidroksil guruh (spirtlar, fenollar)
-COOH|karboksil guruh (karbon kislotalar)
-CHO|aldegid guruh
>C=O|karbonil (keton) guruh
-NH₂|aminoguruh
-SH|tiol (sulfgidril) guruh
polifunksional birikmalar|bir xil funksional guruhlar bir nechta bo'lgan birikmalar
geterofunksional birikmalar|turli funksional guruhlar tutgan birikmalar
glitserin|uch atomli spirt
etilenglikol|ikki atomli spirt (zaharli)
aminospirtlar|amino va gidroksil guruh tutgan birikmalar (kolamin, xolin)
gidroksikislotalar|gidroksil va karboksil guruh tutgan kislotalar (sut, olma, limon kislotalari)
oksokislotalar|karbonil va karboksil guruh tutgan kislotalar (pirouzum kislota)
katexolaminlar|adrenalin, noradrenalin, dofamin
`,
qs: `
Spirtlarga xos funksional guruh?|–OH|–COOH|–CHO|–NH₂
Karbon kislotalarga xos funksional guruh?|–COOH|–OH|–CHO|–SH
Glitserin necha atomli spirt?|Uch atomli|Bir atomli|Ikki atomli|Olti atomli
Etilenglikol necha atomli spirt?|Ikki atomli|Bir atomli|Uch atomli|To'rt atomli
Sut kislotasi qaysi guruh birikmalariga kiradi?|Gidroksikislotalar|Oksokislotalar|Aminokislotalar|Aldegidlar
Pirouzum kislota qaysi guruhga kiradi?|Oksokislotalar|Gidroksikislotalar|Spirtlar|Aminlar
Limon kislotasi qaysi siklning metaboliti?|Krebs (uch karbon kislotalar) sikli|Kalvin sikli|Ornitin sikli|Kori sikli
Adrenalin qaysi guruh birikmalariga kiradi?|Katexolaminlar|Steroidlar|Terpenlar|Nukleotidlar
Xolin va kolamin qaysi guruh birikmalari?|Aminospirtlar|Gidroksikislotalar|Aldegidlar|Ketonlar
Aspirin (atsetilsalitsil kislota) qaysi kislota hosilasi?|Salitsil kislota|Limon kislota|Sut kislota|Olma kislota
Ishchi mushaklarda kislorod yetishmaganda to'planadigan kislota?|Sut kislotasi|Limon kislotasi|Olma kislotasi|Oksalat kislota
Qandli diabetda siydikda paydo bo'ladigan keton tana?|Aseton|Etanol|Glitserin|Mochevina
Etil spirtining formulasi?|C₂H₅OH|CH₃OH|CH₃COOH|C₆H₅OH
Metil spirti (metanol) bilan zaharlanishning xavfli oqibati?|Ko'rlik, o'lim|Faqat bosh og'rig'i|Tish kariyesi|Soch to'kilishi
Formalin nima?|Formaldegidning 40 % li suvli eritmasi|Etil spirti|Sirka kislota|Fiziologik eritma
`},

{ t: "Geteroxalqali birikmalar (metabolitlar va dorilar)",
terms: `
geteroxalqali (geterotsiklik) birikmalar|halqasida ugleroddan boshqa atom tutgan birikmalar
geteroatom|halqadagi ugleroddan boshqa atom (N, O, S)
pirrol|besh a'zoli azotli geterotsikl (gem, xlorofill asosi)
piridin|olti a'zoli azotli geterotsikl (vitamin PP)
pirimidin|ikki azotli olti a'zoli geterotsikl (sitozin, timin, urasil asosi)
purin|pirimidin va imidazol halqalaridan iborat (adenin, guanin asosi)
imidazol|ikki azotli besh a'zoli geterotsikl (gistidin, gistamin)
furan|kislorodli besh a'zoli geterotsikl
tiofen|oltingugurtli besh a'zoli geterotsikl
indol|triptofan va serotonin asosi
porfin|to'rtta pirrol halqasidan iborat makrotsikl
siydik kislotasi|purinlar almashinuvining oxirgi mahsuloti
alkaloidlar|o'simliklardagi azotli geterotsiklik asoslar (kofein, morfin)
`,
qs: `
Gem va xlorofill tarkibidagi asosiy geterotsiklik tuzilma?|Porfin (pirrol halqalari)|Piridin|Furan|Tiofen
Adenin va guanin qaysi halqa hosilalari?|Purin|Pirimidin|Piridin|Indol
Sitozin, timin va urasil qaysi halqa hosilalari?|Pirimidin|Purin|Pirrol|Imidazol
Purinlar almashinuvining oxirgi mahsuloti?|Siydik kislotasi|Mochevina|Ammiak|Kreatinin
Podagra (gut) kasalligida qonda nima ko'payadi?|Siydik kislotasi|Glyukoza|Xolesterin|Bilirubin
Vitamin PP (nikotin kislota) qaysi geterotsikl hosilasi?|Piridin|Purin|Furan|Pirimidin
Gistamin qaysi geterotsikl hosilasi?|Imidazol|Indol|Piridin|Tiofen
Serotonin qaysi aminokislotadan hosil bo'ladi?|Triptofan|Glitsin|Lizin|Alanin
Kofein qaysi guruh birikmalariga kiradi?|Purin alkaloidlari|Steroidlar|Uglevodlar|Lipidlar
Geteroatomga kirmaydigan element?|Uglerod|Azot|Kislorod|Oltingugurt
Vitamin B₁ (tiamin) tarkibida qaysi halqalar bor?|Pirimidin va tiazol|Purin va indol|Furan va piran|Faqat benzol
`},

{ t: "Uglevodlar (karbonsuvlar). Tuzilishi va funksiyalari",
terms: `
uglevodlar|polioksikarbonil birikmalar, organizmning asosiy energiya manbai
monosaxaridlar|gidrolizlanmaydigan oddiy uglevodlar
aldozalar|aldegid guruhli monosaxaridlar
ketozalar|keton guruhli monosaxaridlar
glyukoza|aldogeksoza C₆H₁₂O₆, qondagi asosiy shakar
fruktoza|ketogeksoza, meva shakari
galaktoza|sut shakari tarkibidagi aldogeksoza
riboza|nuklein kislotalar (RNK) tarkibidagi pentoza
disaxaridlar|ikki monosaxarid qoldig'idan iborat uglevodlar
saxaroza|glyukoza + fruktoza (lavlagi, qamish shakari)
laktoza|glyukoza + galaktoza (sut shakari)
maltoza|ikki glyukoza qoldig'idan iborat disaxarid
polisaxaridlar|ko'p monosaxarid qoldiqlaridan iborat uglevodlar
kraxmal|o'simliklardagi zaxira polisaxarid
glikogen|hayvon va odamdagi zaxira polisaxarid
sellyuloza|o'simlik hujayra devorining polisaxaridi
geteropolisaxaridlar|turli monosaxaridlardan tuzilgan polisaxaridlar (geparin, gialuron kislota)
glikozid bog'|monosaxaridlarni bog'lovchi bog'
`,
qs: `
Glyukozaning formulasi?|C₆H₁₂O₆|C₁₂H₂₂O₁₁|C₂H₅OH|(C₆H₁₀O₅)ₙ
Glyukoza monosaxaridlarning qaysi turiga kiradi?|Aldogeksoza|Ketogeksoza|Aldopentoza|Ketopentoza
Fruktoza qaysi turga kiradi?|Ketogeksoza|Aldogeksoza|Aldopentoza|Disaxarid
Saxaroza gidrolizlanganda nima hosil bo'ladi?|Glyukoza va fruktoza|Faqat glyukoza|Glyukoza va galaktoza|Glitserin va yog' kislotasi
Sut shakari?|Laktoza|Saxaroza|Maltoza|Fruktoza
Laktoza gidrolizlanganda nima hosil bo'ladi?|Glyukoza va galaktoza|Glyukoza va fruktoza|Ikki glyukoza|Riboza va glyukoza
Maltoza qanday monosaxaridlardan iborat?|Ikki molekula glyukozadan|Glyukoza va fruktozadan|Glyukoza va galaktozadan|Ikki fruktozadan
Odam jigari va mushaklarida zaxira holda saqlanadigan polisaxarid?|Glikogen|Kraxmal|Sellyuloza|Xitin
Kraxmal yod bilan qanday rang beradi?|Ko'k|Qizil|Sariq|Yashil
RNK tarkibidagi uglevod?|Riboza|Dezoksiriboza|Glyukoza|Fruktoza
Qon ivishiga qarshi geteropolisaxarid?|Geparin|Glikogen|Kraxmal|Sellyuloza
Qondagi glyukozaning normal miqdori (och qoringa)?|3,3–5,5 mmol/l|10–12 mmol/l|0,5–1 mmol/l|20 mmol/l
Odam ovqat hazm qilish tizimida qaysi polisaxarid parchalanmaydi?|Sellyuloza|Kraxmal|Glikogen|Maltoza
Glyukozani aniqlashda qo'llaniladigan sifat reaksiyasi?|Kumush ko'zgu (Tollens) yoki Feling reaksiyasi|Biuret reaksiyasi|Ksantoprotein reaksiyasi|Yod bilan ko'k rang
Monosaxaridlarni bog'lovchi bog'?|Glikozid bog'|Peptid bog'|Murakkab efir bog'i|Vodorod bog'
`},

{ t: "Aminokislotalar, peptidlar va oqsillar",
terms: `
aminokislota|amino va karboksil guruh tutgan birikma
α-aminokislotalar|aminoguruh α-uglerodda joylashgan aminokislotalar (oqsil tarkibida)
almashtirib bo'lmaydigan aminokislotalar|organizmda sintezlanmaydigan, ovqat bilan olinadigan aminokislotalar
peptid bog'|aminokislotalarni bog'lovchi –CO–NH– bog'
peptid|bir necha aminokislotadan iborat birikma
oqsil|ko'p aminokislotalardan iborat biopolimer
birlamchi tuzilma|aminokislotalar ketma-ketligi
ikkilamchi tuzilma|α-spiral yoki β-qatlam (vodorod bog'lar)
uchlamchi tuzilma|polipeptid zanjirning fazoviy joylashuvi
to'rtlamchi tuzilma|bir necha polipeptid subbirliklar birlashmasi (gemoglobin)
denaturatsiya|oqsilning tabiiy fazoviy tuzilishining buzilishi
izoelektrik nuqta|aminokislota zaryadi nolga teng bo'lgan pH
biuret reaksiyasi|peptid bog'larini aniqlovchi binafsha rangli reaksiya
ksantoprotein reaksiyasi|aromatik aminokislotalarni aniqlovchi sariq rangli reaksiya
`,
qs: `
Aminokislotalar tarkibida qaysi guruhlar bor?|Amino (–NH₂) va karboksil (–COOH)|Faqat gidroksil|Aldegid va keton|Faqat tiol
Aminokislotalar orasidagi bog'?|Peptid bog'|Glikozid bog'|Murakkab efir bog'i|Fosfodiefir bog'i
Oqsillar tarkibiga kiradigan standart aminokislotalar soni?|20|10|64|100
Almashtirib bo'lmaydigan aminokislotalar katta yoshlilarda nechta?|8 (gistidin bilan 9)|20|2|15
Oqsil birlamchi tuzilmasi nima?|Aminokislotalar ketma-ketligi|α-spiral|Fazoviy joylashuv|Subbirliklar birlashmasi
Oqsilning α-spiral tuzilmasini qaysi bog'lar ushlab turadi?|Vodorod bog'lar|Disulfid bog'lar faqat|Ion bog'lar|Peptid bog'lar
To'rtlamchi tuzilmaga ega oqsilga misol?|Gemoglobin|Insulin monomeri|Oksitotsin|Glutation
Oqsilning tabiiy tuzilishining buzilishi?|Denaturatsiya|Gidroliz|Renaturatsiya|Kondensatsiya
Peptid bog'larini aniqlovchi rangli reaksiya?|Biuret reaksiyasi|Ksantoprotein reaksiyasi|Kumush ko'zgu|Yod bilan
Aromatik aminokislotalar konsentrlangan nitrat kislota bilan qanday rang beradi?|Sariq (ksantoprotein)|Binafsha|Ko'k|Qizil
Aminokislota zaryadi nolga teng bo'lgan pH?|Izoelektrik nuqta|Neytrallanish nuqtasi|Ekvivalent nuqta|Qaynash nuqtasi
Disulfid ko'priklar hosil qiluvchi aminokislota?|Sistein|Glitsin|Alanin|Lizin
Eng oddiy aminokislota?|Glitsin|Triptofan|Tirozin|Lizin
Oqsil almashinuvining oxirgi mahsuloti (siydik bilan chiqadi)?|Mochevina|Glyukoza|Yog' kislotasi|Glitserin
Og'ir metallar tuzlari va yuqori harorat oqsilga qanday ta'sir qiladi?|Denaturatsiyaga uchratadi|Sintezini tezlashtiradi|O'zgartirmaydi|Eritadi
`},

{ t: "Nuklein kislotalar: tuzilishi va funksiyalari",
terms: `
nuklein kislotalar|irsiy axborotni saqlovchi va uzatuvchi biopolimerlar
nukleotid|azotli asos, pentoza va fosfat qoldig'idan iborat birlik
nukleozid|azotli asos va pentozadan iborat birikma
DNK|dezoksiribonuklein kislota
RNK|ribonuklein kislota
dezoksiriboza|DNK tarkibidagi pentoza
riboza|RNK tarkibidagi pentoza
adenin (A)|purin asos, timin yoki urasil bilan juftlashadi
guanin (G)|purin asos, sitozin bilan juftlashadi
sitozin (C)|pirimidin asos, guanin bilan juftlashadi
timin (T)|faqat DNK dagi pirimidin asos
urasil (U)|faqat RNK dagi pirimidin asos
fosfodiefir bog'|nukleotidlarni zanjirga bog'lovchi bog'
komplementarlik|A–T (A–U) va G–C asoslarining mos juftlashishi
ATF|adenozintrifosfat — energiya tashuvchi nukleotid
tsAMF|siklik AMF — ikkilamchi signal uzatuvchi
`,
qs: `
DNK ning qo'sh spiral modelini taklif etgan olimlar?|J. Uotson va F. Krik|G. Mendel va T. Morgan|M. Shleyden va T. Shvann|Ch. Darvin va A. Uolles
DNK tarkibidagi qand?|Dezoksiriboza|Riboza|Glyukoza|Fruktoza
RNK tarkibida timin o'rniga qaysi asos bo'ladi?|Urasil|Adenin|Guanin|Sitozin
DNK da adenin qaysi asos bilan juftlashadi?|Timin|Guanin|Sitozin|Urasil
Guanin qaysi asos bilan juftlashadi?|Sitozin|Adenin|Timin|Urasil
A–T juftligi orasida nechta vodorod bog' bor?|2|3|1|4
G–C juftligi orasida nechta vodorod bog' bor?|3|2|1|4
Nukleotidlarni zanjirga bog'lovchi bog'?|Fosfodiefir bog'|Peptid bog'|Glikozid bog' faqat|Disulfid bog'
Nukleozid nimadan iborat?|Azotli asos va pentozadan|Asos, pentoza va fosfatdan|Faqat fosfatdan|Aminokislota va qanddan
Agar DNK da A = 20 % bo'lsa, G necha foiz?|30 %|20 %|40 %|60 %
Hujayradagi asosiy energiya tashuvchi nukleotid?|ATF|tsAMF|NAD|GMF
Purin asoslari?|Adenin va guanin|Sitozin va timin|Timin va urasil|Sitozin va urasil
Pirimidin asoslari?|Sitozin, timin, urasil|Adenin, guanin|Faqat adenin|Faqat guanin
RNK turlariga kirmaydigan javob?|d-RNK|i-RNK|t-RNK|r-RNK
`},

{ t: "Lipidlar: tuzilishi va funksiyalari",
terms: `
lipidlar|suvda erimaydigan, organik erituvchilarda eriydigan moddalar
sovunlanadigan lipidlar|ishqoriy gidrolizda sovun hosil qiluvchi lipidlar
sovunlanmaydigan lipidlar|gidrolizlanmaydigan lipidlar (terpenlar, steroidlar)
triglitserid (triatsilglitserin)|glitserin va 3 ta yog' kislotasining murakkab efiri
yog' kislotalari|uzun zanjirli karbon kislotalar
to'yingan yog' kislotalari|qo'sh bog'siz kislotalar (palmitin, stearin)
to'yinmagan yog' kislotalari|qo'sh bog'li kislotalar (olein, linol, linolen)
almashtirib bo'lmaydigan yog' kislotalari|linol va linolen kislotalari (omega-6, omega-3)
fosfolipidlar|fosfat qoldig'i tutgan murakkab lipidlar (membrana asosi)
sfingolipidlar|sfingozin asosidagi lipidlar (nerv to'qimasida)
mumlar|yuqori yog' kislotalari va yuqori spirtlarning efirlari
steroidlar|siklopentanoperhidrofenantren asosidagi birikmalar
xolesterin|asosiy steroid spirt, membrana tarkibida
terpenlar|izopren birliklaridan tuzilgan lipidlar (A vitamini, karotin)
sovunlanish|yog'larning ishqoriy gidrolizi
`,
qs: `
Yog'lar (triglitseridlar) gidrolizlanganda nima hosil bo'ladi?|Glitserin va yog' kislotalari|Aminokislotalar|Glyukoza|Nukleotidlar
Yog'larning ishqoriy gidrolizi?|Sovunlanish|Esterifikatsiya|Gidrogenlash|Polimerlanish
Hujayra membranasining asosini tashkil etuvchi lipidlar?|Fosfolipidlar|Triglitseridlar|Mumlar|Terpenlar
To'yinmagan yog' kislotasiga misol?|Olein kislotasi|Palmitin kislotasi|Stearin kislotasi|Sirka kislotasi
To'yingan yog' kislotasiga misol?|Stearin kislotasi|Linol kislotasi|Linolen kislotasi|Araxidon kislotasi
Almashtirib bo'lmaydigan yog' kislotalari?|Linol va linolen kislotalari|Palmitin va stearin|Sirka va chumoli|Olein va palmitin
Xolesterin qaysi lipidlar guruhiga kiradi?|Steroidlar|Triglitseridlar|Fosfolipidlar|Mumlar
Xolesterindan sintezlanadigan moddalar?|Steroid gormonlar, o't kislotalari, vitamin D|Glikogen|Oqsillar|Nuklein kislotalar
Vitamin A va karotin qaysi lipidlar guruhiga kiradi?|Terpenlar (izoprenoidlar)|Steroidlar|Fosfolipidlar|Mumlar
O'simlik moylari nima sababli suyuq?|To'yinmagan yog' kislotalari ko'p|To'yingan kislotalar ko'p|Glitserin yo'q|Suv ko'p
Yog'da eriydigan vitaminlar?|A, D, E, K|B va C|Faqat C|B₁ va B₁₂
1 g yog'ning energetik qiymati?|~9 kkal|~4 kkal|~2 kkal|~15 kkal
Ateroskleroz rivojlanishida qaysi lipid ko'proq ahamiyatga ega?|Xolesterin (LDL)|Lesitin|Glitserin|Mum
`}
]);
