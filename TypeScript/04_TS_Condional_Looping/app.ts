// conditional Statements
let time:number = 10;
let msg:string = '';
if(time >= 0 && time <= 12){
    msg = 'Good Morning';
}
else if(time >= 13 && time <= 17){
    msg = 'Good Afternoon';
}
else if(time >= 18 && time <= 23){
    msg = 'Good Evening';
}
else{
    msg = 'Enter proper time';
}
console.log(msg);

// Looping (for-loop)
let output:string = '';
for(let i:number =0; i<=10; i++){
    output += `${i} `;
}
console.log(output);
