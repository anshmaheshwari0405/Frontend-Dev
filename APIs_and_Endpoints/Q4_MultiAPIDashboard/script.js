Promise.all([
  fetch("http://localhost:3000/users").then((r) => r.json()),
  fetch("http://localhost:3000/orders").then((r) => r.json()),
  fetch("http://localhost:3000/products").then((r) => r.json()),
])
  .then(([u, o, p]) => {
    document.getElementById("users").textContent = "Users: " + u.length;
    document.getElementById("orders").textContent = "Orders: " + o.length;
    document.getElementById("products").textContent = "Products: " + p.length;
  })
  .catch(() => {
    document.getElementById("warn").textContent =
      "Some data could not be loaded.";
  });
