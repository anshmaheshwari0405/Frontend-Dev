function randomDelay() {
  return 1000 + Math.random() * 1000;
}

function step(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2
        ? resolve(`Step done: ${name}`)
        : reject(`Step failed: ${name}`);
    }, randomDelay());
  });
}

async function runPipeline() {
  try {
    console.log("Start Pipeline");
    const r1 = await step("takeOrder");
    console.log("Step 1: Order taken");
    const r2 = await step("prepare");
    console.log("Step 2: Food prepared");
    const r3 = await step("pack");
    console.log("Step 3: Package ready");
    const r4 = await step("dispatch");
    console.log("Step 4: Out for delivery");
    const r5 = await step("deliver");
    console.log("Delivery completed!");
  } catch (err) {
    console.log("Pipeline failed!");
  }
}

runPipeline();
