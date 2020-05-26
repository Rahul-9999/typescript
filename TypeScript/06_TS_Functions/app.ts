// functions
let greet = function(name:string,age:number):string {
    let msg:string = `Hello ${name} , You are just ${age} yrs Old`;
    return msg;
};
let result:string = greet('john',40);
console.log(result);

// function with object as parameter

interface Mobile{
    brand : string,
    color : string,
    price : number,
    isInsured : boolean
}

let printObject = function(obj:Mobile):string {
    return JSON.stringify(obj);
};

let mobileOne:Mobile = {
    brand : 'Lenovo',
    color : 'black',
    price : 15000,
    isInsured : false
};
let newMobile:Mobile = JSON.parse(printObject(mobileOne));
console.log(newMobile);
