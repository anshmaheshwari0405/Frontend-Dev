"use strict";

const transactions = [
  { id: 1, amount: 3000 },
  { id: 2, amount: -1500 },
  { id: 3 },
  null,
];

class TransactionError extends Error {
  constructor(message, type) {
    super(message);
    this.type = type;
  }
}

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
  try {
    const t = transactions[i];

    if (t === null) throw new TransactionError("Null transaction", "NullEntry");
    if (t.id === undefined)
      throw new TransactionError("Missing id", "MissingField");
    if (t.amount === undefined)
      throw new TransactionError("Missing amount", "MissingField");
    if (t.amount < 0)
      throw new TransactionError("Negative amount", "NegativeAmount");

    valid.push(t);
    console.log(`Valid transaction ID: ${t.id}`);
  } catch (err) {
    invalid.push({ index: i, type: err.type, message: err.message });
    console.warn(`Error at transaction ${i}: ${err.type} | ${err.message}`);
  }
}

console.log("Valid:", valid);
console.log("Invalid:", invalid);
