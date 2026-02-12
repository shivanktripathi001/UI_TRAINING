// Creating objects
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

// Accessing properties
console.log(person.name);      // Dot notation
console.log(person['age']);    // Bracket notation

// Adding properties
person.email = "john@email.com";
console.log(person.email)