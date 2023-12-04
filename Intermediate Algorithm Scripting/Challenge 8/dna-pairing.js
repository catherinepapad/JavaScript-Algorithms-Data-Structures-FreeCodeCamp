function pairElement(str) {
  let arr = str.split('');
  
  const pairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };

  arr = arr.map(x => [x, pairs[x]]);
  
  return arr;
}

pairElement("GCG");