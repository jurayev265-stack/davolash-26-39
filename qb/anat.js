QB.add("anat", "Odam anatomiyasi", "Lotincha", [
{ t: "Anatomiyaga kirish. Tana o'qlari, tekisliklari va yo'nalishlar",
terms: `
anatomia|anatomiya
corpus humanum|odam tanasi
caput|bosh
collum|bo'yin
truncus|gavda
thorax|ko'krak
abdomen|qorin
pelvis|chanoq
dorsum|orqa
membrum superius|yuqori muchal (qo'l)
membrum inferius|pastki muchal (oyoq)
regio|soha
planum sagittale|sagittal tekislik
planum medianum|o'rta (median) tekislik
planum frontale|frontal tekislik
planum horizontale|gorizontal tekislik
axis verticalis|vertikal o'q
axis sagittalis|sagittal o'q
axis frontalis|frontal o'q
anterior|oldingi
posterior|orqadagi
superior|yuqoridagi
inferior|pastdagi
medialis|medial (o'rta chiziqqa yaqin)
lateralis|lateral (o'rta chiziqdan uzoq)
intermedius|oraliq
medius|o'rta
dexter|o'ng
sinister|chap
proximalis|proksimal (tanaga yaqin)
distalis|distal (tanadan uzoq)
cranialis|kranial (boshga yaqin)
caudalis|kaudal (dum tomonga yaqin)
ventralis|ventral (qorin tomondagi)
dorsalis|dorsal (orqa tomondagi)
superficialis|yuzaki
profundus|chuqur
internus|ichki
externus|tashqi
palmaris|kaftga oid
plantaris|oyoq kaftiga oid
major|katta
minor|kichik
longus|uzun
brevis|kalta
latus|keng
facies|yuza (sirt)
margo|qirra (chet)
apex|uch
basis|asos
transversus|ko'ndalang
obliquus|qiyshiq
rectus|to'g'ri
`,
qs: `
Tanani o'ng va chap yarmlarga ajratuvchi tekislik qaysi?|Sagittal (median) tekislik|Frontal tekislik|Gorizontal tekislik|Ko'ndalang tekislik
Tanani old va orqa qismlarga ajratuvchi tekislik qaysi?|Frontal tekislik|Sagittal tekislik|Gorizontal tekislik|Median tekislik
Tanani yuqori va pastki qismlarga ajratuvchi tekislik qaysi?|Gorizontal tekislik|Frontal tekislik|Sagittal tekislik|Median tekislik
"Proximalis" atamasi nimani bildiradi?|Muchalning tanaga yaqin qismini|Muchalning tanadan uzoq qismini|O'rta chiziqqa yaqinlikni|Yuzaki joylashuvni
"Distalis" atamasi nimani bildiradi?|Muchalning tanadan uzoq qismini|Muchalning tanaga yaqin qismini|Orqa tomonni|Ichki tomonni
"Medialis" atamasi nimani bildiradi?|O'rta chiziqqa yaqin joylashganni|O'rta chiziqdan uzoq joylashganni|Yuqorida joylashganni|Chuqur joylashganni
"Lateralis" atamasi nimani bildiradi?|O'rta chiziqdan uzoq (yon tomonda) joylashganni|O'rta chiziqqa yaqinni|Pastda joylashganni|Ichkarida joylashganni
Anatomik holatda odam qanday turadi?|Tik, qo'llar tana yonida, kaftlar oldinga qaragan|Tik, kaftlar orqaga qaragan|Chalqancha yotgan holatda|O'tirgan holatda
"Anatomiya" so'zi qaysi tildan olingan va nimani bildiradi?|Yunoncha — "kesish, yorish"|Lotincha — "tana"|Arabcha — "davolash"|Yunoncha — "hayot"
A'zolarning bir-biriga va tana sohalariga nisbatan joylashuvini o'rganuvchi anatomiya?|Topografik anatomiya|Sistematik anatomiya|Qiyosiy anatomiya|Yosh anatomiyasi
Organizmni a'zolar tizimlari bo'yicha o'rganuvchi anatomiya?|Sistematik (tavsifiy) anatomiya|Topografik anatomiya|Plastik anatomiya|Patologik anatomiya
Tirik odam tuzilishini rentgen nurlari yordamida o'rganuvchi soha?|Rentgenoanatomiya|Embriologiya|Gistologiya|Topografik anatomiya
"Tib qonunlari" asarida anatomiyaga oid keng ma'lumot bergan allomamiz?|Abu Ali ibn Sino|Muhammad al-Xorazmiy|Mirzo Ulug'bek|Ahmad al-Farg'oniy
"Inson tanasining tuzilishi haqida" (1543) asari bilan ilmiy anatomiyaga asos solgan olim?|Andreas Vezaliy|Galen|Uilyam Garvey|Gippokrat
Qon aylanishini kashf etgan olim?|Uilyam Garvey|Andreas Vezaliy|Leonardo da Vinchi|Gippokrat
Muzlatilgan murda kesmalari usuli bilan topografik anatomiyaga asos solgan olim?|N. I. Pirogov|I. P. Pavlov|I. M. Sechenov|Ch. Darvin
"Dexter" atamasining tarjimasi?|O'ng|Chap|Oldingi|Orqa
"Superficialis" va "profundus" atamalari tarjimasi?|Yuzaki va chuqur|Ichki va tashqi|Katta va kichik|Uzun va kalta
`},

{ t: "Suyaklar haqida umumiy ma'lumot (osteologiya)",
terms: `
os|suyak
ossa|suyaklar
osteologia|suyaklar haqidagi ta'limot
skeleton|skelet
os longum|uzun (naysimon) suyak
os breve|kalta suyak
os planum|yassi suyak
os irregulare|aralash (noto'g'ri shaklli) suyak
os pneumaticum|havoli suyak
os sesamoideum|sesamasimon suyak
diaphysis|diafiz (suyak tanasi)
epiphysis|epifiz (suyak uchi)
metaphysis|metafiz
apophysis|apofiz
cartilago epiphysialis|epifizar tog'ay
periosteum|suyak usti pardasi
endosteum|suyakning ichki pardasi
substantia compacta|zich modda
substantia spongiosa|g'ovak modda
cavitas medullaris|ilik bo'shlig'i
medulla ossium rubra|qizil ilik
medulla ossium flava|sariq ilik
foramen nutricium|oziqlantiruvchi teshik
osteonum|osteon
osteocytus|osteotsit
osteoblastus|osteoblast
osteoclastus|osteoklast
corpus|tana
processus|o'simta
tuberculum|do'mboqcha
tuber|do'mboq
tuberositas|g'adir-budurlik
spina|tikan (qirra)
crista|qirra (cho'qqi)
linea|chiziq
condylus|do'nglik
epicondylus|do'nglik usti
fossa|chuqurcha
fovea|kichik chuqurcha
sulcus|egat
incisura|o'yma
foramen|teshik
canalis|kanal
meatus|yo'l
facies articularis|bo'g'im yuzasi
angulus|burchak
sinus|bo'shliq (sinus)
hiatus|yoriq
fissura|tirqish
cornu|shox
ala|qanot
squama|tangacha
lamina|plastinka
`,
qs: `
Katta yoshli odam skeletida nechta suyak bor?|206 ga yaqin|150 ga yaqin|300 dan ortiq|100 ga yaqin
Suyakning uzunasiga o'sishini ta'minlovchi tuzilma?|Epifizar tog'ay|Suyak usti pardasi|Sariq ilik|Bo'g'im tog'ayi
Suyakning yo'g'onlashib o'sishini ta'minlovchi tuzilma?|Suyak usti pardasi (periost)|Epifizar tog'ay|Sariq ilik|G'ovak modda
Qon hosil qiluvchi ilik qaysi?|Qizil ilik|Sariq ilik|Zich modda|Suyak usti pardasi
Kattalarda uzun suyaklar diafizi ichida qanday ilik bo'ladi?|Sariq ilik|Qizil ilik|Ilik bo'lmaydi|Tog'ay to'qima
Suyakning tuzilish va funksional birligi?|Osteon|Neyron|Nefron|Sarkomer
Suyak to'qimasini yemiruvchi hujayralar?|Osteoklastlar|Osteoblastlar|Osteotsitlar|Xondrotsitlar
Suyak moddasini hosil qiluvchi yosh hujayralar?|Osteoblastlar|Osteoklastlar|Eritrotsitlar|Fibroblastlar
Havoli (pnevmatik) suyakka misol?|Yuqori jag' suyagi|Son suyagi|To'sh suyagi|Kurak suyagi
Yassi suyakka misol?|Tepa suyagi|Son suyagi|Kaft usti suyagi|Umurtqa
Kalta suyakka misol?|Kaft usti suyaklari|Yelka suyagi|Qovurg'a|Kurak suyagi
Uzun (naysimon) suyakka misol?|Son suyagi|Umurtqa|Oshiq suyagi|Tepa suyagi
Aralash (noto'g'ri shaklli) suyakka misol?|Umurtqa|Son suyagi|Tepa suyagi|Kaft suyagi
Odamdagi eng katta sesamasimon suyak?|Tizza qopqog'i (patella)|No'xatsimon suyak|Oshiq suyagi|Tovon suyagi
Suyakning anorganik moddalari asosan nimadan iborat?|Kalsiy fosfat tuzlari|Kollagen|Glikogen|Yog'lar
Suyakka elastiklik beruvchi organik modda?|Kollagen tolalar (ossein)|Kalsiy fosfat|Natriy xlorid|Gemoglobin
Bolalar suyaklarining kattalarnikidan farqi?|Elastikroq, organik moddasi ko'proq|Mo'rtroq, mineral moddasi ko'proq|Farqi yo'q|Qattiqroq va og'irroq
Suyak yuzasidagi teshik lotincha qanday ataladi?|foramen|fossa|sulcus|incisura
Suyak yuzasidagi egat lotincha qanday ataladi?|sulcus|crista|linea|canalis
Skeletning vazifasiga kirmaydigan javobni toping.|Ovqatni hazm qilish|Tayanch|Himoya|Qon yaratish
Suyak usti pardasining vazifasi?|Suyakni oziqlantirish, yo'g'onlikka o'stirish va singanda tiklash|Qon hosil qilish|Bo'g'imni moylash|Mushakni qisqartirish
Uzun suyakning uchlari qanday ataladi?|Epifizlar|Diafizlar|Apofizlar|Metafizlar
`},

{ t: "Umurtqa pog'onasi",
terms: `
columna vertebralis|umurtqa pog'onasi
vertebra|umurtqa
vertebrae cervicales|bo'yin umurtqalari
vertebrae thoracicae|ko'krak umurtqalari
vertebrae lumbales|bel umurtqalari
vertebrae sacrales|dumg'aza umurtqalari
vertebrae coccygeae|dum umurtqalari
corpus vertebrae|umurtqa tanasi
arcus vertebrae|umurtqa ravog'i
pediculus arcus vertebrae|umurtqa ravog'ining oyoqchasi
lamina arcus vertebrae|umurtqa ravog'ining plastinkasi
foramen vertebrale|umurtqa teshigi
canalis vertebralis|umurtqa kanali
processus spinosus|qirrali o'simta
processus transversus|ko'ndalang o'simta
processus articularis superior|yuqori bo'g'im o'simtasi
processus articularis inferior|pastki bo'g'im o'simtasi
incisura vertebralis superior|umurtqaning yuqori o'ymasi
incisura vertebralis inferior|umurtqaning pastki o'ymasi
foramen intervertebrale|umurtqalararo teshik
foramen transversarium|ko'ndalang o'simta teshigi
tuberculum anterius|oldingi do'mboqcha
tuberculum posterius|orqa do'mboqcha
tuberculum caroticum|uyqu arteriyasi do'mboqchasi
atlas|atlant (I bo'yin umurtqasi)
axis|aksis (II bo'yin umurtqasi)
dens axis|aksis tishi
arcus anterior atlantis|atlantning oldingi ravog'i
arcus posterior atlantis|atlantning orqa ravog'i
massa lateralis atlantis|atlantning yon massasi
fovea dentis|tish chuqurchasi
vertebra prominens|turtib chiqqan umurtqa (VII bo'yin)
fovea costalis superior|yuqori qovurg'a chuqurchasi
fovea costalis inferior|pastki qovurg'a chuqurchasi
fovea costalis processus transversi|ko'ndalang o'simtaning qovurg'a chuqurchasi
processus mamillaris|so'rg'ichsimon o'simta (bel umurtqasi)
processus accessorius|qo'shimcha o'simta
processus costalis|qovurg'a o'simtasi
os sacrum|dumg'aza suyagi
basis ossis sacri|dumg'aza asosi
apex ossis sacri|dumg'aza uchi
promontorium|turtiq (promontorium)
foramina sacralia anteriora|dumg'azaning oldingi teshiklari
foramina sacralia posteriora|dumg'azaning orqa teshiklari
canalis sacralis|dumg'aza kanali
hiatus sacralis|dumg'aza yorig'i
crista sacralis mediana|o'rta dumg'aza qirrasi
cornua sacralia|dumg'aza shoxlari
facies auricularis|quloqsimon yuza
os coccygis|dum suyagi
lordosis|lordoz (oldinga bo'rtgan egrilik)
kyphosis|kifoz (orqaga bo'rtgan egrilik)
scoliosis|skolioz (yon tomonga qiyshayish)
discus intervertebralis|umurtqalararo disk
nucleus pulposus|ilviragsimon yadro
anulus fibrosus|fibroz halqa
`,
qs: `
Bo'yin umurtqalari soni?|7|12|5|4
Ko'krak umurtqalari soni?|12|7|5|10
Bel umurtqalari soni?|5|7|12|3
Dumg'aza suyagi nechta umurtqaning qo'shilishidan hosil bo'ladi?|5|4|3|7
Dum suyagi odatda nechta umurtqadan iborat?|3–5|7|1|10
Ko'ndalang o'simtasida teshik bo'lgan umurtqalar qaysi?|Bo'yin umurtqalari|Ko'krak umurtqalari|Bel umurtqalari|Dumg'aza umurtqalari
Tanasi bo'lmagan umurtqa qaysi?|Atlant (I bo'yin)|Aksis (II bo'yin)|VII bo'yin umurtqasi|I ko'krak umurtqasi
Tishsimon o'simtasi bor umurtqa?|Aksis (II bo'yin)|Atlant (I bo'yin)|VII bo'yin umurtqasi|V bel umurtqasi
"Turtib chiqqan umurtqa" (vertebra prominens) qaysi?|VII bo'yin umurtqasi|I ko'krak umurtqasi|I bo'yin umurtqasi|V bel umurtqasi
Tanasida qovurg'a chuqurchalari bo'lgan umurtqalar?|Ko'krak umurtqalari|Bo'yin umurtqalari|Bel umurtqalari|Dum umurtqalari
Tanasi eng katta (massiv) umurtqalar?|Bel umurtqalari|Bo'yin umurtqalari|Ko'krak umurtqalari|Dum umurtqalari
Uyqu arteriyasi do'mboqchasi qaysi umurtqada joylashgan?|VI bo'yin umurtqasida|I bo'yin umurtqasida|XII ko'krak umurtqasida|I bel umurtqasida
Umurtqa pog'onasining fiziologik egriliklari?|Bo'yin va bel lordozi, ko'krak va dumg'aza kifozi|Faqat skolioz|Bo'yin va bel kifozi|Egriliklar bo'lmaydi
Umurtqa pog'onasining yon tomonga patologik qiyshayishi?|Skolioz|Lordoz|Kifoz|Osteoporoz
Umurtqalararo teshikdan nima o'tadi?|Orqa miya nervlari|Orqa miya|Umurtqa arteriyasi|Aorta
Umurtqa kanalida nima joylashgan?|Orqa miya|Qizilo'ngach|Aorta|Traxeya
Umurtqa arteriyasi qaysi teshiklardan o'tadi?|Bo'yin umurtqalarining ko'ndalang o'simta teshiklaridan|Umurtqalararo teshiklardan|Dumg'aza teshiklaridan|Umurtqa teshiklaridan
Umurtqalararo disk markazidagi yumshoq qism?|Ilviragsimon yadro|Fibroz halqa|Gialin tog'ay|Sariq boylam
Ko'krak umurtqalarining qirrali o'simtalari qanday joylashgan?|Pastga qiya, cherepitsasimon|Gorizontal|Yuqoriga qaragan|Uchi ikkiga ayrilgan
II–VI bo'yin umurtqalari qirrali o'simtasining o'ziga xosligi?|Uchi ikkiga ayrilgan|Juda uzun va gorizontal|Teshigi bor|Umuman bo'lmaydi
Atlant bosh suyagining qaysi qismi bilan bo'g'im hosil qiladi?|Ensa do'ngliklari bilan|Chakka suyagi bilan|Pastki jag' bilan|Ponasimon suyak bilan
Dumg'azaning turtib chiqqan oldingi qirrasi qanday ataladi?|Promontorium|Dumg'aza shoxi|Dumg'aza yorig'i|Quloqsimon yuza
Dumg'azaning chanoq suyagi bilan bo'g'im hosil qiluvchi yuzasi?|Quloqsimon yuza|Promontorium|Dumg'aza yorig'i|O'rta dumg'aza qirrasi
Umurtqa pog'onasi jami nechta umurtqadan iborat?|33–34|26|24|40
`},

{ t: "Ko'krak qafasi suyaklari",
terms: `
compages thoracis|ko'krak qafasi
cavitas thoracis|ko'krak bo'shlig'i
sternum|to'sh suyagi
manubrium sterni|to'sh dastasi
corpus sterni|to'sh tanasi
processus xiphoideus|xanjarsimon o'simta
incisura jugularis|bo'yinturuq o'ymasi
incisura clavicularis|o'mrov o'ymasi
incisurae costales|qovurg'a o'ymalari
angulus sterni|to'sh burchagi
costae|qovurg'alar
costa|qovurg'a
costae verae|chin qovurg'alar
costae spuriae|soxta qovurg'alar
costae fluctuantes|tebranuvchi (erkin) qovurg'alar
os costale|qovurg'a suyagi
cartilago costalis|qovurg'a tog'ayi
caput costae|qovurg'a boshchasi
crista capitis costae|qovurg'a boshchasining qirrasi
collum costae|qovurg'a bo'yni
tuberculum costae|qovurg'a do'mboqchasi
corpus costae|qovurg'a tanasi
angulus costae|qovurg'a burchagi
sulcus costae|qovurg'a egati
facies articularis capitis costae|qovurg'a boshchasining bo'g'im yuzasi
tuberculum musculi scaleni anterioris|oldingi narvonsimon mushak do'mboqchasi
sulcus arteriae subclaviae|o'mrov osti arteriyasi egati
sulcus venae subclaviae|o'mrov osti venasi egati
tuberositas musculi serrati anterioris|oldingi tishli mushak g'adir-budurligi
apertura thoracis superior|ko'krak qafasining yuqori teshigi
apertura thoracis inferior|ko'krak qafasining pastki teshigi
arcus costalis|qovurg'a ravog'i
angulus infrasternalis|to'sh osti burchagi
spatium intercostale|qovurg'alararo oraliq
sulcus pulmonalis|o'pka egati
articulationes costovertebrales|qovurg'a-umurtqa bo'g'imlari
articulatio capitis costae|qovurg'a boshchasi bo'g'imi
articulatio costotransversaria|qovurg'a-ko'ndalang o'simta bo'g'imi
articulationes sternocostales|to'sh-qovurg'a bo'g'imlari
linea mediana anterior|oldingi o'rta chiziq
linea sternalis|to'sh chizig'i
linea medioclavicularis|o'rta o'mrov chizig'i
linea axillaris anterior|oldingi qo'ltiq chizig'i
linea axillaris media|o'rta qo'ltiq chizig'i
linea axillaris posterior|orqa qo'ltiq chizig'i
linea scapularis|kurak chizig'i
linea paravertebralis|umurtqa yoni chizig'i
linea mediana posterior|orqa o'rta chiziq
`,
qs: `
Odamda necha juft qovurg'a bor?|12|10|7|14
Chin qovurg'alar qaysilar?|I–VII juftlar|VIII–X juftlar|XI–XII juftlar|I–X juftlar
Soxta qovurg'alar qaysilar?|VIII–XII juftlar|I–VII juftlar|Faqat I–II juftlar|II–V juftlar
Erkin (tebranuvchi) qovurg'alar qaysilar?|XI va XII juftlar|I va II juftlar|VIII va IX juftlar|VI va VII juftlar
To'sh suyagi qanday qismlardan iborat?|Dasta, tana va xanjarsimon o'simta|Boshcha, bo'yin va tana|Qanot, tana va shox|Asos, uch va tana
To'sh burchagi sohasiga qaysi qovurg'a tog'ayi birikadi?|II qovurg'a|I qovurg'a|IV qovurg'a|VII qovurg'a
Qovurg'a egatida nima joylashadi?|Qovurg'alararo qon tomirlar va nerv|Limfa tugunlari|Mushak paylari|Hech narsa
O'mrov osti arteriyasi egati qaysi qovurg'ada joylashgan?|I qovurg'ada|II qovurg'ada|VII qovurg'ada|XII qovurg'ada
Qovurg'a ravog'ini qaysi qovurg'alar tog'aylari hosil qiladi?|VII–X qovurg'alar|I–III qovurg'alar|XI–XII qovurg'alar|II–V qovurg'alar
Ko'krak qafasini hosil qiluvchi suyaklar?|12 ta ko'krak umurtqasi, 12 juft qovurg'a va to'sh|Faqat qovurg'alar|Kurak va o'mrov|Umurtqa pog'onasi va chanoq
Ko'krak qafasining yuqori teshigini qaysi tuzilmalar cheklaydi?|I ko'krak umurtqasi, I qovurg'alar, to'sh dastasi|XII umurtqa va qovurg'a ravoqlari|O'mrov va kurak|II qovurg'alar
Ko'krak qafasining pastki teshigini nima berkitib turadi?|Diafragma|Qorin pressi|Qovurg'alararo mushaklar|Plevra
Qaysi qovurg'alar boshchasida qirra bo'lmaydi (bitta bo'g'im yuzasi bor)?|I, XI va XII qovurg'alar|II–X qovurg'alar|Faqat VII qovurg'a|Barchasida qirra bor
To'sh dastasining yuqori qirrasidagi o'yma?|Bo'yinturuq o'ymasi|O'mrov o'ymasi|Qovurg'a o'ymasi|Kurak o'ymasi
O'mrov suyagi to'sh suyagining qaysi qismi bilan birikadi?|To'sh dastasi bilan|To'sh tanasi bilan|Xanjarsimon o'simta bilan|To'sh burchagi bilan
Qovurg'a qanday qismlardan iborat?|Suyak qismi va qovurg'a tog'ayi|Faqat suyak qismi|Faqat tog'aydan|Suyak va pay qismidan
Ko'krak qafasining shakli tor va uzun bo'lgan tana tuzilishi tipi?|Astenik|Giperstenik|Normostenik|Atletik
`},

{ t: "Yelka kamari va qo'l suyaklari",
terms: `
cingulum membri superioris|yuqori muchal kamari
clavicula|o'mrov suyagi
extremitas sternalis claviculae|o'mrovning to'sh uchi
extremitas acromialis claviculae|o'mrovning akromial uchi
tuberculum conoideum|konussimon do'mboqcha
linea trapezoidea|trapetsiyasimon chiziq
scapula|kurak suyagi
spina scapulae|kurak qirrasi
acromion|akromion (yelka o'simtasi)
processus coracoideus|tumshuqsimon o'simta
cavitas glenoidalis|kurakning bo'g'im chuqurchasi
collum scapulae|kurak bo'yni
fossa supraspinata|qirra usti chuqurchasi
fossa infraspinata|qirra osti chuqurchasi
fossa subscapularis|kurak osti chuqurchasi
margo medialis scapulae|kurakning medial qirrasi
margo lateralis scapulae|kurakning lateral qirrasi
margo superior scapulae|kurakning yuqori qirrasi
angulus inferior scapulae|kurakning pastki burchagi
incisura scapulae|kurak o'ymasi
tuberculum supraglenoidale|bo'g'im usti do'mboqchasi
tuberculum infraglenoidale|bo'g'im osti do'mboqchasi
humerus|yelka suyagi
caput humeri|yelka suyagi boshchasi
collum anatomicum|anatomik bo'yin
collum chirurgicum|xirurgik bo'yin
tuberculum majus|katta do'mboqcha
tuberculum minus|kichik do'mboqcha
sulcus intertubercularis|do'mboqchalararo egat
tuberositas deltoidea|deltasimon g'adir-budurlik
sulcus nervi radialis|bilak nervi egati
trochlea humeri|yelka suyagi g'altagi
capitulum humeri|yelka suyagining boshchachasi
epicondylus medialis|medial do'nglik usti
epicondylus lateralis|lateral do'nglik usti
sulcus nervi ulnaris|tirsak nervi egati
fossa olecrani|tirsak o'simtasi chuqurchasi
fossa coronoidea|toj o'simta chuqurchasi
radius|bilak suyagi
caput radii|bilak suyagi boshchasi
tuberositas radii|bilak suyagi g'adir-budurligi
processus styloideus radii|bilak suyagining bigizsimon o'simtasi
incisura ulnaris radii|bilak suyagidagi tirsak o'ymasi
ulna|tirsak suyagi
olecranon|tirsak o'simtasi
processus coronoideus ulnae|tirsak suyagining toj o'simtasi
incisura trochlearis|g'altak o'ymasi
incisura radialis ulnae|tirsak suyagidagi bilak o'ymasi
caput ulnae|tirsak suyagi boshchasi
processus styloideus ulnae|tirsak suyagining bigizsimon o'simtasi
membrana interossea antebrachii|bilak suyaklararo pardasi
ossa carpi|kaft usti suyaklari
os scaphoideum|qayiqsimon suyak
os lunatum|yarim oysimon suyak
os triquetrum|uch qirrali suyak
os pisiforme|no'xatsimon suyak
os trapezium|katta ko'p burchakli suyak
os trapezoideum|kichik ko'p burchakli suyak
os capitatum|boshchali suyak
os hamatum|ilmoqli suyak
ossa metacarpi|kaft suyaklari
phalanges digitorum manus|qo'l barmoq falangalari
phalanx proximalis|proksimal falanga
phalanx media|o'rta falanga
phalanx distalis|distal falanga
pollex|qo'l bosh barmog'i
`,
qs: `
Yelka kamarini qaysi suyaklar hosil qiladi?|O'mrov va kurak|Yelka va bilak|Kurak va to'sh|O'mrov va qovurg'a
Kurak qirrasining lateral davomi qanday ataladi?|Akromion|Tumshuqsimon o'simta|Bo'g'im chuqurchasi|Pastki burchak
Yelka suyagining sinishi ko'p uchraydigan joyi?|Xirurgik bo'yin|Anatomik bo'yin|Katta do'mboqcha|G'altak
Bilak nervi egati qaysi suyakda?|Yelka suyagida|Bilak suyagida|Tirsak suyagida|Kurakda
Yelka suyagining tirsak suyagi bilan bo'g'im hosil qiluvchi qismi?|G'altak (trochlea humeri)|Boshchacha (capitulum humeri)|Medial do'nglik usti|Katta do'mboqcha
Yelka suyagining bilak suyagi boshchasi bilan bo'g'im hosil qiluvchi qismi?|Boshchacha (capitulum humeri)|G'altak|Toj chuqurchasi|Tirsak o'simtasi chuqurchasi
Kaft usti suyaklari soni?|8|5|7|14
Bir qo'l barmoqlarida jami nechta falanga bor?|14|15|10|12
Bosh barmoqda nechta falanga bor?|2|3|1|4
Kaft usti suyaklarining proksimal qatori?|Qayiqsimon, yarim oysimon, uch qirrali, no'xatsimon|Katta va kichik ko'p burchakli, boshchali, ilmoqli|Qayiqsimon, boshchali, ilmoqli, katta ko'p burchakli|Faqat no'xatsimon va ilmoqli
Kaft usti suyaklari ichida eng kattasi?|Boshchali suyak|No'xatsimon suyak|Yarim oysimon suyak|Ilmoqli suyak
Kaft usti suyaklaridan qaysi biri sesamasimon suyak hisoblanadi?|No'xatsimon suyak|Qayiqsimon suyak|Ilmoqli suyak|Boshchali suyak
Tirsak o'simtasi (olecranon) qaysi suyakda?|Tirsak suyagida|Bilak suyagida|Yelka suyagida|Kurakda
Bilak suyagi bilakning qaysi tomonida joylashgan?|Lateral (bosh barmoq) tomonida|Medial (jimjiloq) tomonida|Orqa tomonida|O'rtada
Tirsak nervi qaysi tuzilmaning orqasidan o'tadi?|Yelka suyagining medial do'nglik usti|Lateral do'nglik usti|Katta do'mboqcha|Akromion
O'mrov suyagi to'sh suyagi bilan qaysi uchi orqali birikadi?|To'sh uchi|Akromial uchi|Konussimon do'mboqcha|Trapetsiyasimon chiziq
Yelkaning ikki boshli mushagining uzun boshi qayerdan boshlanadi?|Kurakning bo'g'im usti do'mboqchasidan|Bo'g'im osti do'mboqchasidan|Tumshuqsimon o'simtadan|Akromiondan
Kaft suyaklari soni?|5|8|14|4
Yelka suyagi boshchasi kurakning qaysi qismi bilan bo'g'im hosil qiladi?|Bo'g'im chuqurchasi (cavitas glenoidalis)|Akromion|Tumshuqsimon o'simta|Kurak qirrasi
Kurakning pastki burchagi qaysi qovurg'a sathida joylashadi?|VII qovurg'a|II qovurg'a|IV qovurg'a|XII qovurg'a
Deltasimon g'adir-budurlik qaysi suyakda?|Yelka suyagida|Kurakda|O'mrov suyagida|Bilak suyagida
`},

{ t: "Chanoq kamari va oyoq suyaklari",
terms: `
cingulum membri inferioris|pastki muchal kamari
os coxae|chanoq suyagi
os ilium|yonbosh suyagi
os ischii|quymich suyagi
os pubis|qov suyagi
acetabulum|sirka (quymich kosasi)
fossa acetabuli|sirka chuqurchasi
incisura acetabuli|sirka o'ymasi
foramen obturatum|yopqich teshik
ala ossis ilii|yonbosh suyagi qanoti
crista iliaca|yonbosh qirrasi
spina iliaca anterior superior|oldingi yuqori yonbosh tikani
spina iliaca anterior inferior|oldingi pastki yonbosh tikani
spina iliaca posterior superior|orqa yuqori yonbosh tikani
fossa iliaca|yonbosh chuqurchasi
linea arcuata|ravoqsimon chiziq
tuber ischiadicum|quymich do'mbog'i
spina ischiadica|quymich tikani
incisura ischiadica major|katta quymich o'ymasi
incisura ischiadica minor|kichik quymich o'ymasi
tuberculum pubicum|qov do'mboqchasi
pecten ossis pubis|qov suyagi taroqchasi
symphysis pubica|qov simfizi
pelvis major|katta chanoq
pelvis minor|kichik chanoq
linea terminalis|chegara chiziq
apertura pelvis superior|kichik chanoqning yuqori teshigi
apertura pelvis inferior|kichik chanoqning pastki teshigi
arcus pubicus|qov ravog'i
angulus subpubicus|qov osti burchagi
femur|son suyagi
caput femoris|son suyagi boshchasi
fovea capitis femoris|son boshchasi chuqurchasi
collum femoris|son suyagi bo'yni
trochanter major|katta ko'st
trochanter minor|kichik ko'st
linea intertrochanterica|ko'stlararo chiziq
crista intertrochanterica|ko'stlararo qirra
linea aspera|g'adir-budur chiziq
tuberositas glutea|dumba g'adir-budurligi
condylus medialis femoris|son suyagining medial do'ngligi
condylus lateralis femoris|son suyagining lateral do'ngligi
fossa intercondylaris|do'ngliklararo chuqurcha
facies patellaris|tizza qopqog'i yuzasi
patella|tizza qopqog'i
tibia|katta boldir suyagi
tuberositas tibiae|katta boldir suyagi g'adir-budurligi
eminentia intercondylaris|do'ngliklararo tepalik
malleolus medialis|medial to'piq
fibula|kichik boldir suyagi
caput fibulae|kichik boldir suyagi boshchasi
malleolus lateralis|lateral to'piq
membrana interossea cruris|boldir suyaklararo pardasi
ossa tarsi|oyoq kaft oldi (tarsus) suyaklari
talus|oshiq suyagi
calcaneus|tovon suyagi
tuber calcanei|tovon do'mbog'i
sustentaculum tali|oshiq tayanchi
os naviculare|qayiqsimon suyak (oyoq)
os cuboideum|kubsimon suyak
os cuneiforme mediale|medial ponasimon suyak
os cuneiforme intermedium|oraliq ponasimon suyak
os cuneiforme laterale|lateral ponasimon suyak
ossa metatarsi|oyoq kaft suyaklari
phalanges digitorum pedis|oyoq barmoq falangalari
hallux|oyoq bosh barmog'i
`,
qs: `
Chanoq suyagi qaysi suyaklarning qo'shilishidan hosil bo'ladi?|Yonbosh, quymich va qov suyaklari|Dumg'aza va dum suyaklari|Son va qov suyaklari|Yonbosh suyagi va dumg'aza
Chanoq suyagining uch qismi qayerda tutashadi?|Sirka (acetabulum) sohasida|Yopqich teshikda|Qov simfizida|Yonbosh qirrasida
Odam tanasidagi eng uzun va eng mustahkam suyak?|Son suyagi|Katta boldir suyagi|Yelka suyagi|Kichik boldir suyagi
Son suyagi boshchasi qaysi tuzilma bilan bo'g'im hosil qiladi?|Sirka (acetabulum)|Yopqich teshik|Quymich do'mbog'i|Dumg'aza
Odam o'tirganda tayanadigan chanoq qismi?|Quymich do'mbog'i|Yonbosh qirrasi|Qov do'mboqchasi|Sirka
Medial to'piq qaysi suyakning qismi?|Katta boldir suyagi|Kichik boldir suyagi|Son suyagi|Oshiq suyagi
Lateral to'piq qaysi suyakning qismi?|Kichik boldir suyagi|Katta boldir suyagi|Tovon suyagi|Son suyagi
Oyoqdagi eng katta tarsus suyagi?|Tovon suyagi|Oshiq suyagi|Kubsimon suyak|Qayiqsimon suyak
Oyoq kaft oldi (tarsus) suyaklari soni?|7|8|5|14
Boldir suyaklari bilan bo'g'im hosil qiluvchi tarsus suyagi?|Oshiq suyagi|Tovon suyagi|Kubsimon suyak|Qayiqsimon suyak
Tizza qopqog'i qaysi mushak payi ichida joylashgan?|Sonning to'rt boshli mushagi payi|Sonning ikki boshli mushagi payi|Boldirning uch boshli mushagi payi|Tikuvchi mushak payi
Katta boldir suyagi g'adir-budurligiga qaysi boylam birikadi?|Tizza qopqog'i boylami|Kesishgan boylamlar|Yon boylamlar|Tovon payi
Tovon (Axill) payi qayerga birikadi?|Tovon do'mbog'iga|Oshiq suyagiga|Medial to'piqqa|Kichik boldir boshchasiga
Katta chanoqni kichik chanoqdan ajratuvchi chiziq?|Chegara chiziq (linea terminalis)|G'adir-budur chiziq|Ko'stlararo chiziq|Trapetsiyasimon chiziq
Ayollar chanog'ining erkaklarnikidan farqi?|Keng va past, qov osti burchagi kattaroq (90–100°)|Tor va baland, burchagi o'tkir|Farqi yo'q|Faqat og'irroq
Yopqich teshikni qaysi suyaklar hosil qiladi?|Quymich va qov suyaklari|Yonbosh va qov suyaklari|Faqat yonbosh suyagi|Dumg'aza va dum suyagi
Son suyagining katta ko'sti qayerda joylashgan?|Proksimal uchida, lateral tomonda|Distal uchida|Diafizining o'rtasida|Proksimal uchida, medial tomonda
Son suyagining orqa yuzasidagi mushaklar birikadigan chiziq?|G'adir-budur chiziq (linea aspera)|Ko'stlararo chiziq|Chegara chiziq|Ravoqsimon chiziq
Kichik boldir suyagi boldirning qaysi tomonida joylashgan?|Lateral tomonida|Medial tomonida|Oldingi tomonida|O'rtasida
Kichik boldir suyagi tizza bo'g'imi hosil bo'lishida qatnashadimi?|Yo'q, qatnashmaydi|Ha, asosiy suyak|Faqat bolalarda|Ha, menisk orqali
Oyoqdagi tarsus suyaklari qatoriga kirmaydigan suyak?|No'xatsimon suyak|Kubsimon suyak|Qayiqsimon suyak|Oshiq suyagi
Oyoq panjasi gumbazlarining ahamiyati?|Prujina (amortizatsiya) vazifasi, tayanchni ta'minlash|Qon hosil qilish|Issiqlik saqlash|Harakatni cheklash
`},

{ t: "Bosh suyagining miya qismi",
terms: `
cranium|bosh suyagi (kalla)
neurocranium|bosh suyagining miya qismi
calvaria|kalla qopqog'i
basis cranii|kalla asosi
os frontale|peshona suyagi
squama frontalis|peshona tangachasi
tuber frontale|peshona do'mbog'i
arcus superciliaris|qosh ravog'i
glabella|qoshlar orasidagi soha (glabella)
margo supraorbitalis|ko'z kosasi usti qirrasi
foramen supraorbitale|ko'z kosasi usti teshigi
pars orbitalis ossis frontalis|peshona suyagining ko'z kosasi qismi
sinus frontalis|peshona bo'shlig'i
os parietale|tepa suyagi
tuber parietale|tepa do'mbog'i
os occipitale|ensa suyagi
foramen magnum|katta (ensa) teshik
squama occipitalis|ensa tangachasi
protuberantia occipitalis externa|tashqi ensa do'mbog'i
pars basilaris ossis occipitalis|ensa suyagining asosiy qismi
condylus occipitalis|ensa do'ngligi
canalis hypoglossi|til osti nervi kanali
clivus|nishablik (clivus)
os sphenoidale|ponasimon (asosiy) suyak
corpus ossis sphenoidalis|ponasimon suyak tanasi
sella turcica|turk egari
fossa hypophysialis|gipofiz chuqurchasi
dorsum sellae|egar suyanchig'i
ala major|katta qanot
ala minor|kichik qanot
processus pterygoideus|qanotsimon o'simta
canalis opticus|ko'ruv kanali
fissura orbitalis superior|ko'z kosasining yuqori yorig'i
foramen rotundum|yumaloq teshik
foramen ovale|oval teshik
foramen spinosum|tikanli teshik
sinus sphenoidalis|ponasimon suyak bo'shlig'i
os temporale|chakka suyagi
pars squamosa|tangachali qism
pars petrosa|toshsimon qism (piramida)
pars tympanica|nog'ora qismi
processus mastoideus|so'rg'ichsimon o'simta
processus styloideus|bigizsimon o'simta
processus zygomaticus|yonoq o'simtasi
meatus acusticus externus|tashqi eshituv yo'li
meatus acusticus internus|ichki eshituv yo'li
fossa mandibularis|pastki jag' chuqurchasi
canalis caroticus|uyqu arteriyasi kanali
canalis facialis|yuz nervi kanali
foramen stylomastoideum|bigiz-so'rg'ich teshigi
os ethmoidale|g'alvirsimon suyak
lamina cribrosa|g'alvirsimon plastinka
crista galli|xo'roz toji
lamina perpendicularis|perpendikulyar plastinka
labyrinthus ethmoidalis|g'alvirsimon labirint
concha nasalis superior|yuqori burun chig'anog'i
concha nasalis media|o'rta burun chig'anog'i
`,
qs: `
Bosh suyagining miya qismidagi juft suyaklar?|Tepa va chakka suyaklari|Peshona va ensa suyaklari|Ponasimon va g'alvirsimon suyaklar|Yuqori jag' va yonoq suyaklari
Bosh suyagining miya qismidagi toq suyaklar?|Peshona, ensa, ponasimon va g'alvirsimon|Tepa va chakka|Yuqori jag' va burun|Pastki jag' va til osti
Gipofiz qayerda joylashgan?|Turk egarining gipofiz chuqurchasida|Peshona bo'shlig'ida|Katta ensa teshigida|Ichki eshituv yo'lida
Katta (ensa) teshik qaysi suyakda?|Ensa suyagida|Ponasimon suyakda|Chakka suyagida|Tepa suyagida
Hid bilish nervlari qayerdan o'tadi?|G'alvirsimon plastinka teshiklaridan|Ko'ruv kanalidan|Oval teshikdan|Yumaloq teshikdan
Ko'ruv nervi qaysi tuzilmadan o'tadi?|Ko'ruv kanalidan|Ko'z kosasining yuqori yorig'idan|Yumaloq teshikdan|G'alvirsimon plastinkadan
Eshituv va muvozanat a'zosi qayerda joylashgan?|Chakka suyagining toshsimon qismida (piramidada)|Ensa tangachasida|Ponasimon suyak tanasida|Tepa suyagida
So'rg'ichsimon o'simta qaysi suyakda?|Chakka suyagida|Ensa suyagida|Ponasimon suyakda|Pastki jag'da
Pastki jag' bilan bo'g'im hosil qiluvchi tuzilma?|Chakka suyagining pastki jag' chuqurchasi|Ensa do'ngligi|Yonoq suyagi|Qanotsimon o'simta
Bosh suyagi umurtqa pog'onasi bilan qaysi tuzilma orqali birikadi?|Ensa do'ngliklari|So'rg'ichsimon o'simta|Bigizsimon o'simta|Turk egari
Havoli bo'shlig'i bo'lmagan suyak?|Tepa suyagi|Peshona suyagi|Ponasimon suyak|Yuqori jag'
Xo'roz toji qaysi suyakning qismi?|G'alvirsimon suyak|Ponasimon suyak|Peshona suyagi|Ensa suyagi
Oval teshik qaysi suyakda?|Ponasimon suyakning katta qanotida|Chakka suyagida|Ensa suyagida|G'alvirsimon suyakda
Uyqu arteriyasi kanali qaysi suyakda?|Chakka suyagining piramidasida|Ponasimon suyakda|Ensa suyagida|Peshona suyagida
Yuz nervi kanali qaysi teshik bilan tashqariga ochiladi?|Bigiz-so'rg'ich teshigi|Oval teshik|Tikanli teshik|Ko'ruv kanali
Til osti nervi kanali qaysi suyakda?|Ensa suyagida|Chakka suyagida|Pastki jag'da|Ponasimon suyakda
Yumaloq teshikdan qaysi nerv o'tadi?|Yuqori jag' nervi (uch shoxli nervning II tarmog'i)|Pastki jag' nervi|Ko'ruv nervi|Yuz nervi
Oval teshikdan qaysi nerv o'tadi?|Pastki jag' nervi (uch shoxli nervning III tarmog'i)|Yuqori jag' nervi|Til osti nervi|Hid bilish nervlari
Tikanli teshikdan nima o'tadi?|Miya qattiq pardasining o'rta arteriyasi|Ichki uyqu arteriyasi|Umurtqa arteriyasi|Ko'ruv nervi
Ichki eshituv yo'lidan qaysi nervlar o'tadi?|Yuz va dahliz-chig'anoq nervlari|Ko'ruv nervi|Til osti nervi|Adashgan nerv
Peshona bo'shlig'i qayerga ochiladi?|Burun bo'shlig'ining o'rta yo'liga|Og'iz bo'shlig'iga|Tashqi eshituv yo'liga|Ko'z kosasiga
`},

{ t: "Bosh suyagining yuz qismi va bosh suyagi umuman",
terms: `
viscerocranium|bosh suyagining yuz qismi
maxilla|yuqori jag' suyagi
corpus maxillae|yuqori jag' tanasi
sinus maxillaris|yuqori jag' bo'shlig'i (Gaymor bo'shlig'i)
processus frontalis maxillae|yuqori jag'ning peshona o'simtasi
processus zygomaticus maxillae|yuqori jag'ning yonoq o'simtasi
processus alveolaris|alveolyar o'simta
processus palatinus|tanglay o'simtasi
foramen infraorbitale|ko'z kosasi osti teshigi
tuber maxillae|yuqori jag' do'mbog'i
alveoli dentales|tish katakchalari
mandibula|pastki jag' suyagi
corpus mandibulae|pastki jag' tanasi
ramus mandibulae|pastki jag' shoxi
angulus mandibulae|pastki jag' burchagi
processus condylaris|bo'g'im (kondil) o'simtasi
caput mandibulae|pastki jag' boshchasi
processus coronoideus mandibulae|pastki jag'ning toj o'simtasi
incisura mandibulae|pastki jag' o'ymasi
foramen mentale|iyak teshigi
protuberantia mentalis|iyak do'mbog'i
foramen mandibulae|pastki jag' teshigi
canalis mandibulae|pastki jag' kanali
os zygomaticum|yonoq suyagi
arcus zygomaticus|yonoq ravog'i
os palatinum|tanglay suyagi
os nasale|burun suyagi
os lacrimale|ko'z yosh suyagi
vomer|dimog' suyagi (vomer)
concha nasalis inferior|pastki burun chig'anog'i
os hyoideum|til osti suyagi
cornu majus ossis hyoidei|til osti suyagining katta shoxi
cornu minus ossis hyoidei|til osti suyagining kichik shoxi
orbita|ko'z kosasi
cavitas nasi|burun bo'shlig'i
apertura piriformis|noksimon teshik
choanae|xoanalar
palatum osseum|suyak tanglay
fossa temporalis|chakka chuqurchasi
fossa infratemporalis|chakka osti chuqurchasi
fossa pterygopalatina|qanot-tanglay chuqurchasi
fossa cranii anterior|kalla asosining oldingi chuqurchasi
fossa cranii media|kalla asosining o'rta chuqurchasi
fossa cranii posterior|kalla asosining orqa chuqurchasi
sutura sagittalis|sagittal chok
sutura coronalis|tojsimon chok
sutura lambdoidea|lambdasimon chok
sutura squamosa|tangachali chok
fonticulus anterior|oldingi liqildoq
fonticulus posterior|orqa liqildoq
fonticulus sphenoidalis|ponasimon liqildoq
fonticulus mastoideus|so'rg'ichsimon liqildoq
`,
qs: `
Bosh suyagining yagona harakatchan suyagi?|Pastki jag'|Yuqori jag'|Til osti suyagi|Yonoq suyagi
Eng katta havoli bo'shliq (Gaymor bo'shlig'i) qaysi suyakda?|Yuqori jag'da|Peshona suyagida|Ponasimon suyakda|G'alvirsimon suyakda
Burun to'sig'ining suyak qismini nimalar hosil qiladi?|Vomer va g'alvirsimon suyakning perpendikulyar plastinkasi|Burun suyaklari|Pastki burun chig'anoqlari|Yuqori jag'ning peshona o'simtalari
Tepa va peshona suyaklari orasidagi chok?|Tojsimon chok|Sagittal chok|Lambdasimon chok|Tangachali chok
Ikki tepa suyagi orasidagi chok?|Sagittal chok|Tojsimon chok|Lambdasimon chok|Tangachali chok
Tepa va ensa suyaklari orasidagi chok?|Lambdasimon chok|Tojsimon chok|Sagittal chok|Tangachali chok
Tepa va chakka suyaklari orasidagi chok?|Tangachali chok|Lambdasimon chok|Tojsimon chok|Sagittal chok
Oldingi liqildoq odatda qachon yopiladi?|1–2 yoshda|Tug'ilgandan 2 oy keyin|5 yoshda|12 yoshda
Orqa liqildoq qachon yopiladi?|Tug'ilgandan keyin 2–3 oyda|2 yoshda|7 yoshda|Tug'ilishdan oldin
Oldingi liqildoq qaysi suyaklar orasida joylashgan?|Peshona va ikki tepa suyagi|Ensa va ikki tepa suyagi|Chakka va ponasimon suyak|Tepa va chakka suyagi
Til osti suyagining o'ziga xosligi?|Boshqa suyaklar bilan bo'g'im hosil qilmaydi, mushaklarda osilib turadi|Eng katta yuz suyagi|Havoli suyak|Umurtqa bilan bo'g'im hosil qiladi
Ko'z kosasi osti teshigi qaysi suyakda?|Yuqori jag'da|Yonoq suyagida|Peshona suyagida|Ponasimon suyakda
Iyak teshigi qaysi suyakda?|Pastki jag'da|Yuqori jag'da|Til osti suyagida|Yonoq suyagida
Yonoq ravog'ini nimalar hosil qiladi?|Chakka suyagining yonoq o'simtasi va yonoq suyagining chakka o'simtasi|Yuqori jag'ning peshona o'simtasi|Pastki jag'ning toj o'simtasi|Ponasimon suyakning katta qanoti
Suyak tanglayni nimalar hosil qiladi?|Yuqori jag'ning tanglay o'simtalari va tanglay suyaklarining gorizontal plastinkalari|Vomer va burun suyaklari|Pastki burun chig'anoqlari|Yonoq suyaklari
Turk egari kalla asosining qaysi chuqurchasida?|O'rta chuqurchasida|Oldingi chuqurchasida|Orqa chuqurchasida|Chakka chuqurchasida
Katta ensa teshigi kalla asosining qaysi chuqurchasida?|Orqa chuqurchasida|O'rta chuqurchasida|Oldingi chuqurchasida|Chakka osti chuqurchasida
Bosh suyagining yuz qismidagi juft suyaklar soni?|6 juft|3 juft|8 juft|4 juft
Yuz qismining toq suyaklari?|Pastki jag', vomer va til osti suyagi|Yuqori jag' va yonoq suyagi|Burun va ko'z yosh suyagi|Tanglay suyagi va pastki chig'anoq
Pastki jag' kanaliga qaysi teshik orqali kiriladi?|Pastki jag' teshigi|Iyak teshigi|Ko'z kosasi osti teshigi|Oval teshik
Burun bo'shlig'ini halqum bilan tutashtiruvchi orqa teshiklar?|Xoanalar|Noksimon teshik|Ko'z yosh kanali|Yarim oysimon yoriq
Ko'z kosasining medial devoridagi kichik suyak?|Ko'z yosh suyagi|Burun suyagi|Yonoq suyagi|Vomer
`},

{ t: "Suyaklar birlashmasi (artrologiya)",
terms: `
arthrologia|bo'g'imlar haqidagi ta'limot
juncturae ossium|suyaklar birlashmasi
juncturae fibrosae|fibroz (uzluksiz) birlashmalar
syndesmosis|sindesmoz
sutura|chok
gomphosis|gomfoz (tish-alveola birlashmasi)
membrana interossea|suyaklararo parda
juncturae cartilagineae|tog'ayli birlashmalar
synchondrosis|sinxondroz
symphysis|simfiz (yarim bo'g'im)
synostosis|sinostoz (suyaklanib qo'shilish)
articulatio|bo'g'im
juncturae synoviales|sinovial (uzlukli) birlashmalar
cartilago articularis|bo'g'im tog'ayi
capsula articularis|bo'g'im xaltasi (kapsulasi)
membrana fibrosa|fibroz parda
membrana synovialis|sinovial parda
cavitas articularis|bo'g'im bo'shlig'i
synovia|sinovial suyuqlik
discus articularis|bo'g'im diski
meniscus articularis|bo'g'im meniski
labrum articulare|bo'g'im labi
ligamentum|boylam
bursa synovialis|sinovial xalta
articulatio simplex|oddiy bo'g'im
articulatio composita|murakkab bo'g'im
articulatio complexa|kompleks bo'g'im
articulatio spheroidea|sharsimon bo'g'im
articulatio cotylica|kosasimon bo'g'im
articulatio ellipsoidea|ellipssimon bo'g'im
articulatio sellaris|egarsimon bo'g'im
articulatio trochoidea|silindrsimon (g'ildiraksimon) bo'g'im
ginglymus|g'altaksimon bo'g'im
articulatio plana|yassi bo'g'im
articulatio bicondylaris|ikki do'ngli bo'g'im
flexio|bukish
extensio|yozish
abductio|uzoqlashtirish
adductio|yaqinlashtirish
rotatio|aylantirish
circumductio|aylanma harakat
pronatio|pronatsiya (ichkariga burish)
supinatio|supinatsiya (tashqariga burish)
articulatio humeri|yelka bo'g'imi
articulatio cubiti|tirsak bo'g'imi
articulatio radiocarpalis|bilak-kaft usti bo'g'imi
articulatio coxae|chanoq-son bo'g'imi
articulatio genus|tizza bo'g'imi
articulatio talocruralis|boldir-oshiq bo'g'imi
articulatio temporomandibularis|chakka-pastki jag' bo'g'imi
articulatio atlantooccipitalis|atlant-ensa bo'g'imi
articulatio sacroiliaca|dumg'aza-yonbosh bo'g'imi
articulatio sternoclavicularis|to'sh-o'mrov bo'g'imi
ligamentum cruciatum anterius|oldingi kesishgan boylam
ligamentum cruciatum posterius|orqa kesishgan boylam
ligamentum patellae|tizza qopqog'i boylami
ligamentum capitis femoris|son boshchasi boylami
ligamentum iliofemorale|yonbosh-son boylami
ligamenta flava|sariq boylamlar
`,
qs: `
Bo'g'imning asosiy (majburiy) elementlari?|Bo'g'im yuzalari, bo'g'im xaltasi va bo'g'im bo'shlig'i|Disk, menisk va bo'g'im labi|Faqat boylamlar|Sinovial xaltalar
Tizza bo'g'imi ichidagi yarim oysimon tog'aylar?|Meniskalar|Disklar|Bo'g'im labi|Sinovial xaltalar
Ikkidan ortiq suyakdan hosil bo'lgan bo'g'im?|Murakkab bo'g'im|Oddiy bo'g'im|Kompleks bo'g'im|Yassi bo'g'im
Ichida disk yoki menisk bo'lgan bo'g'im?|Kompleks bo'g'im|Oddiy bo'g'im|Murakkab bo'g'im|Yassi bo'g'im
Yelka bo'g'imi shakli bo'yicha qanday?|Sharsimon|Egarsimon|G'altaksimon|Yassi
Chanoq-son bo'g'imi shakli bo'yicha qanday?|Kosasimon (sharsimonning bir turi)|Ellipssimon|G'altaksimon|Egarsimon
Bosh barmoqning kaft usti-kaft bo'g'imi shakli?|Egarsimon|Sharsimon|G'altaksimon|Yassi
Tirsak bo'g'imi qanday bo'g'im?|Murakkab (uchta bo'g'imdan iborat)|Oddiy|Yassi|Egarsimon
Tizza bo'g'imi qanday bo'g'im?|Murakkab va kompleks|Oddiy|Yassi|Egarsimon
Tishning tish katakchasiga birikishi?|Gomfoz|Sinxondroz|Simfiz|Sinostoz
Qov suyaklarining birikishi?|Simfiz (yarim bo'g'im)|Sindesmoz|Chok|Diartroz
Bosh suyagi suyaklarining chok orqali birikishi qaysi turga kiradi?|Fibroz (uzluksiz) birlashma|Sinovial bo'g'im|Simfiz|Sinxondroz
Tog'ayning suyakka aylanib, suyaklarning qo'shilib ketishi?|Sinostoz|Sindesmoz|Gomfoz|Diartroz
Uch o'qli (ko'p o'qli) bo'g'imga misol?|Yelka bo'g'imi|Tirsak-yelka bo'g'imi|Proksimal bilak-tirsak bo'g'imi|Barmoqlararo bo'g'im
Bir o'qli bo'g'imga misol?|Barmoq falangalararo bo'g'imlari|Yelka bo'g'imi|Chanoq-son bo'g'imi|Bilak-kaft usti bo'g'imi
Sagittal o'q atrofidagi harakatlar?|Uzoqlashtirish va yaqinlashtirish|Bukish va yozish|Pronatsiya va supinatsiya|Aylanma harakat
Frontal o'q atrofidagi harakatlar?|Bukish va yozish|Uzoqlashtirish va yaqinlashtirish|Aylantirish|Pronatsiya va supinatsiya
Bilakni kaft orqaga (pastga) qaraydigan qilib burish?|Pronatsiya|Supinatsiya|Abduksiya|Fleksiya
Umurtqa ravoqlari orasidagi boylamlar?|Sariq boylamlar|Kesishgan boylamlar|Yon boylamlar|Tizza qopqog'i boylami
Pastki jag' harakatini ta'minlovchi bo'g'im?|Chakka-pastki jag' bo'g'imi|Atlant-ensa bo'g'imi|Atlant-aksis bo'g'imi|To'sh-o'mrov bo'g'imi
Tizza bo'g'imida boldirning oldinga siljishini cheklovchi boylam?|Oldingi kesishgan boylam|Orqa kesishgan boylam|Tizza qopqog'i boylami|Son boshchasi boylami
Bo'g'im bo'shlig'idagi sinovial suyuqlikni ishlab chiqaruvchi tuzilma?|Sinovial parda|Fibroz parda|Bo'g'im tog'ayi|Boylamlar
Bilak-kaft usti bo'g'imi shakli bo'yicha?|Ellipssimon|Sharsimon|G'altaksimon|Yassi
Proksimal bilak-tirsak bo'g'imi shakli bo'yicha?|Silindrsimon (g'ildiraksimon)|Sharsimon|Egarsimon|Yassi
`},

{ t: "Mushaklar haqida umumiy ma'lumot. Bosh va bo'yin mushaklari",
terms: `
myologia|mushaklar haqidagi ta'limot
musculus|mushak
venter|mushak qorni
caput musculi|mushak boshi
cauda musculi|mushak dumi
tendo|pay
aponeurosis|aponevroz (yassi pay)
fascia|fassiya
retinaculum|ushlagich
vagina tendinis|pay qini
punctum fixum|qo'zg'almas nuqta
punctum mobile|qo'zg'aluvchi nuqta
musculus fusiformis|duksimon mushak
musculus unipennatus|bir patli mushak
musculus bipennatus|ikki patli mushak
musculus multipennatus|ko'p patli mushak
musculus biceps|ikki boshli mushak
musculus triceps|uch boshli mushak
musculus quadriceps|to'rt boshli mushak
musculus digastricus|ikki qorinchali mushak
musculus orbicularis|aylana mushak
musculus sphincter|siquvchi mushak (sfinkter)
musculus flexor|bukuvchi mushak
musculus extensor|yozuvchi mushak
musculus abductor|uzoqlashtiruvchi mushak
musculus adductor|yaqinlashtiruvchi mushak
musculus pronator|pronator mushak
musculus supinator|supinator mushak
musculus levator|ko'taruvchi mushak
musculus depressor|tushiruvchi mushak
musculus rotator|aylantiruvchi mushak
agonistae|agonistlar
antagonistae|antagonistlar
musculus occipitofrontalis|ensa-peshona mushagi
galea aponeurotica|pay dubulg'asi
musculus orbicularis oculi|ko'zning aylana mushagi
musculus orbicularis oris|og'izning aylana mushagi
musculus buccinator|lunj mushagi
musculus zygomaticus major|katta yonoq mushagi
musculus risorius|kulgi mushagi
musculus masseter|chaynov mushagi
musculus temporalis|chakka mushagi
musculus pterygoideus lateralis|lateral qanotsimon mushak
musculus pterygoideus medialis|medial qanotsimon mushak
platysma|bo'yin teri osti mushagi
musculus sternocleidomastoideus|to'sh-o'mrov-so'rg'ichsimon mushak
musculus mylohyoideus|jag'-til osti mushagi
musculus sternohyoideus|to'sh-til osti mushagi
musculus omohyoideus|kurak-til osti mushagi
musculi scaleni|narvonsimon mushaklar
musculus scalenus anterior|oldingi narvonsimon mushak
`,
qs: `
Odam tanasida taxminan nechta skelet mushagi bor?|600 ga yaqin|206 ta|100 ga yaqin|1500 dan ortiq
Mushakning qisqaruvchi qismi?|Mushak qorni (venter)|Pay|Aponevroz|Fassiya
Mushakni qoplab turuvchi biriktiruvchi to'qimali parda?|Fassiya|Aponevroz|Periost|Sinovial parda
Chaynov mushaklari qatoriga kiradi?|Chaynov, chakka va qanotsimon mushaklar|Lunj va kulgi mushagi|Og'izning aylana mushagi|Ko'zning aylana mushagi
Yuz (mimika) mushaklarining o'ziga xosligi?|Bir uchi suyakdan boshlanib, ikkinchi uchi teriga birikadi|Ikki uchi ham suyakka birikadi|Qalin fassiyaga ega|Faqat chaynashda qatnashadi
Bir tomonlama qisqarganda boshni yon tomonga egib, yuzni qarama-qarshi tomonga buruvchi mushak?|To'sh-o'mrov-so'rg'ichsimon mushak|Trapetsiyasimon mushak|Narvonsimon mushaklar|Bo'yin teri osti mushagi
Ko'zni yumuvchi mushak?|Ko'zning aylana mushagi|Ensa-peshona mushagi|Katta yonoq mushagi|Chakka mushagi
Pastki jag'ni ko'taruvchi (og'izni yumuvchi) eng kuchli mushak?|Chaynov mushagi|Ikki qorinchali mushak|Jag'-til osti mushagi|Lunj mushagi
Puflash va chaynashda ovqatni tishlar orasiga suruvchi mushak?|Lunj mushagi|Chaynov mushagi|Kulgi mushagi|Og'izning aylana mushagi
Oldingi va o'rta narvonsimon mushaklar orasidan nima o'tadi?|O'mrov osti arteriyasi va yelka chigali|O'mrov osti venasi|Qizilo'ngach|Traxeya
Agonist mushaklar qanday mushaklar?|Bir yo'nalishda harakat qiluvchi mushaklar|Qarama-qarshi harakat qiluvchi mushaklar|Faqat yuz mushaklari|Silliq mushaklar
Antagonist mushaklarga misol?|Yelkaning ikki boshli va uch boshli mushaklari|Ikki boshli mushak va yelka mushagi|Chaynov va chakka mushagi|Katta va kichik ko'krak mushagi
Mushakning qo'zg'almas nuqtasi qanday ataladi?|Punctum fixum|Punctum mobile|Insertio|Venter
Patli mushaklarning afzalligi?|Kuchi katta, lekin qisqarish masofasi kichik|Juda tez va uzoq qisqaradi|Faqat yuzda bo'ladi|Payi bo'lmaydi
Til osti suyagidan pastda joylashgan mushaklar guruhi?|To'sh-til osti, kurak-til osti va boshqalar|Ikki qorinchali va jag'-til osti mushaklari|Chaynov mushaklari|Narvonsimon mushaklar
Bo'yindagi yuzaki teri osti mushagi?|Platysma|To'sh-o'mrov-so'rg'ichsimon mushak|Trapetsiyasimon mushak|Narvonsimon mushak
`},

{ t: "Gavda va muchallar mushaklari",
terms: `
musculus trapezius|trapetsiyasimon mushak
musculus latissimus dorsi|orqaning eng keng mushagi
musculi rhomboidei|rombsimon mushaklar
musculus levator scapulae|kurakni ko'taruvchi mushak
musculus erector spinae|umurtqa pog'onasini tiklovchi mushak
musculus pectoralis major|katta ko'krak mushagi
musculus pectoralis minor|kichik ko'krak mushagi
musculus serratus anterior|oldingi tishli mushak
musculi intercostales externi|tashqi qovurg'alararo mushaklar
musculi intercostales interni|ichki qovurg'alararo mushaklar
diaphragma|diafragma (ko'krak-qorin to'sig'i)
centrum tendineum|pay markazi (diafragma)
musculus rectus abdominis|qorinning to'g'ri mushagi
musculus obliquus externus abdominis|qorinning tashqi qiyshiq mushagi
musculus obliquus internus abdominis|qorinning ichki qiyshiq mushagi
musculus transversus abdominis|qorinning ko'ndalang mushagi
linea alba|oq chiziq
anulus umbilicalis|kindik halqasi
canalis inguinalis|chov kanali
vagina musculi recti abdominis|qorin to'g'ri mushagining qini
musculus deltoideus|deltasimon mushak
musculus supraspinatus|qirra usti mushagi
musculus infraspinatus|qirra osti mushagi
musculus teres major|katta yumaloq mushak
musculus teres minor|kichik yumaloq mushak
musculus subscapularis|kurak osti mushagi
musculus biceps brachii|yelkaning ikki boshli mushagi
musculus brachialis|yelka mushagi
musculus coracobrachialis|tumshuq-yelka mushagi
musculus triceps brachii|yelkaning uch boshli mushagi
musculus brachioradialis|yelka-bilak mushagi
musculus pronator teres|yumaloq pronator
musculus flexor carpi radialis|kaft usti bilak bukuvchisi
musculus flexor carpi ulnaris|kaft usti tirsak bukuvchisi
musculus flexor digitorum superficialis|barmoqlarning yuza bukuvchisi
musculus extensor digitorum|barmoqlar yozuvchisi
musculus iliopsoas|yonbosh-bel mushagi
musculus gluteus maximus|katta dumba mushagi
musculus gluteus medius|o'rta dumba mushagi
musculus gluteus minimus|kichik dumba mushagi
musculus piriformis|noksimon mushak
musculus quadriceps femoris|sonning to'rt boshli mushagi
musculus rectus femoris|sonning to'g'ri mushagi
musculus sartorius|tikuvchi mushak
musculus gracilis|nozik mushak
musculus adductor magnus|katta yaqinlashtiruvchi mushak
musculus biceps femoris|sonning ikki boshli mushagi
musculus semitendinosus|yarim payli mushak
musculus semimembranosus|yarim pardali mushak
musculus tibialis anterior|oldingi katta boldir mushagi
musculus triceps surae|boldirning uch boshli mushagi
musculus gastrocnemius|boldir (ikra) mushagi
musculus soleus|kambalasimon mushak
tendo calcaneus|tovon (Axill) payi
musculus fibularis longus|uzun kichik boldir mushagi
`,
qs: `
Asosiy nafas mushagi?|Diafragma|Katta ko'krak mushagi|Trapetsiyasimon mushak|Qorinning to'g'ri mushagi
Nafas olishda qovurg'alarni ko'taruvchi mushaklar?|Tashqi qovurg'alararo mushaklar|Ichki qovurg'alararo mushaklar|Qorinning to'g'ri mushagi|Orqaning eng keng mushagi
Yelkani uzoqlashtiruvchi asosiy mushak?|Deltasimon mushak|Katta ko'krak mushagi|Orqaning eng keng mushagi|Kurak osti mushagi
Tirsak bo'g'imida bilakni bukuvchi va supinatsiya qiluvchi mushak?|Yelkaning ikki boshli mushagi|Yelkaning uch boshli mushagi|Deltasimon mushak|Tumshuq-yelka mushagi
Bilakni yozuvchi asosiy mushak?|Yelkaning uch boshli mushagi|Yelkaning ikki boshli mushagi|Yelka mushagi|Yelka-bilak mushagi
Tanadagi eng uzun mushak?|Tikuvchi mushak|Sonning to'g'ri mushagi|Orqaning eng keng mushagi|Diafragma
Sonni bukuvchi eng kuchli mushak?|Yonbosh-bel mushagi|Katta dumba mushagi|Nozik mushak|Sonning ikki boshli mushagi
Tizza bo'g'imida boldirni yozuvchi mushak?|Sonning to'rt boshli mushagi|Sonning ikki boshli mushagi|Yarim payli mushak|Boldir mushagi
Tik turishda va zinaga ko'tarilishda sonni yozuvchi kuchli mushak?|Katta dumba mushagi|Yonbosh-bel mushagi|Tikuvchi mushak|O'rta dumba mushagi
Tovon (Axill) payini hosil qiluvchi mushak?|Boldirning uch boshli mushagi|Oldingi katta boldir mushagi|Sonning to'rt boshli mushagi|Tikuvchi mushak
Qorinning oq chizig'i nimadan hosil bo'ladi?|Qorin keng mushaklari aponevrozlarining tutashishidan|Qorinning to'g'ri mushagidan|Teri burmasidan|Diafragmadan
Erkaklarda chov kanalidan nima o'tadi?|Urug' tizimchasi|Bachadonning yumaloq boylami|Son arteriyasi|Siydik yo'li
Ayollarda chov kanalidan nima o'tadi?|Bachadonning yumaloq boylami|Urug' tizimchasi|Tuxumdon arteriyasi|Siydik yo'li
"Rotator manjet"ga kirmaydigan mushak?|Deltasimon mushak|Qirra usti mushagi|Qirra osti mushagi|Kurak osti mushagi
Kurakni ko'krak qafasiga bosib, oldinga tortuvchi mushak?|Oldingi tishli mushak|Rombsimon mushaklar|Trapetsiyasimon mushak|Orqaning eng keng mushagi
Ko'tarilgan qo'lni pastga, orqaga va ichkariga tortuvchi mushak?|Orqaning eng keng mushagi|Deltasimon mushak|Oldingi tishli mushak|Qirra usti mushagi
Sonni yaqinlashtiruvchi mushaklar qayerda joylashgan?|Sonning medial sohasida|Sonning oldingi sohasida|Sonning orqa sohasida|Dumba sohasida
Sonning orqa guruh mushaklari?|Ikki boshli, yarim payli va yarim pardali mushaklar|To'rt boshli va tikuvchi mushak|Dumba mushaklari|Nozik va katta yaqinlashtiruvchi mushak
Oyoq panjasini yozuvchi (orqaga bukuvchi) mushak?|Oldingi katta boldir mushagi|Kambalasimon mushak|Boldir (ikra) mushagi|Boldirning uch boshli mushagi
Diafragmadagi qizilo'ngach teshigi qaysi qismida?|Bel qismida|Pay markazida|To'sh qismida|Qovurg'a qismida
Diafragmadagi pastki kovak vena teshigi qaysi qismida?|Pay markazida|Bel qismida|To'sh qismida|Qovurg'a qismida
Umurtqa pog'onasini tik ushlab turuvchi kuchli mushak?|Umurtqa pog'onasini tiklovchi mushak|Trapetsiyasimon mushak|Rombsimon mushak|Qorinning to'g'ri mushagi
Qorin pressi mushaklarining vazifasi?|Qorin bo'shlig'i bosimini oshirish, gavdani bukish, nafas chiqarishda qatnashish|Qo'lni ko'tarish|Oyoqni yozish|Boshni burish
Kambalasimon mushak qaysi mushak tarkibiga kiradi?|Boldirning uch boshli mushagi|Sonning to'rt boshli mushagi|Yonbosh-bel mushagi|Oldingi katta boldir mushagi
`}
]);
