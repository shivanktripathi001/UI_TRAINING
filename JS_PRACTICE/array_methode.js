const numbers = [1, 2, 3, 4, 5];

// map - transforms each element
const doubled = numbers.map(num => num * 2);
console.log(doubled);
// [2, 4, 6, 8, 10]

// filter - keeps elements that pass test
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// [2, 4]

// reduce - reduces array to single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
// 15