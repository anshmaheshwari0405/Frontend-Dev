function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Audi", "R8");
const car2 = new Car("BMW", "i3");

car1.getDetails();
car2.getDetails();
