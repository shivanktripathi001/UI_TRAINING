//  OLD WAY - long and repetitive
// const person = { name: "John", age: 25, city: "Mumbai" };
// const name = person.name;
// const age = person.age;
// const city = person.city;

// NEW WAY - destructuring
const person = { name: "John", age: 25, city: "Mumbai" };
const { name, age, city } = person;
console.log(name); // "John"
console.log(age);  // 25
console.log(city); // "Mumbai"

//  Rename while destructuring
const { name: fullName, age: years } = person;
console.log(fullName); // "John"
console.log(years);    // 25

// Default values
const { name: n, salary = 50000 } = person;
console.log(salary); // 50000 (not in object, uses default)

//  Nested object destructuring
const student = {
    name: "Alice",
    marks: {
        math: 90,
        science: 85
    }
};
const { name: studentName, marks: { math, science } } = student;
console.log(math);    // 90
console.log(science); // 85