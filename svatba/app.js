(function () {
  const body = document.body;
  const start = new Date(body.dataset.weddingStart);

  // --- nav ---
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', e => { if (e.target.tagName === 'A') links.classList.remove('is-open'); });

  // --- countdown ---
  const cd = document.getElementById('countdown');
  function tick() {
    const diff = start - Date.now();
    if (diff <= 0) { cd.innerHTML = '<div><b>Dnes!</b><span>je to tady</span></div>'; return; }
    const d = Math.floor(diff / 864e5), h = Math.floor(diff / 36e5) % 24, m = Math.floor(diff / 6e4) % 60, s = Math.floor(diff / 1e3) % 60;
    const forms = { d: ['den', 'dny', 'dní'], h: ['hodina', 'hodiny', 'hodin'], m: ['minuta', 'minuty', 'minut'], s: ['sekunda', 'sekundy', 'sekund'] };
    const pick = (n, f) => n === 1 ? f[0] : (n >= 2 && n <= 4 ? f[1] : f[2]);
    [['d', d], ['h', h], ['m', m], ['s', s]].forEach(([k, n]) => {
      cd.querySelector('[data-cd=' + k + ']').textContent = n;
      cd.querySelector('[data-u=' + k + ']').textContent = pick(n, forms[k]);
    });
  }
  tick(); setInterval(tick, 1000);

  // --- easter egg: klik na „&“ ukáže komiksové bubliny, po 3 s (nebo dalším kliku) zase zmizí ---
  const egg = document.getElementById('egg');
  if (egg) {
    const wrap = egg.closest('.names');
    let timer = null;
    const set = on => {
      wrap.classList.toggle('is-funny', on);
      egg.setAttribute('aria-pressed', String(on));
      wrap.querySelectorAll('.bubble').forEach(b => b.setAttribute('aria-hidden', String(!on)));
      clearTimeout(timer);
      if (on) timer = setTimeout(() => set(false), 3000);
    };
    egg.addEventListener('click', () => set(!wrap.classList.contains('is-funny')));
  }

  // --- calendar ---
  // texty jsou v šifrovaném index.html (data-cal-*), app.js je veřejný
  const title = body.dataset.calTitle || '';
  const location = body.dataset.calLocation || '';
  const details = body.dataset.calDetails || '';
  const fmt = d => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const end = new Date(start.getTime() + 12 * 36e5);
  document.getElementById('btn-gcal').href =
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=' + encodeURIComponent(title) +
    '&dates=' + fmt(start) + '/' + fmt(end) +
    '&details=' + encodeURIComponent(details) +
    '&location=' + encodeURIComponent(location);
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//svatba//cs',
    'BEGIN:VEVENT',
    'UID:svatba-' + fmt(start) + '@koumar',
    'DTSTAMP:' + fmt(new Date()),
    'DTSTART:' + fmt(start), 'DTEND:' + fmt(end),
    'SUMMARY:' + title, 'LOCATION:' + location, 'DESCRIPTION:' + details,
    'BEGIN:VALARM', 'TRIGGER:-P7D', 'ACTION:DISPLAY', 'DESCRIPTION:Za týden je svatba!', 'END:VALARM',
    'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:Zítra je svatba!', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR'
  ].join('\r\n');
  document.getElementById('btn-ics').href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics);

  // --- RSVP form ---
  const form = document.getElementById('rsvp-form');
  const status = document.getElementById('form-status');
  const url = body.dataset.rsvpUrl;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    status.className = 'form__status';
    if (!form.checkValidity()) { form.reportValidity(); return; }
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.web) return; // honeypot
    delete data.web;
    if (!url) { status.textContent = 'Formulář ještě není napojený, napište nám prosím e-mail.'; status.classList.add('is-error'); return; }
    const btn = form.querySelector('button[type=submit]');
    btn.disabled = true; status.textContent = 'Odesílám…';
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      status.textContent = data.ucast === 'ano' ? 'Děkujeme, těšíme se na vás!' : 'Děkujeme za zprávu, bude nám to líto.';
      status.classList.add('is-ok');
      form.reset();
    } catch (err) {
      status.textContent = 'Odeslání se nepovedlo. Zkuste to znovu, nebo nám napište e-mail.';
      status.classList.add('is-error');
    } finally { btn.disabled = false; }
  });

  // --- boční pásy louky jen mezi úvodní loukou a patičkou ---
  const edges = document.querySelectorAll('.meadow--hero, .meadow--footer');
  if ('IntersectionObserver' in window && edges.length) {
    const seen = new Map();
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => seen.set(en.target, en.isIntersecting));
      const anyEdge = [...seen.values()].some(Boolean);
      const heroEl = document.querySelector('.meadow--hero');
      const pastHero = heroEl.getBoundingClientRect().bottom < 0;
      body.classList.toggle('show-strips', pastHero && !anyEdge);
    }, { threshold: 0 });
    edges.forEach(el => io.observe(el));
    window.addEventListener('scroll', () => {
      const heroEl = document.querySelector('.meadow--hero');
      const pastHero = heroEl.getBoundingClientRect().bottom < 0;
      const anyEdge = [...seen.values()].some(Boolean);
      body.classList.toggle('show-strips', pastHero && !anyEdge);
    }, { passive: true });
  }
})();
