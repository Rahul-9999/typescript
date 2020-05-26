// conditional Statements
var time = 10;
var msg = '';
if (time >= 0 && time <= 12) {
    msg = 'Good Morning';
}
else if (time >= 13 && time <= 17) {
    msg = 'Good Afternoon';
}
else if (time >= 18 && time <= 23) {
    msg = 'Good Evening';
}
else {
    msg = 'Enter proper time';
}
console.log(msg);
// Looping (for-loop)
var output = '';
for (var i = 0; i <= 10; i++) {
    output += i + " ";
}
console.log(output);
