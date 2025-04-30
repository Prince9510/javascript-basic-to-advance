// Objects in JavaScript
// An object is a collection of key-value pairs. Keys are also called properties, and values can be of any data type,
// including other objects or functions.

// Syntax for creating an object
const objectName = {
  key1: "value1",
  key2: "value2",
  method1: function () {
    console.log("This is a method.");
  },
};

// Example 1: Simple Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
  },
};

console.log(person.firstName);
console.log(person["lastName"]);
person.greet(); 

const car = {
  brand: "abc",
  model: "23",
  specifications: { 
    color: "Red",
    range: "100 miles",
    autopilot: true,
  },
  displayInfo: function () {
    console.log(
      `This is a ${this.specifications.color} ${this.brand} ${this.model}.`
    );
  },
};

console.log(car.specifications.color);
car.displayInfo();