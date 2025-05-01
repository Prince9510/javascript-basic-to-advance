/*JavaScript Getter and Setter Methods

Definition:
Getter and setter methods in JavaScript are special methods that allow you to define how to access and update the properties of an object. They are part of the ES5 standard and are used to encapsulate the internal logic of an object while providing a clean and controlled way to interact with its properties.

- A getter method is used to retrieve the value of a property.
- A setter method is used to set or update the value of a property.

Syntax: 

Example:*/

const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// Using the getter
console.log(person.fullName); // Output: John Doe

// Using the setter
person.fullName = "Jane Smith";
console.log(person.fullName); // Output: Jane Smith
