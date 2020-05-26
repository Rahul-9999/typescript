// arithmetic operators
var num1 = 100;
var num2 = 20;
console.log("sum : " + (num1 + num2));
console.log("sub : " + (num1 - num2));
console.log("mul : " + num1 * num2);
console.log("div : " + num1 / num2);
// conditional operator
var marks = 75;
var result = '';
if (marks < 35) {
    result = 'You Failed the Exam';
}
else {
    result = 'You Cleared the Exam';
}
console.log(result);
// logical operator
var inRelation = true;
var parentsAgreed = false;
var msg = '';
if (inRelation && parentsAgreed) {
    msg = 'Get Marry soon';
}
else {
    msg = 'Wait until parents Agreed';
}
console.log(msg);
