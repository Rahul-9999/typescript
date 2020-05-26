"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BasicPhone_1 = require("../Basic/BasicPhone");
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(keypad, fpSensor) {
        var _this = _super.call(this, keypad) || this;
        _this.fpSensor = fpSensor;
        return _this;
    }
    SmartPhone.prototype.getFpSensor = function () {
        return this.fpSensor;
    };
    SmartPhone.prototype.setFpSensor = function (sensor) {
        this.fpSensor = sensor;
    };
    SmartPhone.prototype.sendSMS = function () {
        console.log('Sending SMS with smart Phone');
    };
    // methods
    SmartPhone.prototype.sendEmail = function () {
        console.log('sending emails with smart phone');
    };
    SmartPhone.prototype.makeVideoCall = function () {
    };
    return SmartPhone;
}(BasicPhone_1.BasicPhone));
exports.SmartPhone = SmartPhone;
