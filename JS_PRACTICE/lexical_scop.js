// Global Scope
let globalVar = "I'm global";

function myFunction() {
    // Function Scope
    let functionVar = "I'm in function";
    
    if (true) {
        // Block Scope
        let blockVar = "I'm in block";
        console.log(globalVar);    // ✓ accessible
        console.log(functionVar);  // ✓ accessible
        console.log(blockVar);     // ✓ accessible
    }
    
    console.log(blockVar);  // ✗ Error! Not accessible
}
console.log(functionVar); 