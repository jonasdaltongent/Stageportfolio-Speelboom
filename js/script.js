/**
 * Mijn digitaal stageportfolio (De Speelboom) — script.js
 * Werkt op index.html (instellingen via data-attributen op <body>).
 * - één stap tegelijk tonen + vorige/volgende
 * - vinkjes en huidige stap bewaren in localStorage (enkel vinkjes, geen persoonsgegevens)
 * - voortgangsbalk + afsluitmelding
 * - theoriekaart openen/sluiten
 * - woordenlijst (klik op een onderstreept woord)
 * - mini-test met directe feedback (wordt niet bewaard)
 * - screenshot-plaatsen: tonen de afbeelding alleen als het bestand bestaat
 * Overgenomen uit de reeks Tekstverwerking (NovaDepot); alleen de woordenlijst is nieuw.
 * Geen externe bibliotheken.
 */
(function () {
  'use strict';

  var body = document.body;
  var PREFIX = body.getAttribute('data-storage') || 'speelboom_portfolio_';
  var params = new URLSearchParams(window.location.search);
  var teacherMode = params.has('leraar');
  if (teacherMode) body.classList.add('teacher');

  /* ---------- Opslag (veilig: werkt ook als localStorage geblokkeerd is) ---------- */
  function store(key, value) {
    try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch (e) { /* geen opslag beschikbaar */ }
  }
  function load(key, fallback) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  }

  /* ---------- 1. Stappen ---------- */
  var panes = Array.prototype.slice.call(document.querySelectorAll('.pane'));
  var stepButtons = Array.prototype.slice.call(document.querySelectorAll('.stepper button[data-step]'));
  var order = panes.map(function (p) { return p.id.replace('pane-', ''); });

  function showStep(key, focus) {
    if (order.indexOf(key) === -1) key = order[0];
    panes.forEach(function (p) { p.classList.toggle('active', p.id === 'pane-' + key); });
    stepButtons.forEach(function (b) {
      if (b.getAttribute('data-step') === key) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
    });
    store('stap', key);
    if (history.replaceState) history.replaceState(null, '', '#' + key + (teacherMode ? '' : ''));
    window.scrollTo(0, 0);
    if (focus) {
      var h = document.querySelector('#pane-' + key + ' h1, #pane-' + key + ' h2');
      if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    }
  }

  stepButtons.forEach(function (b) {
    b.addEventListener('click', function () { showStep(b.getAttribute('data-step'), true); });
  });
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-goto]');
    if (!t) return;
    e.preventDefault();
    closeTheory();
    showStep(t.getAttribute('data-goto'), true);
  });

  var start = window.location.hash ? window.location.hash.slice(1) : load('stap', order[0]);
  showStep(start, false);

  /* ---------- 2. Vinkjes en voortgang ---------- */
  var checks = Array.prototype.slice.call(document.querySelectorAll('input.js-check'));
  var saved = load('vinkjes', []);
  checks.forEach(function (cb) { cb.checked = saved.indexOf(cb.id) !== -1; });

  var fill = document.getElementById('progressFill');
  var label = document.getElementById('progressLabel');
  var finish = document.getElementById('finish');

  function updateProgress() {
    var required = checks.filter(function (c) { return !c.hasAttribute('data-optional'); });
    var done = required.filter(function (c) { return c.checked; }).length;
    var pct = required.length ? Math.round(done / required.length * 100) : 0;
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = done + ' van ' + required.length;
    if (fill && fill.parentElement) fill.parentElement.setAttribute('aria-valuenow', String(pct));
    if (finish) finish.classList.toggle('show', done === required.length && required.length > 0);

    // stappenbalk: groen vinkje als het "Klaar?"-vakje van die stap aan staat
    stepButtons.forEach(function (b) {
      var box = document.getElementById('klaar-' + b.getAttribute('data-step'));
      b.classList.toggle('done', !!(box && box.checked));
    });
  }

  checks.forEach(function (cb) {
    cb.addEventListener('change', function () {
      var ids = checks.filter(function (c) { return c.checked; }).map(function (c) { return c.id; });
      store('vinkjes', ids);
      updateProgress();
    });
  });
  updateProgress();

  var reset = document.getElementById('btnReset');
  if (reset) {
    reset.addEventListener('click', function () {
      if (!window.confirm('Wil je alle vinkjes op deze pagina wissen? Je werkdocument verandert niet.')) return;
      checks.forEach(function (c) { c.checked = false; });
      store('vinkjes', []);
      updateProgress();
    });
  }

  /* ---------- 3. Theoriekaart ---------- */
  var theory = document.getElementById('theory');
  var scrim = document.getElementById('scrim');
  var openers = document.querySelectorAll('[data-open-theory]');
  var lastFocus = null;

  function isDocked() { return window.matchMedia('(min-width: 1280px)').matches; }
  function openTheory(anchor) {
    if (!theory) return;
    if (!isDocked()) {
      lastFocus = document.activeElement;
      theory.classList.add('open');
      if (scrim) scrim.classList.add('show');
      theory.setAttribute('aria-hidden', 'false');
    }
    if (anchor) {
      var target = document.getElementById(anchor);
      if (target) target.scrollIntoView({ block: 'start' });
    }
    var closeBtn = theory.querySelector('.theory-close');
    if (closeBtn && !isDocked()) closeBtn.focus();
  }
  function closeTheory() {
    if (!theory || isDocked()) return;
    theory.classList.remove('open');
    if (scrim) scrim.classList.remove('show');
    theory.setAttribute('aria-hidden', 'true');
    if (lastFocus) lastFocus.focus();
  }
  Array.prototype.forEach.call(openers, function (b) {
    b.addEventListener('click', function (e) { e.preventDefault(); openTheory(b.getAttribute('data-open-theory')); });
  });
  if (scrim) scrim.addEventListener('click', closeTheory);
  var closeBtn = theory ? theory.querySelector('.theory-close') : null;
  if (closeBtn) closeBtn.addEventListener('click', closeTheory);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeTheory(); hidePop(); } });
  if (theory && !isDocked()) theory.setAttribute('aria-hidden', 'true');
  // links binnen de theoriekaart (inhoudstafel)
  if (theory) {
    theory.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#th-"]');
      if (!a) return;
      e.preventDefault();
      var t = document.getElementById(a.getAttribute('href').slice(1));
      if (t) t.scrollIntoView({ block: 'start' });
    });
  }

  /* ---------- 4. Woordenlijst ---------- */
  var GLOSSARY = {
    'bestand': 'Eén document, foto of lijst op de computer. Een bestand heeft altijd een naam.',
    'map': 'Een plaats waarin je bestanden bewaart. Zoals een lade in een kast.',
    'hoofdmap': 'De grote map bovenaan. Daarin zitten al je submappen.',
    'submap': 'Een map die in een andere map zit.',
    'mappenstructuur': 'De manier waarop jouw mappen in elkaar zitten: welke map in welke map.',
    'google drive': 'De online opslag van je schoolaccount. Wat daar staat, blijft bewaard en staat op elk toestel waarop je aanmeldt.',
    'lokale opslag': 'De opslag in de Chromebook zelf (de map Downloads). Die is alleen op dat ene toestel, en de school kan die leegmaken.',
    'downloads': 'De map op de Chromebook zelf. Daar komen je screenshots en je gedownloade bestanden terecht. Dit is lokale opslag.',
    'bestanden-app': 'De app op de Chromebook waarin je je mappen ziet: Mijn bestanden (het toestel) en Google Drive (online).',
    'bestandsnaam': 'De naam van een bestand. Een goede naam zegt meteen wat erin zit, zonder het bestand te openen.',
    'naamafspraak': 'De vaste manier waarop iedereen bestanden benoemt. Zo vindt ook een collega jouw bestand terug.',
    'versie': 'De hoeveelste keer dat je een document hebt aangepast: v1, v2, v3. Zo weet je welk bestand het recentste is.',
    'sorteren': 'De bestanden op volgorde zetten, bijvoorbeeld op naam of op datum.',
    'delen': 'Iemand anders toegang geven tot jouw map of bestand. Jij blijft de eigenaar.',
    'lezer': 'Iemand die je bestand mag openen en lezen, maar niets mag veranderen.',
    'reageerder': 'Iemand die je bestand mag lezen en er opmerkingen bij mag zetten, maar de tekst zelf niet mag veranderen.',
    'bewerker': 'Iemand die alles mag veranderen in je bestand: aanpassen, hernoemen en zelfs verwijderen.',
    'eigenaar': 'Degene die het bestand heeft gemaakt. De eigenaar beslist wie het mag zien.',
    'anonimiseren': 'De naam van een kind of zorgvrager weglaten of vervangen, bijvoorbeeld door kind-A. Zo herkent een buitenstaander de persoon niet.',
    'beroepsgeheim': 'Wat je op stage over een kind of zorgvrager te weten komt, deel je niet met anderen. Dat geldt ook digitaal.',
    'portfolio': 'De verzameling van alles wat jij maakt en leert op stage: fiches, verslagen, foto\u2019s en reflecties.',
    'screenshot': 'Een foto van je scherm. Op een Chromebook: Ctrl + de toets Toon vensters.',
    'werkdocument': 'Jouw eigen Google-document uit Classroom: het Portfoliopaspoort. Dit bestand lever je in.',
    'lespagina': 'Deze website. Hier lees je wat je moet doen. De lespagina lever je niet in.',
    'classroom': 'Google Classroom: daar staan je opdrachten, je werkdocument en de knop Inleveren.'
  };
  var pop = null;
  function hidePop() { if (pop) { pop.remove(); pop = null; } }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('.term');
    if (!t) { if (pop && !e.target.closest('.term-pop')) hidePop(); return; }
    var key = (t.getAttribute('data-term') || t.textContent).toLowerCase().trim();
    var text = GLOSSARY[key];
    if (!text) return;
    hidePop();
    pop = document.createElement('div');
    pop.className = 'term-pop';
    pop.setAttribute('role', 'tooltip');
    pop.innerHTML = '<strong>' + t.textContent + '</strong><br>' + text;
    document.body.appendChild(pop);
    var r = t.getBoundingClientRect();
    var left = Math.min(window.scrollX + r.left, window.scrollX + document.documentElement.clientWidth - 320);
    pop.style.left = Math.max(8, left) + 'px';
    pop.style.top = (window.scrollY + r.bottom + 8) + 'px';
  });

  /* ---------- 5. Mini-test ---------- */
  document.querySelectorAll('.quiz-q').forEach(function (q) {
    var fb = q.querySelector('.feedback');
    q.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        q.querySelectorAll('button').forEach(function (b) { b.classList.remove('right', 'wrong'); });
        var ok = btn.hasAttribute('data-right');
        btn.classList.add(ok ? 'right' : 'wrong');
        if (fb) fb.textContent = ok ? (q.getAttribute('data-ok') || 'Juist!') : (q.getAttribute('data-nok') || 'Nog niet. Probeer opnieuw.');
      });
    });
  });

  /* ---------- 6. Screenshot-plaatsen ---------- */
  document.querySelectorAll('figure.shot').forEach(function (fig) {
    var file = fig.getAttribute('data-shot');
    var caption = fig.getAttribute('data-caption') || '';
    if (!file) return;
    var img = new Image();
    img.alt = fig.getAttribute('data-alt') || caption;
    img.onload = function () {
      fig.innerHTML = '';
      fig.appendChild(img);
      if (caption) { var c = document.createElement('figcaption'); c.textContent = caption; fig.appendChild(c); }
      fig.classList.add('loaded');
    };
    img.onerror = function () {
      if (teacherMode) fig.innerHTML = '📷 <strong>Screenshot-plaats</strong>: bewaar als <code>assets/screenshots/' + file + '</code><br>' + (fig.getAttribute('data-alt') || '');
    };
    img.src = 'assets/screenshots/' + file;
  });
})();
