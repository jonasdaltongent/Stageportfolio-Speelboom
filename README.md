# Handleiding voor de leraar — Les 2: Mijn digitaal stageportfolio

**Vak:** Toegepaste Informatica
**Doelgroep:** klas 3MWb — 2de graad Maatschappij en welzijn, dubbele finaliteit
**Lesduur:** 1 × 50 minuten (formatief)
**Beroepscontext:** De Speelboom, een fictieve buitenschoolse opvang
**Toestellen:** Chromebook met schoolaccount (Google Workspace)
**Kernleerplandoel:** `BV2_04.03` — digitale inhouden beheren (toepassen)

---

## 1. Inhoud van het pakket

```text
W04 - Les 02 - MW - Mijn digitaal stageportfolio/
├── index.html                   # de leerlingentool (7 stappen + extra + theoriekaart)
├── presentatie.html             # 11 klassikale dia's voor de fase "Ik doe"
├── css/
│   ├── style.css                # leerlingentool (Dalton-kleuren, voor een half scherm)
│   └── slides.css               # dia's (16:9, beamer)
├── js/
│   ├── script.js                # stappen, vinkjes, theoriekaart, woordenlijst, zelftest
│   └── slides.js                # dia's: onthullen, notities (N), volledig scherm (F)
├── assets/
│   ├── speelboom-logo.svg       # logo van de fictieve opvang (eigen werk)
│   ├── speelboom-icon.svg       # favicon
│   ├── dalton-gent-logo.png     # logo GO! Dalton Gent
│   ├── fonts/                   # Atkinson Hyperlegible + Montserrat (OFL, zelf gehost)
│   └── screenshots/             # hier plaats jij screenshots (zie §5)
├── werkdocument/
│   ├── Portfoliopaspoort.docx           # het werkdocument dat de leerling INLEVERT
│   ├── Document zonder titel.docx       # rommelbestand 1 (samen hernoemd in de demo)
│   ├── verslag Liam boos DEFINITIEF (2).docx
│   ├── dingen.xlsx
│   ├── Kopie van sjabloon reflectie.docx
│   ├── uurrooster okt def.docx
│   └── maak_werkdocumenten.py           # om alles opnieuw te genereren (python-docx + openpyxl)
├── lesvoorbereiding.md          # volledige lesvoorbereiding volgens §46 van de AI-lesplanner
├── dalton-lesfiche.md           # lesfiche in het Dalton-formaat (lestijd + KWT)
├── lesdoelen.json               # codes van de leerplandoelen voor je jaaroverzicht
└── README.md                    # deze handleiding
```

De website heeft geen server, database, login of tracking nodig. Er worden geen externe bestanden
geladen. `localStorage` bewaart alleen de vinkjes en de huidige stap (voorvoegsel
`speelboom_portfolio_`), met een wisknop.

---

## 2. Klaarzetten in 5 stappen (± 25 minuten)

### Stap 1 — Je e-mailadres  ⚠️ **verplicht, maar niet op de website**

Voor stap 6 (delen) hebben de leerlingen jouw e-mailadres nodig. Dat staat **bewust niet op de
lespagina**: die staat openbaar op GitHub Pages, en een e-mailadres op een openbare pagina wordt
vroeg of laat opgepikt door spambots.

Geef het adres op twee plaatsen:
1. in de **instructietekst van de opdracht** in Classroom (zie stap 4 hieronder);
2. **op het bord**, tijdens de demo van dia 9.

De lespagina en de theoriekaart verwijzen daarnaar. Drive vult het adres bovendien zelf aan zodra de
leerling begint te typen.

### Stap 2 — Publiceren via GitHub Pages

Dit pakket staat al online:

- **Repository:** <https://github.com/jonasdaltongent/Stageportfolio-Speelboom>
- **Lespagina voor de leerlingen:** <https://jonasdaltongent.github.io/Stageportfolio-Speelboom/>
- **Dia's voor het bord:** <https://jonasdaltongent.github.io/Stageportfolio-Speelboom/presentatie.html>

Deel met de leerlingen altijd het **Pages-adres**, niet de repository-link. Na een wijziging duurt het
1 à 2 minuten voor de site opnieuw gepubliceerd is.

### Stap 3 — De zes bestanden in Google Drive
1. Upload de zes bestanden uit `werkdocument/` naar Drive.
2. Rechtsklik → **Openen met → Google Documenten** (of **Google Spreadsheets** voor `dingen.xlsx`).
3. **Controleer** in elk Google-bestand:
   - de slechte bestandsnaam is bewaard gebleven (Drive zet er soms `.docx` achter — haal dat weg);
   - bovenaan staat nog een datum in de vorm `22-09-2026`;
   - in `Portfoliopaspoort`: de tabel van deel 2 heeft vijf rijen en de eerste rij is ingevuld.
4. Zet in elk document **Bestand → Taal → Nederlands**.
5. Verwijder de geüploade `.docx`/`.xlsx`-originelen uit Drive, zodat je niet per ongeluk het
   verkeerde bestand toevoegt in Classroom.

### Stap 4 — Twee items in Google Classroom

Onder het onderwerp **Digitaal organiseren en communiceren**:

| | **Materiaal** | **Opdracht** |
|---|---|---|
| Titel | Les 2 — Bestanden om op te ruimen | Les 2 — Mijn digitaal stageportfolio |
| Klas | 3MWb | 3MWb |
| Bijlagen | de 5 rommelbestanden | link naar de lespagina + `Portfoliopaspoort` |
| Instelling | **Een kopie maken voor elke leerling** | **Een kopie maken voor elke leerling** |
| Punten | — | Zonder cijfer |
| Inleveren tegen | — | vrijdag 25 september 2026, 20.00 uur |

Instructietekst voor de opdracht (kopieer):
```text
1. Open de lespagina (link). Zet ze links op je scherm.
2. Open je Portfoliopaspoort. Zet het rechts op je scherm.
3. Volg de stappen op de lespagina. Je echte werk doe je in Google Drive.
4. Bij stap 6 deel je je map met mij. Mijn e-mailadres is: <VUL HIER JE ADRES IN>
5. Klaar? Klik op Inleveren. Niet klaar? Lever toch in en schrijf een privéopmerking.
```

> **Vergeet regel 4 niet in te vullen.** Zonder jouw adres blijft stap 6 steken.

> **Waarom twee items?** De vijf rommelbestanden mogen **niet** in de opdracht staan. Bij *Inleveren*
> draagt Classroom de eigendom van álle bijlagen over aan jou, en dan verdwijnen die bestanden uit het
> portfolio van de leerling. In een materiaalpost blijft de leerling eigenaar.
>
> *Bevestigd: in deze Classroom-omgeving biedt een materiaalpost de optie "Een kopie maken voor elke
> leerling" wel degelijk aan.*

> **Let op:** Classroom zet automatisch de naam van de leerling achter elke kopie
> (*dingen - Sofie Janssens*). Dat is geen fout — integendeel: de lespagina vraagt bij stap 3
> uitdrukkelijk om ook die eigen naam uit de bestandsnaam te halen.
>
> Classroom maakt de kopieën op het moment dat je toewijst. Werk de bestanden dus eerst helemaal af.

### Stap 5 — Dia's op het bord
Open `presentatie.html`.
`→`/spatie: volgende (onthult eerst antwoorden) · `←`: vorige · `F`: volledig scherm · `N`: sprekersnotities.

---

## 3. Test vóór de les (10 minuten, bij voorkeur met een leerlingaccount)

- [ ] De Pages-link opent de lespagina; de lettertypes en het logo laden.
- [ ] De stappenbalk werkt, de vinkjes blijven staan na een verversing, de knop *Vinkjes wissen* werkt.
- [ ] De theoriekaart opent (en staat vast rechts op een breed scherm).
- [ ] In de instructietekst van de Classroom-opdracht staat **jouw** e-mailadres (regel 4).
- [ ] De vijf kopieën komen bij de leerling terecht in `Mijn Drive › Classroom › <klasnaam>`.
- [ ] Je kan zelf een map delen met dat leerlingaccount en het leerlingaccount kan omgekeerd delen.
- [ ] Het screenshot van de Chromebook belandt in `Downloads` en kan ingevoegd worden via
      *Invoegen → Afbeelding → Uploaden vanaf computer*.
- [ ] `index.html?leraar` toont de roze screenshot-kaders (die zien de leerlingen niet).

---

## 4. Verbetersleutel

### Verwachte namen en mappen

| Oude naam | Verwachte nieuwe naam | Map |
|---|---|---|
| `Document zonder titel` | `2026-09-22_activiteitenfiche_herfstslinger_v1` | 02_Activiteiten |
| `verslag Liam boos DEFINITIEF (2)` | `2026-09-18_observatie_kind-A_v2` | 03_Observaties |
| `dingen` | `2026-09-22_boodschappenlijst_herfstslinger_v1` | 04_Materiaal |
| `Kopie van sjabloon reflectie` | `2026-09-21_reflectie_week-1_v1` | 05_Reflectie |
| `uurrooster okt def` | `2026-10-01_uurrooster_stage_v1` | 01_Stageplaats |

Andere woorden in het middenstuk zijn **goed** zolang ze zeggen wat het bestand is. Beoordeel op:
datumvorm · geen spaties · versie als `vX` · geen kindnaam.

### Verwachte antwoorden op de vragen

1. **Vraag 1 (Downloads):** Neen. Downloads staat op dat ene toestel; op een andere Chromebook staat
   het bestand er niet. (Ook goed: "alleen als ik het eerst naar Drive verplaats".)
2. **Vraag 2 (datum vooraan):** Omdat de bestanden dan vanzelf op volgorde in de tijd staan. De vorm
   `2026-09-22` sorteert correct; `22-9-26` niet.
3. **Vraag 3 (geen kindnaam):** Iedereen die op het scherm kijkt of de map ziet, leest de bestandsnaam.
   Wat je op stage over een kind weet, deel je niet met anderen (beroepsgeheim).
4. **Vraag 4 (Kijker):** Wel — openen en lezen. Niet — iets veranderen, hernoemen of verwijderen.
   (Ook goed: "geen opmerkingen zetten".)

### Essentiële fouten (geven altijd feedback)

- De naam van het kind blijft in de bestandsnaam staan.
- Delen als **Bewerker** of via **iedereen met de link**.
- De hoofdmap staat in de map `Classroom` in plaats van in **Mijn Drive**.
- Datum als `22-9-26`, `22-09-2026` of `sept`.
- Het screenshot in een ander document dan het paspoort.

### Minimumroute

Hoofdmap + vijf submappen · minstens twee hernoemde en verplaatste bestanden (waaronder het
observatieverslag) · de map gedeeld als Kijker. Het screenshot mag vervangen worden door de mapnamen
uit te typen; die terugvaloptie staat in de hint bij stap 5.

---

## 5. Screenshots (optioneel)

De lespagina heeft vier screenshot-plaatsen. **Ze zijn nog niet ingevuld** — zonder de bestanden werkt
alles gewoon, er blijft alleen geen lege plek achter. Wil je ze later toevoegen (voor zwakkere lezers
maakt dat een groot verschil), maak ze dan tijdens de les zelf op een Chromebook. Zie `assets/screenshots/LEESMIJ.md` voor de exacte
bestandsnamen. Open `index.html?leraar` om de plaatsen te zien.

---

## 6. Wat als je krap in de tijd zit?

Schrappen in deze volgorde:

1. **Stap 5** (screenshot) — laat de leerlingen in plaats daarvan hun mapnamen uittypen in deel 3.
2. **De extra stap** — die is sowieso optioneel.
3. **Twee van de vier te hernoemen bestanden** — hou in elk geval `verslag Liam boos DEFINITIEF (2)`
   (privacy) en `dingen` (een naam die niets zegt).

Schrap **niet** stap 2 (de mappenstructuur) of stap 6 (delen met de juiste rechten): dat zijn de twee
onderdelen van `BV2_04.03` waarop de rest van het jaar verder gebouwd wordt.

---

## 7. Privacy en licenties

- De Speelboom, Liam en alle gegevens zijn **fictief**; het telefoonnummer bestaat niet.
- De leerling blijft **eigenaar** van de portfoliomap. De leraar krijgt alleen leesrechten.
- De lespagina bewaart alleen vinkjes lokaal op het toestel, met een wisknop. Geen login, geen
  tracking, geen externe scripts, geen persoonsgegevens.
- Lettertypes: Atkinson Hyperlegible en Montserrat, SIL Open Font License (licenties in
  `assets/fonts/`).
- Logo van De Speelboom: eigen werk (SVG). Logo GO! Dalton Gent: van de school.
