var student = {
    name: 'Arjun',
    age: 22,
    course: 'MBBS'
};
console.log(student);
console.log(student.course);
var employees = [
    {
        id: 1,
        name: 'John',
        age: 40,
        designation: 'Manager'
    },
    {
        id: 2,
        name: 'Wilson',
        age: 45,
        designation: 'Sr.Manager'
    },
    {
        id: 3,
        name: 'Rajan',
        age: 25,
        designation: 'Software Engineer'
    }
];
// filter using normal - for loop
var jrEmployees = [];
for (var i = 0; i < employees.length; i++) {
    if (employees[i].age <= 30) {
        jrEmployees.push(employees[i]);
    }
}
console.log(jrEmployees);
// arrow function
var juniorEmployees = employees.filter(function (employee) { return employee.age <= 30; });
console.log(juniorEmployees);
