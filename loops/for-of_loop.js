// 1. Iterate over an array of numbers and print each number
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// 2. Iterate over a string and print each character
const text = "hello";
for (const char of text) {
  console.log(char);
}

// 3. Iterate over an array of objects and print a specific property
const users = [
  { name: "a", age: 25 },
  { name: "b", age: 30 },
  { name: "c", age: 35 },
];

for (const user of users) {
  console.log(user.name);
}

// 4. Iterate over a Set and print each value
const uniqueNumbers = new Set([10, 20, 30, 40]);
for (const value of uniqueNumbers) {
  console.log(value);
}

// 5. Iterate over an object and print each key-value pair
const userRoles = {
  name1: "a1",
  name2: "b1",
  name3: "c1",
};

for (const key in userRoles) {
  console.log(key, ":", userRoles[key]);
}
