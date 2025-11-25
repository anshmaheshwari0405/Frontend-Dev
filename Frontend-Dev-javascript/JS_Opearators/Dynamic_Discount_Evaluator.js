const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

let totalValue = cart.reduce((sum, item) => sum + item.price, 0);

let discount = cart.map((item) => {
  let itemDiscount = 0;
  if (item.category === "electronics") {
    itemDiscount = item.price * 0.1;
  } else if (item.category === "fashion") {
    itemDiscount = item.price * 0.05;
  }
  return { ...item, discount: itemDiscount };
});

if (totalValue > 50000) {
  totalValue *= 0.95;
}

console.log("Cart Items: ", discount);
console.log("Total Value (after discount): " + totalValue);
