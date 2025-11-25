"use strict";

const apiData = [
  "25",
  "true",
  "false",
  "NaN",
  " ",
  "100px",
  "3.14",
  null,
  undefined,
];

const validNumbers = [];
const invalidNumbers = [];
const report = [];

for (let i = 0; i < apiData.length; i++) {
  const original = apiData[i];

  const asString = String(original);
  const asBoolean = Boolean(original);
  const asNumber = Number(original);

  if (!Number.isNaN(asNumber) && Number.isFinite(asNumber)) {
    validNumbers.push(asNumber);
  } else {
    invalidNumbers.push({ index: i, value: original });
  }

  report.push({
    index: i,
    original,
    asString,
    asBoolean,
    asNumber: Number.isNaN(asNumber) ? "NaN" : asNumber,
  });
}

console.log("=== Q1 Report ===");
for (const row of report) {
  console.log(
    `Index ${row.index} | Original: ${JSON.stringify(row.original)} | ` +
      `String: "${row.asString}" | Boolean: ${row.asBoolean} | Number: ${row.asNumber}`
  );
}

console.log("\nValid Numbers:", validNumbers);
console.log("Invalid Entries:", invalidNumbers);
