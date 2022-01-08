// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false

    if (!encode) shift = 0 - shift

    let inputText = input.toLowerCase()
    
    let result = ""
    for (let i = 0; i < inputText.length; i++){
      let letter = inputText[i]      
      if (letter.match(/[a-z]/)){
      let code = inputText.charCodeAt(i) + shift
      while (code > 122) {
        code = (code - 122) + 96
      }
      while (code < 97) {
        code = (code + 122) - 96
      }
      let codedLetter = String.fromCharCode(code)
        result = result + codedLetter
      } else {
        result = result + letter
      }
    }
    return result 
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
