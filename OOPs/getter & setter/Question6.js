// You have an object with a price property. You want to ensure that the price can only be set to a multiple of 10. If a user tries to
// set the price to a value that is not a multiple of 10, it should revert to the previous value.

class Product {
  constructor(price) {
    this._price = price;
  }
  get price() {
    return this._price;
  }

  set price(p) {
    if (p % 10 === 0) {
      return (this._price = p);
    } else {
      console.log(`${p} is cannot multiply of 10`);
    }
  }
}

let product = new Product(100);
console.log(product.price);

product.price = 25;
console.log(product.price);

product.price = 150;
console.log(product.price);
