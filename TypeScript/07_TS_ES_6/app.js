// Template Strings
var studentName = 'John';
var studentAge = 22;
console.log("NAME : " + studentName + " - AGE : " + studentAge);
// Optional Parameters
var printNumbers = function (start, end) {
    if (end === void 0) { end = 10; }
    var result = '';
    for (var i = start; i <= end; i++) {
        result += i + " ";
    }
    console.log(result);
};
printNumbers(0);
// let , const
var mobileBrand = 'Apple';
var APP_NAME = 'TS APP';
// for - of
var colors = ['white', 'black', 'blue', 'silver'];
var result = '';
for (var color in colors) {
    result += color.toUpperCase() + " ";
}
console.log(result);
// Arrow function
var msg = 'Good Morning';
var reverseString = function (str) {
    var tempStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        tempStr += str.charAt(i);
    }
    return tempStr;
};
result = reverseString(msg);
console.log(result);
