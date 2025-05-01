/*There is a base class Employee that stores name and salary.
A subclass Manager inherits from Employee.

You want:

Every time a Manager is created, their name and salary should be passed to the parent class using super.
A static method getCompanyPolicy() should return a fixed string describing the company rules.
The constructor should log the manager's name and salary upon creation.

Q:
How would you structure the class hierarchy using constructor, super, and static so that:
Manager objects inherit properties from Employee,
The static method is accessible without creating an object,
And you enforce initialization of inherited data in the constructor?*/

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  static getCompanyPolicy() {
    return "every saturday will be holiday!";
  }
}

class Manager extends Employee {
  constructor(name, salary) {
    super(name, salary);
    console.log(this.name);
    console.log(this.salary);
  }
}

const user = new Manager("abc", 10000);
console.log(Manager.getCompanyPolicy());
