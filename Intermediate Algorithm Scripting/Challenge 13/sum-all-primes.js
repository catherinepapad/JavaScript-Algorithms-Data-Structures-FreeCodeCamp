function sumPrimes(num) {
  let sum = 0;
  let flag = true;

  for (let i=2 ; i<=num ; i++){
    for (let j=2 ; j<i ; j++){
      if (i%j === 0){
        flag = false;
        break
      }
    }
    if (flag === true){
      sum += i;
    } else {
      flag = true;
    }
  }
  
  return sum;
}

sumPrimes(10);