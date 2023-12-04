function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  for (let i=0 ; i<arr.length ; i++){
    let a = earthRadius + arr[i].avgAlt;
    let T = Math.round(2*Math.PI*Math.sqrt(Math.pow(a,3) / GM));
    arr[i].orbitalPeriod = T;
    delete arr[i].avgAlt;
  
  }

  console.log(arr)
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);