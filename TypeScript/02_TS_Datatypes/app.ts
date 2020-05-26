// string , number , boolean , undefined , null , object , array , enum , void , any
// https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
// string
let employeeName:string = 'John';
console.log(`Employee Name : ${employeeName}`);

// Number
let employeeSalary:number = 85000;
console.log(`Employee Salary : ${employeeSalary}`);

// boolean
let isManager:boolean = true;
console.log(`Is Manager ? : ${isManager}`);

// undefined
let test:undefined = undefined;
console.log(`Test : ${test}`);

// null
let abc:null = null;
console.log(`ABC : ${abc}`);

// object
let student:object = {
    name : 'Arjun',
    age : 22,
    course : 'B-Tech'
};
console.log(student);

// array
let colors:string[] = ['white','black','silver','yellow'];
console.log(colors);

// enum
enum Month {
    JAN = 'JANUARY',
    FEB = 'FEBRUARY',
    MAR = 'MARCH'
}
console.log(Month.JAN);

// void
let greet = function(name:string): void {
    let msg:string = `Good Morning ${name} `;
    console.log(msg);
};
greet('wilson');

// any
let x : any = 'john';
x = 1000;
x = true;
console.log(`x : ${x}`);
