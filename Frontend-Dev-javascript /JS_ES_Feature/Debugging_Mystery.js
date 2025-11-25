"use strict";

function showMessage() {
  let greeting = "Welcome";
  console.log(greeting);
}

showMessage();

console.log(
  "Strict mode error occurred earlier because 'greeting' was undeclared."
);
