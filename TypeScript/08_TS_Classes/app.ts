class Student {
    // properties
    private name : string;
    private age : number;
    private course : string;

    // constructor
    constructor(name:string, age:number, course:string){
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // getters , setters
    public getName():string{
        return this.name;
    }
    public setName(name:string):void{
        this.name = name;
    }

    public getAge():number{
        return  this.age;
    }
    public setAge(age:number):void{
        this.age = age;
    }

    public getCourse():string{
        return this.course;
    }
    public setCourse(course:string):void{
        this.course = course
    }

    // details
    public getDetails():string{
        return `NAME : ${this.getName()} , AGE : ${this.getAge()} , COURSE : ${this.getCourse()}`;
    }
}

// Object Creation
let student = new Student('Rajan',22,'CSE');
let result:string = student.getDetails();
console.log(result);

student.setAge(23);
student.setCourse('IT');
result = student.getDetails();
console.log(result);

// private , protected , public
