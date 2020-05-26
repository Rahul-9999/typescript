class BasicPhone {
    protected keypad:string;

    constructor(keypad:string){
        this.keypad = keypad;
    }

    // getters , setters
    public getKeypad():string{
        return  this.keypad;
    }
    public setKeypad(keypad:string):void{
        this.keypad = keypad
    }

    public sendSMS(){
        console.log('Sending SMS with Basic Phone');
    }
    public makeCalls(){
        console.log('Making Calls with Basic Phone');
    }
}

class SmartPhone extends BasicPhone{
    private fpSensor:string;

    constructor(keypad,fpSensor){
        super(keypad);
        this.fpSensor = fpSensor;
    }

    public getFpSensor():string{
        return this.fpSensor;
    }
    public setFpSensor(sensor:string):void{
        this.fpSensor = sensor;
    }

    public sendSMS() {
        console.log('Sending SMS with smart Phone');
    }

    // methods
    public sendEmail(){
        console.log('sending emails with smart phone');
    }
    public makeVideoCall(){

    }
}

let basicPhone = new BasicPhone('basic Keypad');
basicPhone.sendSMS();
basicPhone.makeCalls();


let smartPhone = new SmartPhone('touch keypad','fpSensor');
smartPhone.sendSMS();
smartPhone.sendEmail();

