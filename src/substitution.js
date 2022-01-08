// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    const letters = [
      "a","b","c","d","e","f","g","h","i","j","k",
      "l","m","n","o","p","q","r","s","t","u","v",
      "w","x","y","z",
    ];   
      
    if (!alphabet) return false 
    if (alphabet.length !== 26) return false

    let codedAlphabet = alphabet.toLowerCase()
    let inputText = input.toLowerCase()

    for (let i = 0; i < codedAlphabet.length; i++) {
      for (let j = i + 1; j < codedAlphabet.length; j++) {
        if (codedAlphabet[i] === codedAlphabet[j]) return false;
      }
    }    

    if (encode) {
      let result = ""
      for (let i = 0; i < inputText.length; i++){
        let character = inputText[i]        
        if (inputText[i] === " "){
          result = result + inputText[i]
        } else {
          let index = letters.indexOf(character)
          result = result + codedAlphabet[index]             
        }
      }
      return result
    }

    if (!encode) {
      let result = ""
      for (let i = 0; i < inputText.length; i++){
        let character = inputText[i]        
        if (inputText[i] === " "){
          result = result + inputText[i]
        } else {
          let index = codedAlphabet.indexOf(character)
          result = result + letters[index]             
        }
      }
      return result
    }
  }  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
