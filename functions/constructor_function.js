// Question 1 :
function Question(text, answer) {
  this.text = text;
  this.answer = answer;
  this.display = function () {
    console.log("Q: " + this.text);
    console.log("A: " + this.answer);
  };
}

const question1 = new Question("what's your name?", "abc");

question1.display();

// Question 2 :

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

const person1 = new Person("abc", 10);
person1.sayHello();

// Question 3 :
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getDetails = function () {
    return `${this.year} ${this.make} ${this.model}`;
  };
}

const car1 = new Car("tesla", "t1", 2025);
console.log(car1.getDetails());

// Question 4 :
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.summary = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages.`;
  };
}

const book1 = new Book("2025", "author1", 10);
console.log(book1.summary());