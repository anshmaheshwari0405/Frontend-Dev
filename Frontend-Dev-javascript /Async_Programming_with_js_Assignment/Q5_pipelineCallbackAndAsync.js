function design(cb) {
  setTimeout(() => cb(null, "design done"), 1000);
}
function build(cb) {
  setTimeout(() => cb(null, "build done"), 1000);
}
function test(cb) {
  setTimeout(() => cb(null, "test done"), 1000);
}
function deploy(cb) {
  setTimeout(() => cb(null, "deploy done"), 1000);
}
function celebrate(cb) {
  setTimeout(() => cb(null, "celebrate done"), 1000);
}

design((err, msg1) => {
  if (err) return console.log("Error:", err);
  console.log(msg1);
  build((err2, msg2) => {
    if (err2) return console.log("Error:", err2);
    console.log(msg2);
    test((err3, msg3) => {
      if (err3) return console.log("Error:", err3);
      console.log(msg3);
      deploy((err4, msg4) => {
        if (err4) return console.log("Error:", err4);
        console.log(msg4);
        celebrate((err5, msg5) => {
          if (err5) return console.log("Error:", err5);
          console.log(msg5);
        });
      });
    });
  });
});

function designP() {
  return new Promise((r) => setTimeout(() => r("design done"), 1000));
}
function buildP() {
  return new Promise((r) => setTimeout(() => r("build done"), 1000));
}
function testP() {
  return new Promise((r) => setTimeout(() => r("test done"), 1000));
}
function deployP() {
  return new Promise((r) => setTimeout(() => r("deploy done"), 1000));
}
function celebrateP() {
  return new Promise((r) => setTimeout(() => r("celebrate done"), 1000));
}

async function runPipeline() {
  try {
    console.log(await designP());
    console.log(await buildP());
    console.log(await testP());
    console.log(await deployP());
    console.log(await celebrateP());
  } catch (err) {
    console.log("Pipeline error:", err);
  }
}

runPipeline();
