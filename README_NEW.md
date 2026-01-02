# Josef Koumar - Personal Portfolio Website

Osobní portfolio webová stránka postavená na vCard Personal Portfolio šabloně.

## Struktura webu

Web je nyní rozdělen na více samostatných HTML stránek pro lepší správu:

- **index.html** - Úvodní stránka s automatickým přesměrováním na about.html
- **about.html** - O mně, výzkumné oblasti a současné role
- **resume.html** - Vzdělání, pracovní zkušenosti a dovednosti
- **academia.html** - Výzkumné projekty, organizace konferencí a výuka
- **publications.html** - Vědecké publikace, datasety a workshopy (s filtrováním)
- **blog.html** - Blog příspěvky a aktuality
- **contact.html** - Kontaktní formulář a mapa

## Navigace

Každá stránka obsahuje:
- Společný sidebar s kontaktními informacemi
- Navigační menu s odkazy na všechny sekce
- Konzistentní design podle vCard šablony

## Použité technologie

- HTML5
- CSS3 (vlastní styly v `assets/css/custom.css`)
- JavaScript (navigace a interaktivita v `assets/js/script.js`)
- Ionicons 5.5.2
- Google Fonts (Poppins)

## Deployment

Pro nasazení na GitHub Pages:
1. Commitněte všechny změny
2. Pushněte do main branch
3. GitHub Pages automaticky nasadí index.html, který přesměruje na about.html

## Úpravy obsahu

Pro úpravu obsahu jednotlivých sekcí upravte příslušné HTML soubory:
- Osobní informace → about.html
- CV a dovednosti → resume.html
- Akademická činnost → academia.html
- Publikace → publications.html
- Blog příspěvky → blog.html
- Kontakt → contact.html

## License

MIT License - viz původní šablona od codewithsadee/vcard-personal-portfolio
