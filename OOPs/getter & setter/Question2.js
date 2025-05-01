// Create a class Product that has a private _price property.
// Use a setter to ensure the price cannot be set to less than 1.
// Use a getter to return the price with a dollar sign, like $99.

class Product {
  constructor(price) {
    this._price = price;
  }

  get price() {
    return `$${this._price}`;
  }

  set price(value) {
    if (value < 1) {
      console.log("Price must be at least 1");
    } else {
      this._price = value;
    }
  }
}

let item = new Product(50);
console.log(item.price); // $50
item.price = 0; // Price must be at least 1
console.log(item.price); // $50
item.price = 99;
console.log(item.price); // $99
