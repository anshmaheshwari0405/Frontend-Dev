function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2
        ? resolve("Server A deployed in 2s")
        : reject("Server A failed");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2
        ? resolve("Server B deployed in 3s")
        : reject("Server B failed");
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then((results) => {
    console.log("Deployment completed for all servers");
    results.forEach((r) => console.log(r));
  })
  .catch((err) => {
    console.log("Deployment error:", err);
  });

Promise.race([serverA(), serverB()])
  .then((first) => {
    console.log("Fastest response:", first);
  })
  .catch((err) => {
    console.log("Fastest response error:", err);
  });
