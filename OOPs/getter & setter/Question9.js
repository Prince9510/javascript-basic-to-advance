/*1) Create a base class called Employee.
* It should have:
  * name
  * _baseSalary (private-style)

* Add a getter and setter for baseSalary:

  * Salary must be a number greater than or equal to 1000.
  * If not, show: "Invalid salary amount".
  * Getter returns the salary rounded to 2 decimal places.

2) Create a subclass Manager that extends Employee.

* It should have:
  * _bonus (in dollars)
* Accept bonus in constructor using super() to initialize base class.
* Add a getter and setter for bonus:
  * Only allow bonuses >= 0.
  * If invalid, default to 0.
* Add a getter totalCompensation:
  * Should return baseSalary + bonus.

3) Test:

* Create an Employee with invalid and valid salary.
* Create a Manager, set bonus, and get total compensation.*/

class Employee {
  constructor(name, baseSalary) {
    this.name = name;
    this._baseSalary = baseSalary;
  }
  set baseSalary(salary) {
    if (salary >= 1000) {
      this._baseSalary = salary;
    } else {
      console.log("Invalid salary amount");
    }
  }

  get salary() {
    return this._baseSalary.toFixed(2);
  }
}

class Manager extends Employee {
  constructor(name, baseSalary, bonus) {
    super(name, baseSalary);
    this._bonus = bonus;
  }

  set bonus(amount) {
    if (amount >= 0) {
      this._bonus = amount;
    } else {
      this._bonus = 0;
    }
  }

  get bonus() {
    return this._baseSalary + this._bonus;
  }
}

const manager1 = new Manager("Alice", 2000, 500);
console.log(manager1.salary);
console.log(manager1.bonus);
