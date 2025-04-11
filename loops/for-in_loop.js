// Question 1: Iterate over the properties of an object
let person = { name: "a", age: 25, city: "surat" };
for (let key in person) {
  console.log(key, ":", person[key]);
}

// Question 2: Iterate over the elements of an array
let fruits = ["apple", "banana", "mango"];

for (let index in fruits) {
  console.log(index, ":", fruits[index]);
}

// Question 3: Iterate over a string's characters
let word = "hello";
for (let index in word) {
  console.log(index, ":", word[index]);
}

// Question 4: Iterate over nested objects
let car = {
  brand: "Tesl",
  model: "t1",
  features: {
    speed: "350km/h",
    transmission: "automatic",
  },
};
console.log("\nCar details:");
for (let key in car) {
  if (typeof car[key] === "object") {
    console.log(key, ":");
    for (let innerKey in car[key]) {
      console.log(innerKey, ":", car[key][innerKey]);
    }
  } else {
    console.log(key, ":", car[key]);
  }
}

// Question 5: Iterate over an array of objects

let students = [
  { name: "sharma", grade: "A" },
  { name: "varma", grade: "B" },
  { name: "xyz", grade: "C" },
];
for (let index in students) {
  console.log(students[index].name, students[index].grade);
}

// Question 6 : print the key and value of an object

const marks = {
  a: "78",
  b: "45",
  c: "85",
  d: "45",
};

for (let val in marks) {
  console.log("key", val, "value", marks[val]);
}
