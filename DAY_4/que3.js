const employees = [
  {name: "Aarjav", salary: 40000},
  {name: "Aditya", salary: 60000},
  {name: "Shivank", salary: 80000},
  {name: "Riya", salary: 30000}
];

// 1. Get employees with salary > 50000
const highSalary = employees.filter(emp => emp.salary > 50000);
console.log("Employees with salary > 50000:", highSalary);

// 2. Increase all salaries by 10%
const increasedSalary = employees.map(emp => ({...emp, salary: emp.salary * 1.1}));
console.log("Salaries increased by 10%:", increasedSalary);

// 3. Calculate total salary payout
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log("Total salary payout:", totalSalary);

// 4. Print only employee names
const names = employees.map(emp => emp.name);
console.log("Employee names:", names);
