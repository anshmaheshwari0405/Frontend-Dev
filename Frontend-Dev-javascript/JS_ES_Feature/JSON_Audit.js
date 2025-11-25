"use strict";

const rawData = [
  '{"user":"Ishendra","age":20}',
  '{"id":2}',
  "{invalid}",
  '{"user":"Vinay","age":"19"}',
];

const clean = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  try {
    const parsed = JSON.parse(rawData[i]);

    if (!parsed.user) throw new Error("Missing 'user'");
    if (parsed.age === undefined) throw new Error("Missing 'age'");

    parsed.age = Number(parsed.age);

    if (parsed.age < 18) continue;

    clean.push(parsed);
  } catch (err) {
    errors.push({ line: i, error: err.message });
  }
}

console.log("Valid JSON objects:", clean);
console.log("Errors:", errors);
