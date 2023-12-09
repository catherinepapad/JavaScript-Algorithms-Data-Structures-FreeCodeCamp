function checkCashRegister(price, cash, cid) {
  const coins = {
    'ONE HUNDRED' : 100,
    'TWENTY' : 20,
    'TEN' : 10,
    'FIVE' : 5,
    'ONE' : 1,
    'QUARTER' : 0.25,
    'DIME' : 0.1,
    'NICKEL' : 0.05,
    'PENNY' : 0.01
  };
  
  let initialRem = cash - price;
  let rem = initialRem;
  rem = Math.round(rem * 100) / 100;

  let cashInDrawer = 0;
  for (let i=0 ; i<cid.length ; i++){
    cashInDrawer += Number(cid[i][1]); 
  }

  if (cashInDrawer < rem){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (cashInDrawer == rem){
    return {status: "CLOSED", change: cid}
  } else {
    let changeArr = [];
    let index = 8;
    for (let unit in coins){
      console.log()
      let tempSum=0; 
      let currentUnit = cid[index][1];
      while (rem >= coins[unit] && currentUnit > 0){
        tempSum += coins[unit];
        rem -= coins[unit];
        rem = Math.round(rem * 100) / 100;
        currentUnit -= coins[unit];
        if (currentUnit === 0){
          break
        }
      }
      if (tempSum>0){
        let tempArr = [unit, tempSum];
        changeArr.push(tempArr);
      }
      index -= 1;
    }
    let sum = 0
    for (let i=0 ; i<changeArr.length ; i++){
      sum += changeArr[i][1];
    }
    if (sum < initialRem){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else {
      return {status: "OPEN", change: changeArr}
    }
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);