// Template Strings
let studentName:string = 'John';
let studentAge:number = 22;
console.log(`NAME : ${studentName} - AGE : ${studentAge}`);

// Optional Parameters
let printNumbers = function(start:number, end:number=10):void {
    let result:string = '';
    for(let i:number = start; i<= end ; i++){
        result += `${i} `;
    }
    console.log(result);
};
printNumbers(0);

// let , const
let mobileBrand = 'Apple';
const APP_NAME = 'TS APP';

// for - of
let colors:string[] = ['white','black','blue','silver'];
let result:string = '';
for(let color in colors){
    result += `${color.toUpperCase()} `;
}
console.log(result);

// Arrow function
let msg:string = 'Good Morning';
let reverseString = (str:string):string => {
    let tempStr:string = '';
    for(let i:number = str.length-1; i >= 0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
result = reverseString(msg);
console.log(result);
