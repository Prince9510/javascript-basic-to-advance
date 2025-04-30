/*Question 2 : 
Create a Product class with the following properties:

name (String)
price (Number)
quantity (Number)

The Product class should have the following methods:

restock(amount) – Adds the given amount to the product’s quantity.
sell(amount) – Decreases the quantity by the given amount (but not below 0).
getTotalValue() – Returns the total value of that product in stock (price * quantity).
getDetails() – Returns the product name, quantity, and total value.

Create multiple product objects and:
Perform restocking and selling.
Calculate and display the total inventory value.*/

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  restock(amount) {
    this.quantity += amount;
    console.log(`${amount} units added. New quantity: ${this.quantity}`);
  }

  sell(amount) {
    if (amount > this.quantity) {
      console.log(
        `cannot sell ${amount} units. only ${this.quantity} in stock.`
      );
    } else {
      this.quantity -= amount;
      console.log(`${amount} units sold. remaining quantity: ${this.quantity}`);
    }
  }

  getTotalValue() {
    return this.price * this.quantity;
  }

  getDetails() {
    console.log(
      `${this.name} | quantity: ${
        this.quantity
      } | total value: ${this.getTotalValue()}`
    );
  }
}

const product1 = new Product("laptop", 1000, 5);
const product2 = new Product("phone", 500, 10);

product1.getDetails();
product1.restock(3);
product1.sell(2);
product1.getDetails();

console.log("\n");

product2.getDetails();
product2.sell(4);
product2.restock(5);
product2.getDetails();
