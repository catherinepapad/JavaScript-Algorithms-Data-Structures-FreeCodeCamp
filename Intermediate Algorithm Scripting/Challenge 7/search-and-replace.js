function myReplace(str, before, after) {
  let firstLetterUpper = isUpperCase(before[0]);
  if (firstLetterUpper) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }

  let regex = new RegExp(before); 
  
  return str.replace(regex, after);
}

function isUpperCase(char) {
  return /^[A-Z]+$/.test(char);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");