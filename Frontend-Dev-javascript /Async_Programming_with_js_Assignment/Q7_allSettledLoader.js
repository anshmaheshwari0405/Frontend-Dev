function loadProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3
        ? resolve("Profile Loaded")
        : reject("Profile Failed");
    }, 2000);
  });
}
function loadPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3 ? resolve("Posts Loaded") : reject("Posts Failed");
    }, 1500);
  });
}
function loadMessages() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3
        ? resolve("Messages Loaded")
        : reject("Messages Failed");
    }, 1000);
  });
}

(async function () {
  const start = Date.now();
  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages(),
  ]);
  const end = Date.now();
  results.forEach((r, i) => {
    if (r.status === "fulfilled")
      console.log(`Module ${i + 1} succeeded:`, r.value);
    else console.log(`Module ${i + 1} failed:`, r.reason);
  });
  console.log("Total time (ms):", end - start);
})();
