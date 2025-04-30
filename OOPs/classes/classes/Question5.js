/*Question 5 : 
Create a Task class with the following properties:

title (String)
description (String)
isCompleted (Boolean)

The Task class should have the following methods:

markComplete() – Marks the task as completed.
editTask(newTitle, newDescription) – Updates the task's title and description.
getDetails() – Returns the task’s title, description, and completion status.

Create a TaskManager class that:

Stores a list of tasks (an array).
Has a method addTask(task) to add a new task.
Has a method removeTask(title) to remove a task by its title.
Has a method listIncompleteTasks() to show only tasks that are not completed.
Has a method getAllTasks() to show all tasks.
*/
class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.isCompleted = false;
  }

  markComplete() {
    this.isCompleted = true;
  }

  editTask(newTitle, newDescription) {
    this.title = newTitle;
    this.description = newDescription;
  }

  getDetails() {
    return `${this.title} - ${this.description} [${
      this.isCompleted ? "Completed" : "Incomplete"
    }]`;
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(title) {
    this.tasks = this.tasks.filter((task) => task.title !== title);
  }

  listIncompleteTasks() {
    return this.tasks.filter((task) => !task.isCompleted);
  }

  getAllTasks() {
    return this.tasks;
  }
}

const task1 = new Task("Learn JavaScript", "Practice classes and objects.");
const task2 = new Task("Do Homework", "Math and Science assignments.");
const task3 = new Task("Buy Groceries", "Milk, eggs, and bread.");

const myTaskManager = new TaskManager();

myTaskManager.addTask(task1);
myTaskManager.addTask(task2);
myTaskManager.addTask(task3);

task1.markComplete();

task2.editTask("Do Homework", "Math, Science, and English");

console.log("All Tasks:");
myTaskManager.getAllTasks().forEach((task) => console.log(task.getDetails()));

console.log("\nIncomplete Tasks:");
myTaskManager
  .listIncompleteTasks()
  .forEach((task) => console.log(task.getDetails()));

myTaskManager.removeTask("Buy Groceries");

console.log("\nTasks after removing 'Buy Groceries':");
myTaskManager.getAllTasks().forEach((task) => console.log(task.getDetails()));
