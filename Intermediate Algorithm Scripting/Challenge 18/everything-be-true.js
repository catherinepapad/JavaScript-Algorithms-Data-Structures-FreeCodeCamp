function truthCheck(collection, pre) {

  for (let i=0 ; i<collection.length ; i++){
    if (Boolean(collection[i][pre]) === false) {
      return false
    }
  }
  
  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");