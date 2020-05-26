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
}(BasicPhone));
var basicPhone = new BasicPhone('basic Keypad');
basicPhone.sendSMS();
basicPhone.makeCalls();
var smartPhone = new SmartPhone('touch keypad', 'fpSensor');
smartPhone.sendSMS();
smartPhone.sendEmail();
