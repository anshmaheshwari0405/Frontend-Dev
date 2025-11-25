"use strict";

function outer() {
  console.log(count);
  var count = 5;

  function inner() {
    console.log(count);
    var count = 10;
    console.log(count);
  }

  inner();
  console.log(count);
}

outer();

// Arrow Function Version

/*


"use strict";

function outer() {
  console.log(count);
  var count = 5;

  const inner = () => {
    console.log(count);
    var count = 10;
    console.log(count);
  };

  inner();
}

outer();



*/
