// the main diff between let and  var related to lexical scoping 

// mtlb if we use var it can be accessible outside and for let it can't
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 - accessible outside the if block!
}

function testLet() {
  if (true) {
    let x = 10;
    const y = 20;
  }
  console.log(x); // Error! x doesn't exist here
}


// sec diff is reassignment and redecleration 
// var - Can do both 

var x = 1;
var x = 2; // Works fine
x = 3;     // Works fine

// let - Can re-assign, but can't re-declare

let x = 1;
let x = 2; // SyntaxError
x = 3;     // Works fine


// const - Can't re-assign, can't re-declare

const x = 1;
x = 2; // TypeError!
// BUT objects/arrays can be mutated:
const arr = [1, 2];
arr.push(3);  // Works! [1, 2, 3]
arr = [4, 5]; // TypeError!

  