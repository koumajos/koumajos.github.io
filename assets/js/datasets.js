// Convert LaTeX special characters to Unicode
function latexToUnicode(str) {
  if (!str) return '';
  
  // First, handle nested braces patterns like {\v{C}}
  const replacements = [
    // Czech characters with nested braces
    [/\{\\v\{C\}\}/g, 'Č'],
    [/\{\\v\{c\}\}/g, 'č'],
    [/\{\\v\{S\}\}/g, 'Š'],
    [/\{\\v\{s\}\}/g, 'š'],
    [/\{\\v\{Z\}\}/g, 'Ž'],
    [/\{\\v\{z\}\}/g, 'ž'],
    [/\{\\v\{R\}\}/g, 'Ř'],
    [/\{\\v\{r\}\}/g, 'ř'],
    [/\{\\v\{D\}\}/g, 'Ď'],
    [/\{\\v\{d\}\}/g, 'ď'],
    [/\{\\v\{T\}\}/g, 'Ť'],
    [/\{\\v\{t\}\}/g, 'ť'],
    [/\{\\v\{N\}\}/g, 'Ň'],
    [/\{\\v\{n\}\}/g, 'ň'],
    // Accents with nested braces
    [/\{\\'\{a\}\}/g, 'á'],
    [/\{\\'\{A\}\}/g, 'Á'],
    [/\{\\'\{e\}\}/g, 'é'],
    [/\{\\'\{E\}\}/g, 'É'],
    [/\{\\'\{i\}\}/g, 'í'],
    [/\{\\'\{I\}\}/g, 'Í'],
    [/\{\\'\{o\}\}/g, 'ó'],
    [/\{\\'\{O\}\}/g, 'Ó'],
    [/\{\\'\{u\}\}/g, 'ú'],
    [/\{\\'\{U\}\}/g, 'Ú'],
    [/\{\\'\{y\}\}/g, 'ý'],
    [/\{\\'\{Y\}\}/g, 'Ý'],
    // Simple patterns without outer braces
    [/\\v\{C\}/g, 'Č'],
    [/\\v\{c\}/g, 'č'],
    [/\\v\{S\}/g, 'Š'],
    [/\\v\{s\}/g, 'š'],
    [/\\v\{Z\}/g, 'Ž'],
    [/\\v\{z\}/g, 'ž'],
    [/\\v\{R\}/g, 'Ř'],
    [/\\v\{r\}/g, 'ř'],
    [/\\v\{D\}/g, 'Ď'],
    [/\\v\{d\}/g, 'ď'],
    [/\\v\{T\}/g, 'Ť'],
    [/\\v\{t\}/g, 'ť'],
    [/\\v\{N\}/g, 'Ň'],
    [/\\v\{n\}/g, 'ň'],
    [/\\'\{a\}/g, 'á'],
    [/\\'\{A\}/g, 'Á'],
    [/\\'\{e\}/g, 'é'],
    [/\\'\{E\}/g, 'É'],
    [/\\'\{i\}/g, 'í'],
    [/\\'\{I\}/g, 'Í'],
    [/\\'\{o\}/g, 'ó'],
    [/\\'\{O\}/g, 'Ó'],
    [/\\'\{u\}/g, 'ú'],
    [/\\'\{U\}/g, 'Ú'],
    [/\\'\{y\}/g, 'ý'],
    [/\\'\{Y\}/g, 'Ý'],
    [/\\r\{u\}/g, 'ů'],
    [/\\r\{U\}/g, 'Ů'],
  ];
  
  let result = str;
  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement);
  }
  
  return result;
}

// BibTeX parser
function parseBibTeX(bibtexString) {
  const entries = [];
  
  // Split by @ to get individual entries
  const rawEntries = bibtexString.split('@').filter(e => e.trim().length > 0);
  
  rawEntries.forEach(rawEntry => {
    const entry = {};
    
    // Extract entry type and key
    const firstLine = rawEntry.split('\n')[0];
    const typeKeyMatch = firstLine.match(/(\w+)\{([^,]+),/);
    if (!typeKeyMatch) return;
    
    entry.type = typeKeyMatch[1];
    entry.key = typeKeyMatch[2];
    
    // Extract fields - support multi-line values
    const fieldPattern = /(\w+)\s*=\s*\{([^}]+)\}/gs;
    let match;
    
    while ((match = fieldPattern.exec(rawEntry)) !== null) {
      const fieldName = match[1].toLowerCase();
      const fieldValue = match[2].trim();
      entry[fieldName] = fieldValue;
    }
    
    entries.push(entry);
  });
  
  return entries;
}

// Load and display datasets
async function loadDatasets() {
  try {
    const response = await fetch('datasets.bib');
    const bibtexText = await response.text();
    
    const datasets = parseBibTeX(bibtexText);
    
    // Get the container
    const container = document.getElementById('datasets-container');
    if (!container) {
      console.error('Container #datasets-container not found');
      return;
    }
    
    // Group by year
    const byYear = {};
    datasets.forEach(dataset => {
      const year = dataset.year || 'Unknown';
      if (!byYear[year]) byYear[year] = [];
      byYear[year].push(dataset);
    });
    
    // Sort years descending
    const years = Object.keys(byYear).sort((a, b) => b - a);
    
    // Generate HTML
    container.innerHTML = '';
    container.style.display = 'block';
    
    years.forEach(year => {
      // Add year header
      const yearHeader = document.createElement('div');
      yearHeader.style.marginTop = '40px';
      yearHeader.style.marginBottom = '20px';
      yearHeader.innerHTML = `<h3 class="h3" style="color: var(--orange-yellow-crayola); font-size: 24px;">${year}</h3>`;
      container.appendChild(yearHeader);
      
      byYear[year].forEach(dataset => {
        const datasetDiv = document.createElement('div');
        datasetDiv.style.marginBottom = '25px';
        
        // Get dataset info
        const venue = dataset.howpublished || 'Dataset';
        const url = dataset.url || '#';
        const authors = latexToUnicode(dataset.author || '');
        const title = latexToUnicode(dataset.title || '');
        
        datasetDiv.innerHTML = `
          <a href="${url}" target="_blank" style="display: block; text-decoration: none;">
            <div style="padding: 20px; background: var(--eerie-black-2); border: 1px solid var(--jet); border-radius: 14px;">
              <h3 style="margin-bottom: 12px; font-size: 18px; line-height: 1.4; color: var(--white-2);">${title}</h3>
              ${authors ? `<p style="margin-bottom: 10px; color: var(--light-gray-70); font-size: 15px; line-height: 1.5;">${authors}</p>` : ''}
              <p style="margin-bottom: 12px; color: var(--orange-yellow-crayola); font-size: 15px; font-weight: 500;">${venue}</p>
            </div>
          </a>
        `;
        
        container.appendChild(datasetDiv);
      });
    });
    
  } catch (error) {
    console.error('Error loading datasets:', error);
    const container = document.getElementById('datasets-container');
    if (container) {
      container.innerHTML = '<div>Error loading datasets. Please check console.</div>';
    }
  }
}

// Load datasets when the page loads
document.addEventListener('DOMContentLoaded', loadDatasets);
