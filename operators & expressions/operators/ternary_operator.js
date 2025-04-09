// ternary_operator

// Example 1
const number = 10;
const result = (number % 2 === 0) ? 'Even' : 'Odd';
console.log(`The number is ${result}.`);

// Example 2
const age = 18;
const access = (age >= 18) ? 'Eligible for license' : 'You are not eligible for license';
console.log(access);

// Example 3
const userInput = null;
const defaultValue = userInput ? userInput : 'Please Assigne a  Value';
console.log(`The value is: ${defaultValue}`);

// Example 4
const temperature = 30;
const weather = (temperature > 25) ? 'Hot' : 'Cold';
console.log(`The weather is ${weather}.`);

// Example 5
const score = 85;
const grade = (score >= 50) ? 'Pass' : 'Fail';
console.log(`You ${grade} the test.`);