class employee {
    empid: number;
    empname: string;
    constructor(id: number, name: string) {
        this.empid = id;
        this.empname = name;
    }
}


let emp1 = new employee(101, "Shivank");
// console.log(emp1.empid);
// console.log(emp1.empname);



// inheritance
class manager extends employee {
    constructor(id: number, name: string) {
        super(id, name);
    }
    display(){
      console.log("i am a manager");
    }
}
let m1 = new manager(102, "Rohit");
console.log(m1.empid);
console.log(m1.empname);
m1.display();


// multilevel inheritance

class director extends manager {
    constructor(id: number, name: string) {
        super(id, name);
    }
    display(): void {
        console.log("i am a director");
    }
}
let d1 = new director(103, "Rohit");
d1.display();


// interface

interface Person {
    name: string;
    age: number;
    greet(): void;
}

class Student implements Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet(): void {
        console.log(`Hello, I am ${this.name} and I am ${this.age} years old`);
    }
}

let s1 = new Student("Shivank", 25);
s1.greet();
