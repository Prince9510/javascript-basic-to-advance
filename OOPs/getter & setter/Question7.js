// You are working on an e-commerce site. The user enters a totalAmount for their order. You need to add a 10% discount using a setter,
// but only if the totalAmount is greater than 100. If it’s less than or equal to 100, the price remains unchanged.

class Store {
  constructor(totalAmount) {
    this.totalAmount = totalAmount;
  }

  get totalAmount() {
    return this._totalAmount;
  }

  set totalAmount(amount) {
    if (amount >= 100) {
      console.log(`you got 10% discount, you pay ${(amount * 10) / 100}`);
    } else {
      console.log(`you pay ${amount}`);
    }
  }
}

const customer = new Store(45);
customer.totalAmount;
customer.totalAmount = 500;
