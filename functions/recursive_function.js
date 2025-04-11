// Question 1 : Create a function that returns factorial of a number.

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Question 2 : Create a function that calculates the nth Fibonacci number.

function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8

// Question 3 : Create a function that calculates the sum of an array using recursion.

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([10, 20, 34, 12, 42, 42]));

// Question 4 : Create a function that reverses a string using recursion.

function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("abcde"));

// Question 5 : Create a function that checks if a number is a palindrome using recursion.

function isPalindrome(num) {
  const str = num.toString();
  function checkPalindrome(s, start, end) {
    if (start >= end) {
      return true;
    }
    if (s[start] !== s[end]) {
      return false;
    }
    return checkPalindrome(s, start + 1, end - 1);
  }
  return checkPalindrome(str, 0, str.length - 1);
}
console.log(isPalindrome(525));
