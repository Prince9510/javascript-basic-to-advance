/*A base class User that accepts name and email via its constructor.
A subclass Instructor that:
Inherits from User using super,
Accepts an additional courses array in the constructor,
Automatically assigns a unique instructorId to each new instructor using a static counter.
A static method getInstructorCount() should return the total number of instructors created so far.
On creation, the constructor should log the instructor's name, email, assigned ID, and number of courses.

Q:

How would you structure this using:
A parent constructor (User)
A child constructor using super
A static property to track the count of instructors
A static method to access that count*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Instructor extends User {
  static instructorCount = 0;
  constructor(name, email, courses) {
    super(name, email);
    this.courses = courses;
    this.instructorId = ++Instructor.instructorCount;
    console.log(
      `Instructor Created: \nName: ${this.name}, \nEmail: ${this.email},\nID: ${this.instructorId}, \nCourses: ${this.courses.length}`
    );
  }
  static getInstructorCount() {
    return Instructor.instructorCount;
  }
}

const i1 = new Instructor("Alice", "alice@example.com", ["Math", "Physics"]);
const i2 = new Instructor("Bob", "bob@example.com", ["English"]);
const i3 = new Instructor("Bob", "bob@example.com", ["English","math","science"]);

console.log("Total Instructors:", Instructor.getInstructorCount());
