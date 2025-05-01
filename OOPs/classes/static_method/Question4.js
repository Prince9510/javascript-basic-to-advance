/*
The base class Vehicle should store brand, model, and year.

A subclass ElectricVehicle should:
Inherit from Vehicle using super,
Accept an additional batteryCapacity (in kWh),
Automatically assign a unique evID to each electric vehicle using a static counter.
A static method getTotalEVs() should return how many electric vehicles have been registered.

On creation, the constructor should print a formatted string like:
"EV Registered: Tesla Model 3 (2022), Battery: 75kWh, ID: EV-1"

Q:
How would you implement this system using:
constructor and super for inheritance,
A static property for counting total EVs,
A static method to return the total EV count,
A constructor that formats the output on registration?
*/

class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

class ElectricVehicle extends Vehicle {
  static evCount = 0; 

  constructor(brand, model, year, batteryCapacity) {
    super(brand, model, year);
    this.batteryCapacity = batteryCapacity;
    this.evID = ++ElectricVehicle.evCount; 

    console.log(
      `EV Registered: ${this.brand} ${this.model} (${this.year}), Battery: ${this.batteryCapacity}kWh, ID: ${this.evID}`
    );
  }

  static getTotalEVs() {
    return ElectricVehicle.evCount;
  }
}

const ev1 = new ElectricVehicle("Tesla", "Model 3", 2022, 75);
const ev2 = new ElectricVehicle("Nissan", "Leaf", 2023, 40);

console.log("Total EVs Registered:", ElectricVehicle.getTotalEVs());
