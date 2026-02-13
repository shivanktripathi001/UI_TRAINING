//  console.log - general logging
console.log("Hello World");
console.log("Name:", "John", "Age:", 25);
console.log({ name: "John", age: 25 }); // logs object nicely

//  console.error - shows red error in console
console.error("Something went wrong!");
console.error("Error details:", { code: 404, message: "Not found" });

// console.warn - shows yellow warning
console.warn("This feature is deprecated!");
console.warn("Use the new API instead");

// console.info - informational message
console.info("App started successfully");
console.info("User logged in:", "john@email.com");

//  console.table - shows array/object as table
const students = [
    { name: "Alice", grade: "A", marks: 95 },
    { name: "Bob",   grade: "B", marks: 82 },
    { name: "Carol", grade: "A", marks: 91 }
];
console.table(students);
// Shows beautiful table in browser console!

//  console.group - group related logs
console.group("User Details");
    console.log("Name: John");
    console.log("Age: 25");
    console.log("Gender: male");
    console.group("Address");
        console.log("City: Mumbai");
        console.log("State: Maharashtra");
    console.groupEnd();
console.groupEnd();

// console.time & timeEnd - measure performance
console.time("Loop Timer");
for (let i = 0; i < 1000000; i++) { 
    // some operation
   
}

console.timeEnd("Loop Timer"); 
// "Loop Timer: 5.234ms"

//  console.count - count how many times called
function loginAttempt(user) {
    console.count(`Login attempt for ${user}`);
}
loginAttempt("john"); // Login attempt for john: 1
loginAttempt("john"); // Login attempt for john: 2
loginAttempt("alice"); // Login attempt for alice: 1
loginAttempt("shiv");
loginAttempt("shiv");
loginAttempt("shiv");

//  console.assert - logs only if condition is FALSE
console.assert(1 === 1, "This won't show");
console.assert(1 === 2, "1 is not equal to 2!"); // Shows error!

// console.clear - clears console
// console.clear();

// Styling console output
console.log("%cSuccess!", "color: green; font-size: 20px; font-weight: bold");
console.log("%cError!", "color: red; background: yellow; padding: 5px");