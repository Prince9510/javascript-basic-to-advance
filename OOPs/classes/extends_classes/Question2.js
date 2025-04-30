/*1.Create a base class Employee with properties name and salary.
2.Create a subclass Manager that extends Employee and adds a team array.
3.Add a method addToTeam(employee) that allows the manager to add employees to their team.
4.Create another subclass Director that extends Manager and has a method promote(employee) that increases the given employee's salary by 20%.
5.Make sure constructors correctly initialize using super.*/

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, team = []) {
    super(name, salary);
    this.team = team;
  }

  addToTeam(members) {
    this.team.push(members);
  }
  showTeam() {
    console.log(
      `Your detail \nName: ${this.name} \nSalary: ${
        this.salary
      } \nTeam Members: ${this.team.join(", ")}`
    );
  }
}

class Director extends Manager {
  promote(employee) {
    employee.salary *= 1.2;
  }
}

const m = new Manager("abc", 500);
m.addToTeam("e1");
m.addToTeam("e2");
m.addToTeam("e3");
m.showTeam();
