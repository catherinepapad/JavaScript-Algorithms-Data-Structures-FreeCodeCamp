function smallestCommons(arr) {
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);
  let i=1;
  let flag = true;

  while(1){
    let possibleCM = i*maxNum;
    for (let k=minNum ; k<maxNum ; k++){
      if (possibleCM%k !== 0){
        flag = false;
        break
      }
    }
    if (flag === false){
      flag = true;
        i++;
    } else if (flag === true){
      return possibleCM
    }
  }
}

smallestCommons([1,5]);
