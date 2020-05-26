import {BasicPhone} from "../Basic/BasicPhone";

export class SmartPhone extends BasicPhone{
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
