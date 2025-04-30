/*Question 3 : 
reate a Student class with the following properties:

name (String)
grades (Array of numbers)

The Student class should have the following methods:

addGrade(grade) – Adds a new grade to the student's grades array.
getAverageGrade() – Returns the average grade of the student.
getHighestGrade() – Returns the highest grade the student has achieved.
getDetails() – Returns the student's name and their current average grade.

Create a few student objects and:
Add grades to each student.
Display each student’s name and average grade.*/

class studentDetail {
  constructor(studentName, grade) {
    this.studentName = studentName;
    this.grade = grade;
  }
  addGrade(newGrade) {
    this.grade.push(...newGrade);
  }
  getAverageGrade() {
    const total = this.grade.reduce((acc, grade) => acc + grade, 0);
    return total / this.grade.length;
  }
  getHighestGrade() {
    let high = this.grade[0];
    for (let i = 0; i < this.grade.length; i++) {
      if (this.grade[i] > high) {
        high = this.grade[i];
      }
    }
    console.log("high grade is", high);
  }

  getDetail() {
    console.log(
      `${this.studentName} your Average Grade is ${this.getAverageGrade()}`
    );
  }
}

const raj = new studentDetail("raj", [1000, 20, 700, 444]);
raj.addGrade([1000, 2000, 3000, 5000]);
raj.getAverageGrade();
raj.getDetail();
raj.getHighestGrade();
