/* Renders publication lists from assets/js/data.js */

'use strict';

(function () {
  const ME = 'Josef Koumar';

  const ICON = {
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>',
    doi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
    data: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>'
  };

  const TYPE_LABEL = {
    journal: 'Journal article',
    conference: 'Conference paper',
    preprint: 'Preprint',
    thesis: 'Thesis'
  };

  const esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  const authorLine = function (authors) {
    return authors
      .map(function (a) {
        return a === ME ? '<span class="me">' + esc(a) + '</span>' : esc(a);
      })
      .join(', ');
  };

  const linkRow = function (pub, id) {
    const parts = [];
    const href = pub.url || (pub.doi ? 'https://doi.org/' + pub.doi : null);

    if (href) {
      parts.push('<a href="' + esc(href) + '" target="_blank" rel="noopener">' + ICON.link + 'Publisher</a>');
    }
    if (pub.doi) {
      parts.push('<a href="https://doi.org/' + esc(pub.doi) + '" target="_blank" rel="noopener">' + ICON.doi + 'DOI</a>');
    }
    if (pub.code) {
      parts.push('<a href="' + esc(pub.code) + '" target="_blank" rel="noopener">' + ICON.code + 'Code</a>');
    }
    if (pub.data) {
      parts.push('<a href="' + esc(pub.data) + '" target="_blank" rel="noopener">' + ICON.data + 'Dataset</a>');
    }
    if (pub.abstract) {
      parts.push(
        '<button type="button" data-abstract-toggle aria-expanded="false" aria-controls="' + id + '">' +
        ICON.chevron + 'Abstract</button>'
      );
    }
    return parts.length ? '<div class="pub-links">' + parts.join('') + '</div>' : '';
  };

  const tagRow = function (pub) {
    const tags = [];
    const cls = pub.type === 'journal' ? 'tag tag-journal' : 'tag';
    tags.push('<span class="' + cls + '">' + esc(pub.short || TYPE_LABEL[pub.type]) + '</span>');
    if (pub.quartile) tags.push('<span class="tag tag-q1">' + esc(pub.quartile) + ' journal</span>');
    if (pub.citations > 0) {
      tags.push('<span class="tag tag-cite">' + pub.citations + ' citation' + (pub.citations === 1 ? '' : 's') + '</span>');
    }
    return '<div class="tags">' + tags.join('') + '</div>';
  };

  const pubHTML = function (pub, index) {
    const id = 'abstract-' + index;
    const href = pub.url || (pub.doi ? 'https://doi.org/' + pub.doi : null);
    const title = href
      ? '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(pub.title) + '</a>'
      : esc(pub.title);
    const venue = esc(pub.venue) + (pub.details ? ', ' + esc(pub.details) : '') + ', ' + pub.year;

    return (
      '<li class="pub" data-type="' + esc(pub.type) + '">' +
        tagRow(pub) +
        '<h3 class="pub-title">' + title + '</h3>' +
        '<p class="pub-authors">' + authorLine(pub.authors) + '</p>' +
        '<p class="pub-venue">' + venue + (pub.note ? ' · ' + esc(pub.note) : '') + '</p>' +
        linkRow(pub, id) +
        (pub.abstract ? '<div class="pub-abstract" id="' + id + '" hidden>' + esc(pub.abstract) + '</div>' : '') +
      '</li>'
    );
  };

  /* ------------------------------------------------------ full list --- */

  const listEl = document.getElementById('publication-list');

  const render = function (filter) {
    const items = filter === 'all'
      ? PUBLICATIONS
      : PUBLICATIONS.filter(function (p) { return p.type === filter; });

    if (!items.length) {
      listEl.innerHTML = '<p class="empty-state">No publications in this category yet.</p>';
      return;
    }

    const years = [];
    const byYear = {};
    items.forEach(function (p) {
      if (!byYear[p.year]) { byYear[p.year] = []; years.push(p.year); }
      byYear[p.year].push(p);
    });
    years.sort(function (a, b) { return b - a; });

    let index = 0;
    listEl.innerHTML = years.map(function (year) {
      const entries = byYear[year].map(function (p) { return pubHTML(p, index++); }).join('');
      return (
        '<section class="year-group">' +
          '<h2 class="year-label">' + year + '</h2>' +
          '<ul class="pub-list">' + entries + '</ul>' +
        '</section>'
      );
    }).join('');
  };

  if (listEl) {
    render('all');

    const filters = document.getElementById('publication-filters');
    if (filters) {
      // annotate counts
      filters.querySelectorAll('[data-filter]').forEach(function (btn) {
        const value = btn.dataset.filter;
        const n = value === 'all'
          ? PUBLICATIONS.length
          : PUBLICATIONS.filter(function (p) { return p.type === value; }).length;
        btn.insertAdjacentHTML('beforeend', '<span class="count">' + n + '</span>');
      });

      filters.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-filter]');
        if (!btn) return;
        filters.querySelectorAll('[data-filter]').forEach(function (b) {
          b.setAttribute('aria-pressed', String(b === btn));
        });
        render(btn.dataset.filter);
      });
    }
  }

  /* ------------------------------------------------------- selected --- */

  const featuredEl = document.getElementById('featured-publications');
  if (featuredEl) {
    const featured = PUBLICATIONS.filter(function (p) { return p.featured; });
    featuredEl.innerHTML = featured.map(function (p, i) { return pubHTML(p, 'f' + i); }).join('');
  }

  /* -------------------------------------------------- abstract toggle --- */

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-abstract-toggle]');
    if (!btn) return;
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    if (!panel) return;
    const open = panel.hidden;
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
  });

  /* -------------------------------------------- datasets and software --- */

  const datasetsEl = document.getElementById('dataset-list');
  if (datasetsEl && typeof DATASETS !== 'undefined') {
    datasetsEl.innerHTML = DATASETS.map(function (d) {
      return (
        '<li><a class="card card-link" href="' + esc(d.url) + '" target="_blank" rel="noopener">' +
          '<h3>' + esc(d.title) + '</h3>' +
          '<p>' + esc(d.text) + '</p>' +
          '<div class="card-meta"><span>Zenodo · ' + d.year + '</span><span>Open access</span></div>' +
        '</a></li>'
      );
    }).join('');
  }

  const softwareEl = document.getElementById('software-list');
  if (softwareEl && typeof SOFTWARE !== 'undefined') {
    softwareEl.innerHTML = SOFTWARE.map(function (s) {
      return (
        '<li><a class="card card-link" href="' + esc(s.url) + '" target="_blank" rel="noopener">' +
          '<h3>' + esc(s.title) + '</h3>' +
          '<p>' + esc(s.text) + '</p>' +
          '<div class="card-meta"><span>' + esc(s.linkLabel) + '</span></div>' +
        '</a></li>'
      );
    }).join('');
  }
})();
