// hoisting means jab bhi ham koi bhi variable bina define kene ke phle use krenge to undefined ayene na ke error 


// This works due to hoisting
console.log(x);  // undefined (not error)
var x = 5;

// Function declarations are fully hoisted
greet();  // Works!
function greet() {
    console.log("Hello");
}

// But function expressions are NOT
sayHi();  // Error!
const sayHi = () => console.log("Hi");