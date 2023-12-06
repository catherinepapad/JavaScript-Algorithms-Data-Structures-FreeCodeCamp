function translatePigLatin(str) {
  let arr = str.split('');
  if(isVowel(arr[0]) === true){
    arr.push('way');
  } else {
    let i = 1;
    while (isVowel(arr[0]) === false && i<=arr.length){
      arr.push(arr[0]);
      arr.shift();
      i++;
    }
    arr.push('ay');
  }
  let newStr = arr.join('');
  return newStr;
}

function isVowel(x) {
  if (x =='a' || x == 'e' || x =='i' || x == 'o' || x == 'u') {
    return true
  } else {
    return false
  }
}

translatePigLatin("consonant");
console.log(translatePigLatin("rhythm"))