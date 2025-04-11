// Question 1: Sum of Only Positive Numbers

let numbers = [10, -5, 20, -3, 7, -1];
let sum = 0;
let i = 0;

while (i < numbers.length) {
  if (numbers[i] > 0) {
    sum += numbers[i];
  }
  i++;
}

console.log("Sum of positive numbers:", sum);

// Question 2: Count of Negative Numbers

let negativeCount = 0;
i = 0;

while (i < numbers.length) {
  if (numbers[i] < 0) {
    negativeCount++;
  }
  i++;
}

console.log("Count of negative numbers:", negativeCount);

// Question 3: Find the Largest Number

let largest = numbers[0];
i = 1;

while (i < numbers.length) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
  i++;
}

console.log("Largest number:", largest);

// Question 4: Reverse the Array

let reversedArray = [];
i = numbers.length - 1;

while (i >= 0) {
  reversedArray.push(numbers[i]);
  i--;
}

console.log("Reversed array:", reversedArray);

// Question 5: Check if All Numbers are Positive

let allPositive = true;
i = 0;

while (i < numbers.length) {
  if (numbers[i] <= 0) {
    allPositive = false;
    break;
  }
  i++;
}

console.log("Are all numbers positive? : ", allPositive);