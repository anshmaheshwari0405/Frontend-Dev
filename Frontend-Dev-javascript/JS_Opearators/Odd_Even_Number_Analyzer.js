let numbers = [];
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    numbers.push("FizzBuzz");
  } else if (i % 2 === 0) {
    numbers.push("Even");
  } else {
    numbers.push("Odd");
  }
}

console.log("Results: ", numbers);
