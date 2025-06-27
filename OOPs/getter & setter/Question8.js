/*1) Create a base class User:

It has properties: name and _email.
Add a getter and setter for email:
 * The setter should only allow emails that contain "@" and ".".
 * If invalid, it should log: "Invalid email address".
 * The getter should return the email in lowercase.

2) Extend the User class into a new class called PremiumUser.

* Add a property _membershipLevel.
* Accept membershipLevel in the constructor (use super() to call the parent class).
* Add a getter and setter for membershipLevel.
  * Setter should only accept "gold", "silver", or "platinum".
  * If invalid, set it to "silver" by default.

3) In both classes, use this to refer to instance properties properly.

4) Create one BasicUser and one PremiumUser.
Test the following:

* Setting invalid and valid emails.
* Getting email.
* Setting invalid and valid membership levels.
* Getting membership level.*/

class User {
  constructor(name, email) {
    this.name = name;
    this._email = email;
  }

  set email(email) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // regex are includes
      this._email = email;
    } else {
      console.log("Invalid email address");
    }
  }
  get email() {
    return this._email.toLowerCase();
  }
}

class PremiumUser extends User {
  constructor(name, email, membershipLevel) {
    super(name, email);
    this._membershipLevel = membershipLevel;
  }

  set membershipLevel(premium) {
    if (premium === "silver" || premium === "gold" || premium === "platinum") {
      this._membershipLevel = premium;
    } else {
      this._membershipLevel = "silver";
    }
  }
  get membershipLevel() {
    return this._membershipLevel;
  }
}

const user1 = new User("Alice", "wldghjdfghj");
console.log(user1.email);

user1.email = "abc@example.com";
console.log(user1.email);

const premiumUser = new PremiumUser("xyz", "xyz@mail.com", "gold");
console.log(premiumUser.email);
console.log(premiumUser.membershipLevel);

premiumUser.membershipLevel = "diamond";
console.log(premiumUser.membershipLevel);

premiumUser.email = "abcabc";
console.log(premiumUser.email);

console.log(premiumUser.name);
console.log(premiumUser.email);
console.log(premiumUser.membershipLevel);
