// Question 1 : Write a function that removes all properties from an object whose values are strings shorter than 5 characters.

let obj = {
  name: "abc",
  city: "sdfbsdfsdfxyz",
};

for (key in obj) {
  if (typeof obj[key] === "string" && obj[key].length < 5) {
    console.log(obj[key]);
  }
}

// Question 2: Write a function that counts the number of properties in an object.

function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties(obj)); // Example usage

// Question 3: Write a function that checks if an object has a specific property.

function hasProperty(obj, property) {
  return obj.hasOwnProperty(property);
}

console.log(hasProperty(obj, "name")); // Example usage
