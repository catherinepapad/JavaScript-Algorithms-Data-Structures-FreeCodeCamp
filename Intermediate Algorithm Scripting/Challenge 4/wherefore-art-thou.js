function whatIsInAName(collection, source) {
  const collectionMatches = [];
  let flag = true;

  for (let i = 0; i < collection.length; i++) {
    for (let sourceProp in source) {
      if (collection[i][sourceProp] !== source[sourceProp]) {
        flag = false;
      }
    }
    if (flag === true) {
      collectionMatches.push(collection[i]);
    } else {
      flag = true;
    } 
  }
  
  return collectionMatches;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });