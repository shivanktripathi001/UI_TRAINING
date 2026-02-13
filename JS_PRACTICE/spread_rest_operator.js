//  Spread with Arrays
const fruits = ["apple", "banana", "mango"];
const moreFruits = ["grape", ...fruits, "kiwi"];
console.log(moreFruits);
// ["grape", "apple", "banana", "mango", "kiwi"]

//  Copy array (no reference issues)
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] - NOT affected
console.log(copy);     // [1, 2, 3, 4]

//  Merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

//  Spread with Objects
const person = { name: "John", age: 25 };
const employee = { 
    ...person, 
    company: "TechCorp",
    salary: 50000 
};
console.log(employee);
// { name: "John", age: 25, company: "TechCorp", salary: 50000 }

//  Update object without changing original
const updatedPerson = { ...person, age: 30 };
console.log(person.age);        // 25 - original unchanged
console.log(updatedPerson.age); // 30 - new object updated

//  Spread in function calls
function add3(a, b, c) {
    return a + b + c;
}
const nums = [1, 2, 3];
console.log(add3(...nums)); // 6


////////////////////////////////////////////////////////////////////////////////////////

// rest
//  Rest in function parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3));          // 6
console.log(sum(1, 2, 3, 4, 5));    // 15
console.log(sum(10, 20));           // 30

//  Rest with required params
function introduce(firstName, lastName, ...hobbies) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
}
introduce("John", "Doe", "coding", "gaming", "reading");
// Name: John Doe
// Hobbies: coding, gaming, reading

// Rest in destructuring
const [first, second, ...remaining] = [1, 2, 3, 4, 5];
console.log(first);     // 1
console.log(second);    // 2
console.log(remaining); // [3, 4, 5]

// Rest in object destructuring
const { name, age, ...otherInfo } = {
    name: "Alice",
    age: 25,
    city: "Delhi",
    job: "Developer"
};
console.log(name);       // "Alice"
console.log(otherInfo);  // { city: "Delhi", job: "Developer" }