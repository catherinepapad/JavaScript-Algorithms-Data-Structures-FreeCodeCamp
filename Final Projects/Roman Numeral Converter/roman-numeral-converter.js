function convertToRoman(num) {
  const numerals = {
    'M' : 1000,
    'CM' : 900,
    'D' : 500,
    'CD' : 400,
    'C' : 100,
    'XC' : 90,
    'L' : 50,
    'XL' : 40,
    'X' : 10,
    'IX' : 9,
    'V' : 5,
    'IV' : 4,
    'I' : 1
  };

  let arr = [];
  let rem = num;
  for (let numeral in numerals) {
    //console.log(numeral)
    if (num >= numerals[numeral]) {
      while (rem >= numerals[numeral]) {
        arr.push(numeral);
        rem -= numerals[numeral];
      }
    }
  } 
  return arr.join('')
  }

convertToRoman(36);