function dropElements(arr, func) {
  let initLength = arr.length;
  for (let i=0 ; i< initLength; i++){
    if (func(arr[0]) === false){
       arr.shift(); 
    } else {
      break
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });