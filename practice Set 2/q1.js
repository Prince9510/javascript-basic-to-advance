// Write a function in JavaScript that takes a string as input and returns a new string with all the vowels removed

function removeVowels(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeVowels("aeioucvbnm"));
