# koumajos.github.io

Personal academic website of **Josef Koumar** — network security researcher working on
time series analysis of network traffic.

Live at <https://koumajos.github.io>.

## Structure

```
index.html            Home — bio, metrics, research areas, selected papers, news
publications.html     Full publication list (filterable), open datasets, software
dissertation.html     Doctoral dissertation — abstract, full text, defence slides, reviewers' reports
teaching.html         Courses, tutorials, academic service, work with students
cv.html               Curriculum vitae — experience, education, funded projects
404.html              Not-found page
about|resume|academia|papers|preprints|datasets|workshops.html
                      Redirect stubs kept so old links do not break

assets/css/main.css   Design system: tokens, layout, components, light/dark theme
assets/js/data.js     Publications, datasets and software — the content source
assets/js/publications.js  Renders publication lists and filters
assets/js/site.js     Theme toggle, mobile navigation, print
assets/img/           Portrait, favicon, defence title slide

dissertation/         Dissertation full text, defence slides and the three reviewers' reports (PDF)

publications.bib      BibTeX of all publications (offered for download on the site)
datasets.bib          BibTeX of published datasets
preprints.bib         BibTeX of preprints
pictures/             Personal photo archive
```

## Updating content

**Adding a publication** — append an entry to `PUBLICATIONS` in `assets/js/data.js`
and add the matching BibTeX record to `publications.bib`. Entry fields:

| Field | Meaning |
| --- | --- |
| `type` | `journal`, `conference`, `preprint` or `thesis` — drives the filter chips (the Preprints chip is currently removed from `publications.html`; add it back when a preprint exists) |
| `short` | Badge text, e.g. `CNSM 2025` |
| `quartile` | Optional, e.g. `Q1` |
| `doi`, `url`, `code`, `data` | Optional links rendered under the entry |
| `citations` | Citation count shown as a badge |
| `featured` | `true` puts the paper in *Selected publications* on the home page |
| `abstract` | Optional, shown behind the *Abstract* toggle |

**Citation metrics** are hard-coded in `index.html` and `cv.html`; refresh them from
Google Scholar when they drift.

**Datasets and software** live in the `DATASETS` and `SOFTWARE` arrays of the same file.
A dataset entry defaults to Zenodo; set `source: 'GitHub'` for one hosted elsewhere.

## Local preview

No build step — plain HTML, CSS and JavaScript.

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## License

Code: MIT (see `LICENSE`). Content: © Josef Koumar.
