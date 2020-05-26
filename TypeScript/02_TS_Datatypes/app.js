// string , number , boolean , undefined , null , object , array , enum , void , any
// https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
// string
var employeeName = 'John';
console.log("Employee Name : " + employeeName);
// Number
var employeeSalary = 85000;
console.log("Employee Salary : " + employeeSalary);
// boolean
var isManager = true;
console.log("Is Manager ? : " + isManager);
// undefined
var test = undefined;
console.log("Test : " + test);
// null
var abc = null;
console.log("ABC : " + abc);
// object
var student = {
    name: 'Arjun',
    age: 22,
    course: 'B-Tech'
};
console.log(student);
// array
var colors = ['white', 'black', 'silver', 'yellow'];
console.log(colors);
// enum
var Month;
(function (Month) {
    Month["JAN"] = "JANUARY";
    Month["FEB"] = "FEBRUARY";
    Month["MAR"] = "MARCH";
})(Month || (Month = {}));
console.log(Month.JAN);
// void
var greet = function (name) {
    var msg = "Good Morning " + name + " ";
    console.log(msg);
};
greet('wilson');
// any
var x = 'john';
x = 1000;
x = true;
console.log("x : " + x);
