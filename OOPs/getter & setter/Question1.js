//Create a User class where setting name automatically capitalizes the first letter.

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value.charAt(0).toUpperCase() + value.substr(1);
  }
}

let user = new User("abc");
user.name = "xyz";
console.log(user.name);
