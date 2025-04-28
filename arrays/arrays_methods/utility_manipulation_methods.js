// sort

// Question 1 : Sort an array of numbers in ascending order

const numbers = [10, 2, 33, 4, 1, 50];
const result = numbers.sort((a, b) => a - b);
console.log(result);

// Question 2 : Sort an array of strings in alphabetical order

const fruits = ["banana", "apple", "cherry", "date"];
const result2 = fruits.sort();
console.log(result2);

// Question 3 : Sort an array of objects by a property

const people = [
    { name: "John", age: 25 },
    { name: "Amy", age: 30 },
    { name: "David", age: 20 }
];
const result3 = people.sort((a, b) => a.age - b.age);
console.log(result3);


// reverse

// Question 4 : . Reverse an array of numbers:

const number = [1, 2, 3, 4, 5];
const result4 = number.reverse();
console.log(result4);

// Question 5 : Reverse a string without modifying the original string

const str = "hello";
const result5 = str.split("").reverse().join("");
console.log(result5);

// Question 6 : Reverse an array of objects based on a property

const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
];
const result6 = items.reverse();
console.log(result6);
