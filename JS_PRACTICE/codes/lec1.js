// let name = "shiv";
// console.log(name);
// console.log(typeof name);


// console.log(10 + 3);  // 13
// console.log(10 % 3);  // 1

// // Comparison
// console.log(5 == "5");  // true  (loose)
// console.log(5 === "5"); // false (strict)

// // Logical
// console.log(true && false); // false
// console.log(true || false); // true
// console.log(!true);         // false

// // Nullish Coalescing
// let user = null ?? "Guest"; // "Guest"

// let score = 75;

// if(score >=90){
//     console.log("a");
// }
// else if(score >=75){
//     console.log("b");
// }
// else{
//     console.log("c");
// }

// // ternary operator
// let res = score >= 50 ?"pass":"fail";
// console.log(res);
// // switch 
// let day = "mond";
// switch(day){
//     case "mon":console.log("monday");break;
//     default : console.log("other day");
// }

// loop
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// let i=0;
// while(i<5){
//     console.log(i++);
// }

// const fruits = ["apple",'banana',"papaya"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

// let obj = {a:1,b:2};

// for(let key in obj){
//     console.log(key,obj[key]);
// }


// function greet(){
//     console.log("hello ji");
// }
// greet();
// // arrow 
// const add = (a,b) => a+b;

// console.log(add(2,4));



// // Rest parameters
// function sum(...nums) {
//   return nums.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10


// let movies = ['uri',"idoits","golmaal"];

// console.log(movies[0]); // 10
// movies.push("mango");

// console.log(movies); // 10
// movies.pop();
// console.log(movies); // 10

// fruits.unshift("grape"); 
// console.log(fruits); // 10
// fruits.shift();
// console.log(fruits); 



// scope and clouser
// scope
let global = "i am global";
function test(){
    let local = "i am local";
    console.log(global);
}
// clouser
function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

const incre = counter();
console.log(incre());
console.log(incre());

