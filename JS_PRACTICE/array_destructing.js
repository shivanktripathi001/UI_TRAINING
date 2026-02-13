const colors = ["red", "green", "blue", "yellow"];

// Basic array destructuring
const [first, second] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// skip elements using comma
const [, , third] = colors;
console.log(third); // "blue"

//Default values
const [a, b, c, d, e = "purple"] = colors;
console.log(e); // "purple" (not in array, uses default)

// Swap variables (very useful!)
let x = 10, y = 20;
[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10

// Destructuring in function parameters
function greet({ name, age }) {
    console.log(`Hello ${name}, you are ${age} years old`);
}
greet({ name: "Bob", age: 30 }); 
// "Hello Bob, you are 30 years old"