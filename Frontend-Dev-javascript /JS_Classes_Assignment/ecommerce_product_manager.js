class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    const discountAmount = (this.price * percent) / 100;
    this.price = this.price - discountAmount;
  }

  getDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Price: ${this.price} | Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 75000, "Electronics"),
  new Product(2, "Mouse", 7500, "Electronics"),
  new Product(3, "Shoes", 2000, "Fashion"),
  new Product(4, "Chair", 28000, "Furniture"),
];

products[0].applyDiscount(10);
products[1].applyDiscount(5);

const filteredProducts = products.filter((p) => p.price > 15000);

filteredProducts.forEach((p) => console.log(p.getDetails()));
