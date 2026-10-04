# Handleiding voor de leraar — Les 2: Mijn digitaal stageportfolio

**Vak:** Toegepaste Informatica
**Doelgroep:** klas 3MWb — 2de graad Maatschappij en welzijn, dubbele finaliteit
**Lesduur:** 1 × 50 minuten: 10 minuten instructie + 40 minuten keuzewerktijd (formatief)
**Context:** De Speelboom, een fictieve buitenschoolse opvang
**Lokaal:** 18 — computers met Windows 11, Google Workspace in Chrome
**Lesdag:** maandag 28 september 2026, 9de lesuur (rooster van 25-09-2026)
**Kernleerplandoel:** `BV2_04.03` — digitale inhouden beheren (toepassen)

---

## 1. Inhoud van het pakket

```text
W04 - Les 02 - MW - Mijn digitaal stageportfolio/
├── index.html                   # de leerlingentool: route · één stap · checklist (zie §1b)
├── presentatie.html             # 8 dia's: 10 minuten instructie
├── css/
│   ├── style.css                # leerlingentool (Dalton-kleuren; drie kolommen, op een smal venster onder elkaar)
│   └── slides.css               # dia's (16:9, beamer)
├── js/
│   ├── script.js                # stappen, checklist, zelftest
│   └── slides.js                # dia's: onthullen, notities (N), volledig scherm (F)
├── assets/
│   ├── speelboom-logo.svg       # logo van de fictieve opvang (eigen werk)
│   ├── speelboom-icon.svg       # favicon
│   ├── dalton-gent-logo.png     # logo GO! Dalton Gent
│   ├── fonts/                   # Atkinson Hyperlegible + Montserrat (OFL, zelf gehost)
│   └── screenshots/             # hier plaats jij screenshots (zie §5)
├── werkdocument/
│   ├── Portfoliopaspoort.docx              # het werkdocument dat de leerling INLEVERT
│   ├── Les2_bestanden-om-op-te-ruimen.zip  # DIT hang je aan de opdracht
│   ├── rommel/                             # de vijf losse bestanden die in de zip zitten
│   └── maak_werkdocumenten.py              # genereert alles opnieuw (python-docx, openpyxl)
├── lesvoorbereiding.md          # volledige lesvoorbereiding volgens de AI-lesplanner (§9.2)
├── dalton-lesfiche.html         # Dalton-lesfiche in de kleurcode: openen, Kopieer, plakken in je planner
├── lesdoelen.json               # codes van de leerplandoelen voor je jaaroverzicht
└── README.md                    # deze handleiding
```

De website heeft geen server, database, login of tracking nodig. Er worden geen externe bestanden
geladen. `localStorage` bewaart alleen de vinkjes en de laatste stap (voorvoegsel
`speelboom_portfolio_v2_`), met een wisknop.

### 1b. Wat er in versie 2 veranderde (27-09-2026)

Deze les kreeg dezelfde opbouw als les 2 van 3MWWE (*Mijn digitale onderzoeksmap*):

- **Lespagina:** links de route met alle stappen, midden één stap, rechts een checklist met 20
  concrete taken. Elke stap heeft vijf vaste blokken: één zin · *Wat moet je doen?* · hoogstens één
  tip · *Hulp nodig?* (dichtgeklapt) · *Klaar als*. De theoriekaart is een gewone pagina.
- **Rommelbestanden in één zip-bestand** in plaats van een kopie per leerling. Er komt daardoor een
  stap bij: *Bestanden ophalen* (downloaden, uitpakken, uploaden). De les heeft nu 8 stappen.
- **Alleen Windows 11** (lokaal 18): geen Chromebook-uitleg, geen vensterindeling meer.
- De pagina zegt niet meer dat de leerlingen Classroom moeten openen: ze starten daar al.
- **Keuzewerktijd = 50 − instructie**: 10 minuten instructie, 40 minuten werken.
- **Dalton-lesfiche** als HTML in de kleurcode van het Dalton-sjabloon.
- De Drive-knopnamen zijn zoals Google ze nu noemt (**Kijker**, **Nieuw › Nieuwe map**,
  **Nieuw › Bestand uploaden**, **Ordenen › Verplaatsen**, **Kleur van map**). *Nieuwe map* en
  *Bestand uploaden* komen van jouw scherm (04-10-2026); de Drive-help schrijft *Map* en *Bestanden uploaden*.

---

## 2. Klaarzetten

### Stap 1 — De lespagina staat online

- **Repository:** <https://github.com/jonasdaltongent/Stageportfolio-Speelboom>
- **Lespagina voor de leerlingen:** <https://jonasdaltongent.github.io/Stageportfolio-Speelboom/>
- **Dia's voor het bord:** <https://jonasdaltongent.github.io/Stageportfolio-Speelboom/presentatie.html>

Versie 2 staat online sinds 27 september 2026. Na een wijziging: `git push` (op jouw vraag).

### Stap 2 — Je e-mailadres  ⚠️ **verplicht, maar niet op de website**

Voor stap 7 (delen) hebben de leerlingen jouw e-mailadres nodig. Het staat **bewust niet op de
lespagina**: die staat openbaar op GitHub Pages. Zet het in de **instructietekst van de opdracht**
en schrijf het **op het bord** (dia 7 herinnert je eraan).

### Stap 3 — Eén opdracht in Google Classroom

> [!TIP]
> **Met één commando:** `_tools/zet_opdracht_klaar.py` zet deze opdracht als concept klaar, met alle
> bijlagen en instellingen hieronder, uit `classroom.json`. Zie `_tools/CLASSROOM-KOPPELING.md`. Wat
> volgt, is de manier met de hand.

**Eenmalig, en daarna nooit meer:** zet in Google Drive de instelling aan die een Word-bestand bij het
uploaden meteen omzet naar Google Documenten. Ga naar
[drive.google.com/drive/settings](https://drive.google.com/drive/settings) en vink **Uploads
converteren naar de indeling van een Editor van Google Documenten** aan
([Drive-help](https://support.google.com/drive/answer/2424368?hl=nl)). Let op: vanaf dan wordt élk
Word-, Excel- of PowerPoint-bestand dat jij uploadt een Google-bestand.

Daarna, voor deze les:

1. Upload `werkdocument/Portfoliopaspoort.docx` **in Drive zelf**: **Nieuw** › **Bestanden
   uploaden**. Staat er geen `.docx` meer achter de naam? Dan is het een Google-document.
2. Maak de opdracht en voeg het paspoort toe met **Bijvoegen** › **Drive**. Kies **Een kopie maken
   voor elke leerling**. Elke leerling krijgt een eigen kopie met de eigen naam in de titel
   ([Classroom-help](https://support.google.com/edu/classroom/answer/6020265?hl=nl)).
3. Voeg `werkdocument/Les2_bestanden-om-op-te-ruimen.zip` toe met **Bijvoegen** › **Uploaden** en kies
   **Leerlingen kunnen bestand bekijken**. Een zip-bestand wordt niet omgezet; dat hoeft ook niet.
4. Voeg de lespagina toe met **Link**.

> [!IMPORTANT]
> Voeg het paspoort **niet** toe met **Uploaden** in Classroom. Die knop volgt de Drive-instelling
> niet: het bestand blijft dan een `.docx` (getest op 27-09-2026).

> [!NOTE]
> *Een kopie maken voor elke leerling* kan je alleen kiezen **voordat** je de opdracht post.

| | Opdracht: **Les 2 — Mijn digitaal stageportfolio** |
|---|---|
| **Bijlage 1** | de link naar de lespagina (GitHub Pages) |
| **Bijlage 2** | `Portfoliopaspoort` (Google-document) — **Een kopie maken voor elke leerling** |
| **Bijlage 3** | `Les2_bestanden-om-op-te-ruimen.zip` — **Leerlingen kunnen bestand bekijken** |
| **Punten** | 20 (in Classroom gezet op 27-09-2026) |
| **Deadline** | vrijdag 2 oktober 2026, 20.00 uur |

> [!IMPORTANT]
> De aparte materiaalpost met vijf rommelbestanden uit versie 1 is **niet meer nodig**. Alleen het
> paspoort krijgt *Een kopie maken voor elke leerling*; het zip-bestand deelt de hele klas.

### Afvinklijst vóór de les

- [ ] Versie 2 is gepubliceerd en het Pages-adres toont de nieuwe lespagina.
- [ ] Mijn e-mailadres staat in de instructietekst van de opdracht.
- [ ] De opdracht heeft drie bijlagen, met de juiste instelling per bijlage.
- [ ] Het paspoort is een **Google-document** (geen `.docx` achter de naam), en een testleerling krijgt er een eigen kopie van met de eigen naam in de titel.
- [ ] Een testleerling kan het zip-bestand downloaden en uitpakken.
- [ ] De Dalton-lesfiche staat in je planner (open `dalton-lesfiche.html`, klik op **Kopieer de fiche**, plak).
- [ ] `presentatie.html` opent op de beamer; `N` toont mijn notities, `F` is volledig scherm.

---

## 3. Het verloop van de les

| Fase | Tijd | Wat |
|---|---|---|
| **Instructie** | **10'** | Dia 1–2 lesstart (3'), dia 3–6 demo (5'): ophalen/uitpakken/uploaden en bestand 1 hernoemen, dia 7 *Zo werk je verder* (2') met je e-mailadres op het bord |
| **Keuzewerktijd** | **40'** | Dia 7 blijft staan; de leerlingen werken stap 1 tot 8 af, inleveren inbegrepen. Dia 8 in de laatste minuut. |

Keuzewerktijd = 50 minuten − instructietijd. Zeg aan het einde mondeling dat wie niet klaar is, toch
inlevert. Volledige uitwerking: `lesvoorbereiding.md` §15–17; sprekersnotities: druk op `N`.

**Eerste rondgang, kijk alleen naar twee dingen.** Ze blokkeren allebei alles wat erna komt:

1. Staat de hoofdmap in **Mijn Drive** en niet in de map *Classroom*?
2. Zijn de vijf bestanden van **Downloads** naar **Drive** geraakt?

---

## 4. Verbetersleutel

De leerling levert alleen het **Portfoliopaspoort** in. De mappen bekijk je via *Gedeeld met mij*.

### Deel 2 — de vijf bestanden

| Oude naam | Verwachte nieuwe naam | Map |
|---|---|---|
| `Document zonder titel` | `2026-09-22_activiteitenfiche_herfstslinger_v1` | `02_Activiteiten` (voorbeeld, al ingevuld) |
| `verslag Liam boos DEFINITIEF (2)` | `2026-09-18_observatie_kind-A_v2` | `03_Observaties` |
| `dingen` | `2026-09-22_boodschappenlijst_herfstslinger_v1` | `04_Materiaal` |
| `Kopie van sjabloon reflectie` | `2026-09-21_reflectie_week-1_v1` | `05_Reflectie` |
| `uurrooster okt def` | `2026-10-01_uurrooster_stage_v1` | `01_Stageplaats` |

Kleine verschillen in het middenstuk zijn **goed**. Wat moet kloppen: de datumvorm `JJJJ-MM-DD`,
het versienummer (`v2` bij het verslag, `v1` bij de rest), geen spaties, en geen naam van een kind.

### Korte antwoorden bij de vragen

| Vraag | Waar het om gaat |
|---|---|
| 1 | In **Downloads**, op de computer zelf (lokale opslag). Thuis kan je ze niet openen: ze staan niet in je Drive. |
| 2 | Jaar-maand-dag zet alles vanzelf op volgorde in de tijd; `22-09-2026` sorteert op dag. |
| 3 | De naam van een kind is een persoonsgegeven. Iedereen die op je scherm kijkt, leest de bestandsnaam. Beroepsgeheim geldt ook digitaal: `kind-A`. |
| 4 | Wel: je mappen en bestanden bekijken. Niet: iets veranderen, hernoemen of verwijderen. |
| 5–6 | Exitvragen: geen juist of fout. De vaakst genoemde moeilijkheid wordt de lesstart van les 3. |

### Essentiële fouten — geef hier altijd feedback op

- De naam van het kind staat nog in de bestandsnaam.
- Gedeeld als **Bewerker** of via "Iedereen met de link" in plaats van als **Kijker**.
- De hoofdmap staat in de map *Classroom* in plaats van in *Mijn Drive*.
- Datum als `22-9-26`.
- De bestanden staan nog steeds alleen in Downloads.

---

## 5. Screenshots (optioneel)

`index.html` verwacht vijf schermafbeeldingen in `assets/screenshots/`. Ze zijn **niet verplicht**:
ontbreekt er een, dan laat de pagina die plaats gewoon weg. Open `index.html?leraar` om te zien waar
ze komen. De lijst staat in `assets/screenshots/LEESMIJ.md`.

---

## 6. Het materiaal opnieuw genereren

```bash
python3 "werkdocument/maak_werkdocumenten.py"
```

Dat maakt het paspoort, de vijf rommelbestanden **en** de zip opnieuw aan. Lees eerst de
waarschuwing bovenaan het script: de slechte bestandsnamen en de datumvorm `DD-MM-JJJJ` zijn
lesmateriaal, geen slordigheid.

---

## 7. Leerplandoelen in je jaaroverzicht

`lesdoelen.json` gebruikt nu de klasgroepcode **`3 MW`** (met spatie; in versie 1 stond `3MWb`, en
die code vindt `_tools/update_leerdoelen.py` niet). De echte klasnaam staat in het veld `klasnaam`.

Het blad **3 Maatschappij en welzijn** in `Leerplandoelen 2026-2027.xlsx` bevat sinds 27 september
2026 de doelen uit `Leerplannen_2de_graad_TOINFO_MW_dubbele_finaliteit.md`, dus de zes doelen van
deze les worden meegeteld.

---

## 8. Wat nog moet blijken in de klas

1. **Stap 3 en 4 samen in 15 minuten** (ophalen en hernoemen). Is dat te krap, beperk dan de
   minimumroute tot twee hernoemde bestanden, waaronder het observatieverslag.
2. **Windows en het klembord:** het knipsel uit Knipprogramma plakken met `Ctrl + V` in het
   Google-document zou moeten werken; lukt dat niet, dan bewaart de leerling het knipsel eerst. Dat
   staat in *Hulp nodig?* bij stap 6.
3. **Classroom en de Drive-instelling:** zet het paspoort na het uploaden in Classroom om of niet?
   Zie §2, stap 3.
