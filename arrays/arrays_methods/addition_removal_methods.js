// push()

// Question 1 : Use push() to add a new number to the end of an array.

let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers); 

// Question 2 : Push multiple values into an array using push().

numbers.push(6, 7, 8);
console.log(numbers);

// Question 3 : Use push() to add a string element to an empty array and print the result.

let emptyArray = [];

emptyArray.push("Hello, World!");
console.log(emptyArray);


// pop()



// Question 4 : Use pop() to remove the last element from an array.

let fruits = ["apple", "banana", "cherry"];
fruits.pop();
console.log(fruits);

// Question 5 : Remove the last element from an array and store it in a variable, then print the array and the removed value.

let colors = ["red", "green", "blue"];
let removedColor = colors.pop();
console.log(colors);
console.log(removedColor);

// Question 6 : Use pop() in a loop to keep removing elements from an array until it's empty.

let animals = ["cat", "dog", "rabbit"];
while (animals.length > 0) {
    let removedAnimal = animals.pop();
    console.log(`Removed: ${removedAnimal}`);
}
console.log(animals);



// unshift()


// Question 7 : Use unshift() to add a number at the beginning of an array.

let numbersArray = [2, 3, 4];
numbersArray.unshift(1);
console.log(numbersArray);

// Question 8 : Add multiple string elements to the start of an array using unshift().

let stringArray = ["world"];
stringArray.unshift("hello", "beautiful");
console.log(stringArray);

// Question 9 : Use unshift() to add an element to an empty array and print the result.

let emptyArray2 = [];
emptyArray2.unshift("First Element");
console.log(emptyArray2);



// shift()


// Question 10 : Use shift() to remove the first element from an array.

let cities = ["New York", "Los Angeles", "Chicago"];
cities.shift();
console.log(cities);

// Question 11 : Remove the first element from an array, store it in a variable, and print the array and removed value.

let countries = ["USA", "Canada", "Mexico"];
let removedCountry = countries.shift();
console.log(countries);
console.log(removedCountry);

// Question 12 : Use shift() in a loop to empty an array from the front.

let numbersList = [10, 20, 30, 40];
while (numbersList.length > 0) {
    let removedNumber = numbersList.shift();
    console.log(`Removed: ${removedNumber}`);
}
console.log(numbersList);


// splice()


// Question 13 : Use splice() to add a new element at index 2 of an array.

let fruitsArray = ["apple", "banana", "cherry", "date"];
fruitsArray.splice(2, 0, "blueberry");
console.log(fruitsArray);

// Question 14 : Use splice() to remove 2 elements starting from index 1 in an array.

let colorsArray = ["red", "green", "blue", "yellow", "purple"];
let removedColors = colorsArray.splice(1, 2);
console.log(colorsArray);
console.log(removedColors);

// Question 15 : Use splice() to replace an element at index 2 with a new value.

let animalsArray = ["cat", "dog", "rabbit", "hamster"];
animalsArray.splice(2, 1, "parrot");
console.log(animalsArray);



// slice()


// Question 16 : Use slice() to get the first 3 elements of an array.

let numbersSlice = [1, 2, 3, 4, 5];
let firstThree = numbersSlice.slice(0, 3);
console.log(firstThree);

// Question 17 : Use slice() to get a sub-array from the 2nd to the 4th element of an array.

let subArray = numbersSlice.slice(1, 4);
console.log(subArray);

// Question 18 : Use slice() to create a shallow copy of an array.

let shallowCopy = numbersSlice.slice();
console.log(shallowCopy);
