// Objects
interface Student {
    name : string,
    age : number,
    course : string
}

let student:Student = {
    name : 'Arjun',
    age : 22,
    course : 'MBBS'
};
console.log(student);
console.log(student.course);

// Arrays
interface Employee {
    id : number,
    name : string,
    age : number,
    designation : string
}

let employees:Employee[] = [
    {
        id : 1,
        name : 'John',
        age : 40,
        designation : 'Manager'
    },
    {
        id : 2,
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Manager'
    },
    {
        id : 3,
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer'
    }
];

// filter using normal - for loop
let jrEmployees:Employee[] = [];
for(let i:number = 0; i<employees.length; i++){
    if(employees[i].age <= 30){
        jrEmployees.push(employees[i]);
    }
}
console.log(jrEmployees);

// arrow function
let juniorEmployees:Employee[] = employees.filter(employee => employee.age <= 30);
console.log(juniorEmployees);
