// Question 1 : Create a function that takes an array and returns the count of even numbers.

const evenNumberCount = (arr) => {
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }

  return count;
};

console.log(evenNumberCount([100, 2, 3, 4, 52, 6]));

// Question 2 : Create a function that takes a string and returns the count of vowels.

const vowelCount = (str) => {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
};

console.log(vowelCount("Hello World")); // Output: 3

// Question 3 : Create a function that takes an array and returns the sum of all numbers.

const sumOfNumbers = (arr) => {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
};

console.log(sumOfNumbers([1, 2, 3, 4, 5])); // Output: 15

// Question 4 : Create an arrow function that takes two numbers and returns their product.

const product = (a, b) => {
  return a * b;
};

console.log(product(3, 4));

// Question 5 : find missing numbers from an array

function miss(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}

console.log(miss([1, 2, 3, 5]));

