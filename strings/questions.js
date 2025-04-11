// Question 1 : Write a function removeVowels that takes a string and removes all vowels (a, e, i, o, u) from it, both uppercase and lowercase.

const removeVowels = (str) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (!"aeiouAEIOU".includes(str[i])) {
      result += str[i];
    }
  }
  return result;
};

console.log(removeVowels("aeiouAEIOUc"));

// Question 2 : Count Vowels in a String

const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};
console.log(countVowels("abcdeia"));

// Question 3 : Reverse a String

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("hello world"));

// Question 4 : Check if a String is a Palindrome

const isPalindrome = (str) => {
  const result = str.replaceAll(",", "").replaceAll(" ", "").toLowerCase();
  return result === result.split("").reverse().join("");
};

console.log(isPalindrome("A man, a plan, a canal, Panama"));

// Question 5 : Find the Longest Word in a String

const findLongestWord = (str) => {
  const words = str.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
