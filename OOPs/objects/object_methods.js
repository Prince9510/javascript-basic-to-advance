// 1. Object.keys()
// Definition: Returns an array of the object's own enumerable property names (keys).
const user1 = { name: "Alice", age: 25 };
console.log(Object.keys(user1)); // ["name", "age"]

// 2. Object.values()
// Definition: Returns an array of the object's own enumerable property values.
const user2 = { name: "Alice", age: 25 };
console.log(Object.values(user2)); // ["Alice", 25]

// 3. Object.entries()
// Definition: Returns an array of the object's own enumerable [key, value] pairs.
const user3 = { name: "Alice", age: 25 };
console.log(Object.entries(user3)); 
// [["name", "Alice"], ["age", 25]]

// 4. Object.assign()
// Definition: Copies properties from source objects to a target object (shallow copy).
const a = { x: 1 };
const b = { y: 2 };
const merged = Object.assign({}, a, b);
console.log(merged); // { x: 1, y: 2 }

// 5. Object.hasOwn()
// Definition: Checks if an object has the given key as its own property.
const user4 = { name: "Alice" };
console.log(Object.hasOwn(user4, "name")); // true

// 6. Object.freeze()
// Definition: Freezes the object, making it immutable.
const config = { debug: true };
Object.freeze(config);
config.debug = false;
console.log(config.debug); // true

// 7. Object.fromEntries()
// Definition: Converts a list of key-value pairs into an object.
const entries = [["name", "Alice"], ["age", 25]];
console.log(Object.fromEntries(entries)); // { name: "Alice", age: 25 }

// 8. Object.create()
// Definition: Creates a new object with the specified prototype object.
const userBase = { greet() { return "Hello"; } };
const admin = Object.create(userBase);
console.log(admin.greet()); // "Hello"