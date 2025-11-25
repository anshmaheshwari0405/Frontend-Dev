// Without strict mode — this works (but bad practice)
function demo(a, a) {
  total = 10;
  console.log(total);
}
demo(5, 10);


// With strict mode — will throw errors
("use strict");
function demoFixed(a, b) {
  let total = 10;
  console.log(total);
}
demoFixed(5, 10);
