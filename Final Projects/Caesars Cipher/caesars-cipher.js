function rot13(str) {
  let arr = str.split('');
  for (let i=0 ; i<arr.length ; i++){
    if (arr[i].charCodeAt(0) <= 90 && arr[i].charCodeAt(0) >= 65) {
      if (arr[i].charCodeAt(0)+13 <= 90 && arr[i].charCodeAt(0)+13 >= 60){
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0)+13);
      } else if (arr[i].charCodeAt(0)+13 > 90) {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0)+13-26);
      } else if (arr[i].charCodeAt(0)+13 < 65){
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0)+13+26);
      }
    }
  }
  
  return arr.join('');
}

rot13("SERR PBQR PNZC");