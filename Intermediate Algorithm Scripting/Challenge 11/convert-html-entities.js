function convertHTML(str) {
  let arr = str.split('');
  
  let html = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&apos;'
  };
  
  arr = arr.map(x => html[x] || x);

  return arr.join('');
}

convertHTML("Dolce & Gabbana");