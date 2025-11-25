"use strict";

function generatePyramid(limit = 5) {
  for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

generatePyramid(5);
