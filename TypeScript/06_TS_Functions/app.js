// functions
var greet = function (name, age) {
    var msg = "Hello " + name + " , You are just " + age + " yrs Old";
    return msg;
};
var result = greet('john', 40);
console.log(result);
var printObject = function (obj) {
    return JSON.stringify(obj);
};
var mobileOne = {
    brand: 'Lenovo',
    color: 'black',
    price: 15000,
    isInsured: false
};
var newMobile = JSON.parse(printObject(mobileOne));
console.log(newMobile);
