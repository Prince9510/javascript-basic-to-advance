// Question 1 : Create a function that returns the sum of two numbers.

function sumOfNumbers() {
  let a = 10;
  let b = 20;

  console.log(a + b);
}

sumOfNumbers();

// Question 2 : Write a function that checks if a number is even or odd.

function evenOrOdd() {
  let num = 3;
  if (num % 2 === 0) {
    console.log(`${num} are even`);
  } else {
    console.log(`${num} are odd`);
  }
}

evenOrOdd();

// Question 3 : Write a function that takes a string and returns it in uppercase.

function lowerToUppercase() {
  let str = "this is an uppercase";
  console.log(str.toUpperCase());
}

lowerToUppercase();

// Question 4 : Create a function to find the maximum of three numbers.

function findMax() {
  let num1 = 1500,
    num2 = 200,
    num3 = 1000;

  if (num1 > num2) {
    if (num1 > num3) {
      console.log(`${num1} are biggest`);
    } else {
      console.log(`${num3} are biggest`);
    }
  } else {
    if (num2 > num3) {
      console.log(`${num2} are biggest`);
    } else {
      console.log(`${num3} are biggest`);
    }
  }
}

findMax();