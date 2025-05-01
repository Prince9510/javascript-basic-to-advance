/*A base class Person stores a person's name and role (e.g., "Student", "Teacher").
A subclass Teacher should inherit from Person and also include a subject property.
A static method getSchoolName() should return "Green Valley High School" without needing an object.
When a Teacher object is created, it should use the parent constructor via super and log the teacher's full info.

Q:
How would you implement this structure so that:

The Teacher class properly initializes all properties using constructor and super,
The getSchoolName() method works without instantiating any objects,
And the teacher's information is displayed upon creation?*/

class Person {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  static getSchoolName() {
    return "Green Valley High School";
  }
}

class Teacher extends Person {
  constructor(name, role, subject) {
    super(name, role);
    this.subject = subject;

    console.log(
      `name : ${this.name} \nrole : ${this.role} \nsubject : ${this.subject}`
    );
  }
}

const t1 = new Teacher("abc", "teacher", "english");
console.log(Teacher.getSchoolName());
