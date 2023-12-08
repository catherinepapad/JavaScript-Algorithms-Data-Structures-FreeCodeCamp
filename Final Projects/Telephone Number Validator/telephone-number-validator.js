function telephoneCheck(str) {
  let newStr = str.replace(/[^A-Za-z0-9]/g,'')

  if (str.length < 10) {
    return false
  } else if (newStr.length === 10 && str.length < 15){
    if (str.length === 10){
      return true
    } else if (str[3] == '-' && str[7] == '-' ){
      return true
    } else if (str[0] == '(' && str[4] == ')'){
      return true
    } else {
      return false
    }
  } else if (newStr.length === 11 & newStr[0] == 1 && str[0] == 1 && str.length < 17){    
    if (str[1] == ' ' && str[2] == '(' && str[6] == ')' && str[7] == ' ' && str[11] == '-'){
      return true
    } else if(str[1] == ' ' && str[5] == '-' && str[9] == '-'){
      return true
    } else if(str[1] == ' ' && str[5] == ' ' && str[9] == ' '){
      return true
    } else if(str[1] == '(' && str[5] == ')' && str[9] == '-'){
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

telephoneCheck("555-555-5555");
