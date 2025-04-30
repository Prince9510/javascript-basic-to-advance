/*Create a base class Account with properties: accountNumber, balance, and a method deposit(amount) that adds money to the account.
Create a subclass SavingsAccount that extends Account and adds a property interestRate.
Add a method addInterest() in SavingsAccount that adds the interest to the balance based on interestRate (use the formula: balance * interestRate).
Create a subclass CheckingAccount that extends Account and has a property overdraftLimit.

Add a method withdraw(amount) in CheckingAccount that:

Allows withdrawal only if the balance is sufficient or the overdraft limit is not exceeded.
If the withdrawal exceeds the balance and overdraft limit, log: "Insufficient funds!".
Finally, create a class Bank that can hold a list of different account types (SavingsAccount, CheckingAccount).
Add a method getTotalAssets() in Bank that sums up the balance of all accounts.*/

class Account {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
}

class SavingsAccount extends Account {
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }
  addInterest() {
    const interest = this.balance * this.interestRate;
    this.balance += interest;
    return interest;
  }
}

class CheckingAccount extends Account {
  constructor(accountNumber, balance, overdraftLimit) {
    super(accountNumber, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (this.balance - amount >= -this.overdraftLimit) {
      this.balance -= amount;
      console.log(`Withdrawal successful. New balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds!");
    }
  }
}

class Bank {
  constructor() {
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }

  getTotalAssets() {
    return this.accounts.reduce((total, account) => total + account.balance, 0);
  }
}

const user = new SavingsAccount(1234567890, 20000, 0.02);
user.deposit(5000);
console.log(user.addInterest());
console.log(`Updated balance: ${user.balance}`);
console.log(user.addInterest());

const check = new CheckingAccount(7894561230, 1000, 500);
check.withdraw(1200);
check.withdraw(500);

const bank = new Bank();
bank.addAccount(user);
bank.addAccount(check);

console.log("Total bank assets:", bank.getTotalAssets());
