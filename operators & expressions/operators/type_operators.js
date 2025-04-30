// Type Operators

// typeof operator - determines the type of a variable or expression
console.log(typeof 42); // "number"
console.log(typeof 'Hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are a type of object)
console.log(typeof function() {}); // "function"

// instanceof operator - checks if an object is an instance of a specific class or constructor
class Animal {}
class Dog extends Animal {}

const myDog = new Dog();

console.log(myDog instanceof Dog); // true
console.log(myDog instanceof Animal); // true
console.log(myDog instanceof Array); // false 