function destroyer(arr) {
  let newArr = arguments[0];
  for (var i = 1; i < arguments.length; i++) {

    while(newArr.indexOf(arguments[i]) !== -1) {
      newArr.splice(newArr.indexOf(arguments[i]),1)
    }
  }
  console.log(newArr)
  
  
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);