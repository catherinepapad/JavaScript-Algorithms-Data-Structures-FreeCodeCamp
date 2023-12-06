function spinalCase(str) {
  let newStr = str.split(/\s|_|(?=[A-Z])/);
  newStr = newStr.join('-').toLowerCase();
  
  return newStr         
}

spinalCase('Teletubbies say Eh-oh');