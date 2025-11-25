"use strict";

class CalcError extends Error {}

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new CalcError("Cannot divide by zero");
      return a / b;
    case "power":
      return a ** b;
    case "root":
      if (a < 0) throw new CalcError("Negative root");
      return Math.pow(a, 1 / b);
    default:
      throw new CalcError("Invalid operation");
  }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25,
  num2 = 0;

for (const op of operations) {
  try {
    const result = calculate(op, num1, num2);
    console.log(`${op}: ${result}`);
  } catch (err) {
    console.error(`${op} error: ${err.message}`);
  }
}
