let count = 0;

function increment() {
  count++;
  console.log("Incremented count: " + count);
}

function decrement() {
  count--;
  console.log("Decremented count: " + count);
}

increment();
decrement();

function simulateClicks() {
  let count = 10;

  function nestedIncrement() {
    count++;
    console.log("Nested Incremented count: " + count);
  }

  nestedIncrement();
  console.log("Count inside nested function: " + count);
}

simulateClicks();
