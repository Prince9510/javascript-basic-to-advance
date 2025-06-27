// 1. Function Declarations

greet(); // it's works

function greet() {
  console.log("Hello!");
} // Hello

// 2. Function Expressions (with var)
sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log("Hi!");
};

//3. Function Expressions (with let / const)

wave(); // ReferenceError

let wave = function () {
  console.log("Waving!");
};

// 4. Variables

console.log(a); // undefined
var a = 10;

// 5. Class Declarations
const obj = new MyClass(); // ReferenceError

class MyClass {
  constructor() {
    console.log("Created");
  }
}

// 6. Arrow Functions

hello(); // TypeError

var hello = () => console.log("Hello!");

// 7. Named Function Inside Function Expressions

const fn = function sayName() {
  console.log("Inside sayName");
};

sayName(); // ReferenceError
