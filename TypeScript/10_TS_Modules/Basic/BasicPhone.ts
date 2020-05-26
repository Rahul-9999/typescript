export class BasicPhone {
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
