// Question 1 : what is datatypes?

// => A data type in programming (including JavaScript) is the classification of data that tells the computer what kind of 
//    value a variable is holding and what operations can be performed on it.

// two type of datatypes 
// 1) premitive datatypes
// 2) non-premitive datatypes

// 1) premitive datatypes

// => Number	  : 42, 3.14
// => String	  : "Hello", 'World'
// => Boolean	  : true, false
// => Undefined  : A variable declared but not assigned a value
// => Null	     : A variable explicitly set to "no value"
// => Symbol	  : Symbol("id") – unique and immutable
// => BigInt	  : 12345678901234567890n – for very large integers


// Number 
let a = 10; //only number

// String
let name = "abc"

// Boolean
let b = true // only true or false value in boolean
let c = false // only true or false value in boolean

// Undefined
let d; // A variable declared but not assigned a value 

//Null
let e = null;  // A variable explicitly set to "no value"

// Symbol
const mySymbol = Symbol('symbol');

// BigInt
const BigIntExample = 57845896541;

// 2) non-premitive datatypes

// => Object	: { name: "abc", age: 10 }
// => Array	   : [1, 2, 3]
// => Function : function() { return "Hello"; }

// Object 
const student = {
   name : "abc",
   roll_number : 20,
   std : "10th",
}

// Array
const arr = [1,2,3,4,5];

// Function
function sum(value1,value2){
   return value1+value2;
}

// console.log(sum(10,20));