/* Shared behaviour: theme toggle, mobile navigation, dynamic bits. */

'use strict';

/* ------------------------------------------------------------- theme --- */

(function themeToggle() {
  const root = document.documentElement;

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-theme-toggle]');
    if (!btn) return;

    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = root.getAttribute('data-theme') || (systemDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';

    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (err) { /* storage blocked */ }
  });
})();

/* --------------------------------------------------------------- nav --- */

(function mobileNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  const mq = window.matchMedia('(max-width: 800px)');

  const sync = function () {
    if (mq.matches) {
      nav.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    } else {
      nav.hidden = false;
    }
  };

  sync();
  mq.addEventListener('change', sync);

  toggle.addEventListener('click', function () {
    const open = nav.hidden;
    nav.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
  });
})();

/* ---------------------------------------------------------- footer yr --- */

(function footerYear() {
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

/* ------------------------------------------------------------- print --- */

(function printPage() {
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-print]')) window.print();
  });
})();
