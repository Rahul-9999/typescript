var Student = /** @class */ (function () {
    // constructor
    function Student(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    // getters , setters
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.setAge = function (age) {
        this.age = age;
    };
    Student.prototype.getCourse = function () {
        return this.course;
    };
    Student.prototype.setCourse = function (course) {
        this.course = course;
    };
    // details
    Student.prototype.getDetails = function () {
        return "NAME : " + this.getName() + " , AGE : " + this.getAge() + " , COURSE : " + this.getCourse();
    };
    return Student;
}());
// Object Creation
var student = new Student('Rajan', 22, 'CSE');
var result = student.getDetails();
console.log(result);
student.setAge(23);
student.setCourse('IT');
result = student.getDetails();
console.log(result);
// private , protected , public
