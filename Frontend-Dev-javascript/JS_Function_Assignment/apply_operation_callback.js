function applyOperation(numbers, operation) {
  const result = [];
  for (let num of numbers) {
    result.push(operation(num));
  }
  return result;
}

const numbers = [1, 2, 3, 4];

function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

const doubled = applyOperation(numbers, double);
const squared = applyOperation(numbers, square);

console.log("Doubled:", doubled);
console.log("Squared:", squared);
