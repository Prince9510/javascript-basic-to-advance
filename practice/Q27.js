function countVowels(str) {
  let count = 0;
  let vowels = [];

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
      vowels.push(str[i]);
    }
  }

  return "total number of vowels " + count + " and vowels are " + vowels;
}

console.log(countVowels("hellooo"));
