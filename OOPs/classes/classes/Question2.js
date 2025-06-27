/*Question 2 : 
Create a BankAccount class with the following properties:
accountHolder (String)
balance (Number)

The BankAccount class should have the following methods:
deposit(amount) – Adds the specified amount to the balance.
withdraw(amount) – Subtracts the specified amount from the balance (make sure balance doesn't go below 0).
getBalance() – Returns the current balance of the account.

Create a new account and demonstrate:
Depositing money.
Withdrawing money.
Checking the balance after each transaction.*/

class BankAccount {
  constructor(holder, balance) {
    this.holder = holder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }

  showBalance() {
    console.log(`${this.holder} Your balance is ${this.balance}`);
  }
}

const abc = new BankAccount("abc", 1000);
abc.deposit(5000);
abc.withdraw(1000);
abc.showBalance();
