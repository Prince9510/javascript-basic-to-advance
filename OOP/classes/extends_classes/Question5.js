/*Create a base class Person with properties: name and age.
Create a subclass Student that extends Person and adds properties: rollNumber and marks (an array of numbers).
Add a method calculateAverage() in Student that returns the average of all marks.
Add a method hasPassed() that returns true if the average is greater than or equal to 40, otherwise false.*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, rollNumber, marks = []) {
    super(name, age);
    this.rollNumber = rollNumber;
    this.marks = marks;
  }
  calculateAverage() {
    let total = this.marks.reduce((acc, marks) => acc + marks, 0);
    return (total / this.marks.length).toFixed(2);
  }
  hasPassed() {
    if (this.calculateAverage() >= 40) {
      console.log("pass");
    } else {
      console.log("fail");
    }
  }
}

const std = new Student("abc", 14, 2, [10, 20, 30, 40, 100, 60, 70]);
console.log(std.calculateAverage());
std.hasPassed();
