function addTogether() {
  const [firstArg, secondArg] = arguments;
  if (arguments.length == 2) {
    if (typeof firstArg === 'number' && typeof secondArg === 'number') {
      return firstArg + secondArg;
    } else {
      return undefined
    } 
  } else if (arguments.length === 1 && typeof firstArg === 'number') {
    function addNew(newArg) {
      if (typeof newArg === 'number'){
        return newArg + firstArg;
      } else if ( typeof newArg !== 'number'){
        return undefined
      }
    }
    return addNew
  }
  
  return undefined;
}

addTogether(2,3);