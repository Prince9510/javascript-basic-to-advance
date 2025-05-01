// Create a class BankAccount with a balance property.
// Whenever the balance is updated using a setter, it should log the new balance to the console.
// Example: account.balance = 2000 should log New balance: 2000.

class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }
  get balance() {
    return this._balance;
  }
  set balance(amount) {
    this._balance = amount;
    console.log(`your new balance is ${amount}`);
  }
}

const user = new BankAccount(7000);
user.balance = 4000;
console.log(user.balance);
