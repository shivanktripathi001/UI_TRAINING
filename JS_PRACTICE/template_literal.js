const name = "John";
const age = 25;
const city = "Mumbai";

//  OLD WAY - messy string concatenation
const msg1 = "My name is " + name + 
             " and I am " + age + 
             " years old from " + city;

//  NEW WAY - template literals
const msg2 = `My name is ${name} and I am ${age} years old from ${city}`;
console.log(msg2);
// "My name is John and I am 25 years old from Mumbai"

//  Expressions inside ${}
const a = 10, b = 20;
console.log(`Sum of ${a} and ${b} is ${a + b}`);
// "Sum of 10 and 20 is 30"

//  Multi-line strings
const html = `
    <div class="card">
        <h2>${name}</h2>
        <p>Age: ${age}</p>
        <p>City: ${city}</p>
    </div>
`;
console.log(html);

//  Calling functions inside ${}
function toUpper(str) {
    return str.toUpperCase();
}
console.log(`Hello, ${toUpper(name)}!`); 
// "Hello, JOHN!"

//  Ternary inside template literal
const score = 75;
const result = `Your result: ${score >= 50 ? "PASS ✅" : "FAIL ❌"}`;
console.log(result); // "Your result: PASS ✅"

// Tagged template literals (advanced)
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? 
               `<strong>${values[i]}</strong>` : '');
    }, '');
}
const product = "Laptop";
const price = 50000;
const output = highlight`Buy ${product} for only ₹${price}!`;
console.log(output);
// "Buy <strong>Laptop</strong> for only ₹<strong>50000</strong>!"