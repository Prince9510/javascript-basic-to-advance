// join 

// Question 1 :  What will be the output of this code?

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.join());

// Question 2 :  How would you join this array into a string with | between each item?

const tools = ['hammer', 'wrench', 'screwdriver'];
const result = tools.join(' | ');
console.log(result); 

// Question 3: What is the result of joining the numbers [1, 2, 3] with an empty string ('')?

const result2 = [1, 2, 3].join('');
console.log(result2);

// Question 4 : What is the purpose of the concat() method in JavaScript, and what does it return?

const a = [1, 2];
const b = [3, 4];
const result3 = a.concat(b);
console.log(result3); // [1, 2, 3, 4]

// slice


// Question 5 : Extract a portion of an array from the 2nd to the 4th element:

const arr = [10, 20, 30, 40, 50, 60];
const result4 = arr.slice(1, 4); 
console.log(result4);  

// Question 6 : Get the last 3 elements of an array without modifying the original array

const numbers = [5, 10, 15, 20, 25, 30];
const result5 = numbers.slice(-3);  
console.log(result5); 

// Question 7 :  Create a new array by excluding the first 2 elements of an array

const colors = ["red", "blue", "green", "yellow", "purple"];
const result6 = colors.slice(2);  
console.log(result6);  


// flat

// Question 8 : Flatten a nested array with 2 levels of nesting into a single array

const nestedArr = [1, [2, 3], [4, [5, 6]]];
const result7 = nestedArr.flat(2); 
console.log(result7);  


// Question 9 : Flatten an array of arrays into a single array

const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
const result8 = arrayOfArrays.flat();
console.log(result8); 

// Question 10 : Flatten an array with mixed nested levels (depth 3)

const mixedArr = [1, [2, [3, [4]]], 5];
const result9 = mixedArr.flat(3);  
console.log(result9);  
