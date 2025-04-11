// Question 1 : Write a function that reverses a string.

const reverseStr = function () {
  let str = "hello";
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  console.log(reverse);
};

reverseStr();

// Question 2 : Write a function that checks if a given string is a palindrome.

const palindrome = function () {
  let palindromeStr = "racecar";
  let result = "";

  for (let i = palindromeStr.length - 1; i >= 0; i--) {
    result += palindromeStr[i];
  }
  if (palindromeStr === result) {
    console.log(`${palindromeStr} are palindrome`);
  } else {
    console.log(`${palindromeStr} are not an palindrome`);
  }
};

palindrome();

// Question 3 : Write a function expression that calculates the area of a circle.

const areaOfCricle = function () {
  let radius = 12;

  let area = 3.14 * (radius * radius);
  console.log(area);
};
areaOfCricle();

// Question 4 :  Write a function expression that finds the factorial of a number

const factorial = function () {
  let num = 5;
  let final_fact = 1;
  for (let i = 5; i > 1; i--) {
    final_fact *= i;
  }
  console.log(final_fact);
};
factorial();

// Question 5 : Write a function expression that finds the largest number in an array.

const largestNumber = function () {
  let arr = [100, 20, 3, 4, 5, 6];
  let large = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  console.log("large element is", large);
};
largestNumber();
