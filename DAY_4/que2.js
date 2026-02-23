// 1. Call function before declaring (works - hoisted)
greet();
function greet() {
  console.log("Function declaration hoisted!");
}

// 2. Call function expression before declaring (error)
// sayHello(); // Error: Cannot access before initialization
const sayHello = function() {
  console.log("Function expression");
};

// 3. Access variables before initialization
console.log(varVariable); // undefined (hoisted)
// console.log(letVariable); // Error: Cannot access before initialization
// console.log(constVariable); // Error: Cannot access before initialization

var varVariable = "var value";
let letVariable = "let value";
const constVariable = "const value";
