
// function decleration
function greet(name){
    return `hello,${name}!`;
}
console.log(greet('shiv'));



// func expresion
const greet2 = function(name){
    return `hello,${name}!`;
}
console.log(greet2('ujju'));

// arrow func
const greet3 = (name) => `hello,${name}!`;
console.log(greet3('gullu'));



// func dec

function add(x,y){
    return x+y;
}
let sum = add(10,20);
console.log("your ans is " + sum);


// finc expression
const sum2 = function(x,y){
    return x+y;
}
console.log(sum2(3,3));


// Arrow function
const adds = (a, b) => a + b;
console.log(adds(10,20));



