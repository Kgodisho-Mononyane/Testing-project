function caesarCipher(string, shift) {
    let newString = "";
    let Pattern = /[A-Z]|[a-z]/g;
    
    for (let i = 0; i < string.length; i++) {
    if (string[i].match(Pattern)) {
      let shiftedCode = string.charCodeAt(i) + shift;
      let shiftedChar = String.fromCharCode(shiftedCode);

      //if the character after shift not in range [a-z] || [A - Z] so wrapping
      if (!shiftedChar.match(Pattern)) {
        shiftedChar = String.fromCharCode(shiftedCode - 26);
      }
      newString += shiftedChar;
      continue;
    }
    newString += string[i];
  }
  return newString;
}

module.exports = caesarCipher;