function sumFibs(num) {
  let num1 = 1;
  let num2 = 1;
  let sum = 2;
  
  while (1) {
    let fibNum = fibonacci(num1, num2);
    if (fibNum > num){
      break
    } else {
      if (fibNum%2 ===1){
        sum += fibNum;
      }
    }
    num1 = num2;
    num2 = fibNum;
  }

  return sum;
}

function fibonacci(num1, num2){
  return num1+num2
}

sumFibs(4);