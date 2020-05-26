abstract class Person {
    name : string;
    age : number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }

    public abstract getAddress();
}
class Student extends Person{

    public  getAddress():void{
        console.log('Hyderabad');
    }
}
let student = new Student('Rajan',22);

