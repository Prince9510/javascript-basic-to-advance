class House {
  constructor(color, rooms) {
    this.color = color;
    this.rooms = rooms;
  }

  showDetails() {
    console.log(`This house is ${this.color} and has ${this.rooms} rooms.`);
  }
}

// Creating objects using the class
const house1 = new House("blue", 3);
const house2 = new House("red", 5);

house1.showDetails();
house2.showDetails();