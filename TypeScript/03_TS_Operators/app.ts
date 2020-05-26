// arithmetic operators
let num1:number = 100;
let num2:number = 20;
console.log(`sum : ${num1 + num2}`);
console.log(`sub : ${num1 - num2}`);
console.log(`mul : ${num1 * num2}`);
console.log(`div : ${num1 / num2}`);

// conditional operator
let marks:number = 75;
let result:string = '';
if(marks < 35){
   result = 'You Failed the Exam';
}
else{
    result = 'You Cleared the Exam';
}
console.log(result);

// logical operator
let inRelation:boolean = true;
let parentsAgreed:boolean = false;
let msg:string = '';
if(inRelation && parentsAgreed){
    msg = 'Get Marry soon';
}
else {
    msg = 'Wait until parents Agreed';
}
console.log(msg);
