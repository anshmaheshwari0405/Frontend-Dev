function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("Order submitted")
        : reject("Submission failed");
    }, 500 + Math.random() * 1000);
  });
}

async function processOrder() {
  const maxAttempts = 3;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return res;
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
      if (attempt === maxAttempts)
        throw new Error("Order could not be processed");
    }
  }
}

(async () => {
  try {
    const result = await processOrder();
    console.log("Result:", result);
  } catch (err) {
    console.log(err.message);
  }
})();
