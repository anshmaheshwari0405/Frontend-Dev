class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  applyCoupon(code) {
    const pattern = /^(SAVE|DISC)(\d{1,2})$/;
    const match = code.match(pattern);

    if (!match) {
      return { valid: false, finalTotal: this.getTotal() };
    }

    const discountPercent = Number(match[2]);
    const total = this.getTotal();
    const discountAmount = (total * discountPercent) / 100;
    const finalTotal = total - discountAmount;

    return { valid: true, finalTotal };
  }
}

const cart = new Cart();

cart.addItem("Shoes", 1500, 1);
cart.addItem("T-Shirt", 600, 2);
cart.addItem("Watch", 2000, 1);

const total = cart.getTotal();
console.log("Total:", total);

const couponResult = cart.applyCoupon("SAVE20");

if (couponResult.valid) {
  console.log("Final Total after discount:", couponResult.finalTotal);
} else {
  console.log("Invalid Coupon");
}
