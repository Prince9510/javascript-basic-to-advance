class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  detail() {
    console.log(
      `Your Detail\nname : ${this.name} \nage : ${this.age} \ncity : ${this.city}`
    );
  }
}

class Student extends Person {
  constructor(name, age, city) {
    super(name, age, city);
  }
  getDetail() {
    super.detail();
  }
}

const ex = new Student("abc", 18, "delhi");
ex.getDetail();
