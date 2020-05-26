"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasicPhone = /** @class */ (function () {
    function BasicPhone(keypad) {
        this.keypad = keypad;
    }
    // getters , setters
    BasicPhone.prototype.getKeypad = function () {
        return this.keypad;
    };
    BasicPhone.prototype.setKeypad = function (keypad) {
        this.keypad = keypad;
    };
    BasicPhone.prototype.sendSMS = function () {
        console.log('Sending SMS with Basic Phone');
    };
    BasicPhone.prototype.makeCalls = function () {
        console.log('Making Calls with Basic Phone');
    };
    return BasicPhone;
}());
exports.BasicPhone = BasicPhone;
