// Write a function in JavaScript that checks if a string is a palindrome

function palindrome(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  if (reverseStr === str) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("121"));
