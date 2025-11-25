"use strict";

var score = 50;
function announce() {
  console.log("Game started");
}
let status = "ready";
function startGame() {
  console.log(status);
}

console.log(score);
announce();
startGame();




// Arrow Function Version 


/*


"use strict";

const score = 50;
const announce = () => console.log("Game started");
const status = "ready";
const startGame = () => console.log(status);

console.log(score);
announce();
startGame();


*/