// Create a class Rectangle with width and height properties.
// Add a getter area that calculates and returns the area (width * height).
// Make sure area is read-only.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

let rectangle = new Rectangle(10, 5);
console.log(rectangle.area);

rectangle.area = 100;
console.log(rectangle.area);
