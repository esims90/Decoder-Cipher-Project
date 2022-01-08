// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    let inputText = input.toLowerCase()
    let messageCheck = inputText.split(" ")

    const symbols = [
                  "11","21","31","41","51",
                  "12","22","32","42","52",
                  "13","23","33","43","53",
                  "14","24","34","44","54",
                  "15","25","35","45","55",
                ];
    const letters = [
                  "a","b","c","d","e",
                  "f","g","h","i/j","k",
                  "l","m","n","o","p",
                  "q","r","s","t","u",
                  "v","w","x","y","z",
                ];
    if (encode){
      let result = ""      
      for (let i = 0; i < inputText.length; i++){
        let character = inputText[i]      
        if (character.match(/[a-z]/)){
          if (character === "i" || character === "j"){
            result = result + "42"
          }else{
            result = result + symbols[letters.indexOf(character)]
          }
        }else {
          result = result + character
        }
      }
      return result
    }
for (i=0;i<messageCheck.length;i++){
    if (messageCheck[i].length % 2 !== 0) return false
  } 
    if (!encode) {
      let result = ""
      let inc = 0
      for (let i = 0; i < inputText.length; i=i+inc){
        let character = `${inputText[i]}${inputText[i+1]}`        
        if (inputText[i] === " "){
          inc=1
          result = result + inputText[i]
        } else {
          inc=2
          for (let j = 0; j < symbols.length; j++){
            if (character === symbols[j]){
              result = result + letters[j]                                 
            }
          }              
        }
      }
      return result
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
