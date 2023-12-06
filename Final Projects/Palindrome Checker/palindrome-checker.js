function palindrome(str) {
  let arr2 = str.toLowerCase().replace(/[^A-Za-z0-9]/g,'').split('')
  
  for (let i=0 ; i<Math.floor(arr2.length/2) ; i++) {
    console.log(arr2[i] + arr2[arr2.length-1-i])
    if (arr2[i] !== arr2[arr2.length-1-i]) {
      return false
    }
  }
  return true
}

palindrome("five|\_/|four");