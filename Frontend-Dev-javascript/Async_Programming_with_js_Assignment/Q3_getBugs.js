function fetchBugs(callback) {
  setTimeout(
    () => callback(["UI glitch", "API timeout", "Login failure"]),
    1000
  );
}

function getBugs() {
  return new Promise((resolve, reject) => {
    const simulateFailure = Math.random() < 0.25;
    setTimeout(() => {
      if (simulateFailure) reject("API error: failed to fetch bugs");
      else resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.table(bugs.map((b, i) => ({ id: i + 1, bug: b })));
  })
  .catch((err) => {
    console.log("Failed to load bugs:", err);
  });
