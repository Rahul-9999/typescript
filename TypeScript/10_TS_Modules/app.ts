import { BasicPhone } from "./Basic/BasicPhone";
import { SmartPhone } from "./Smart/SmartPhone";

let basicPhone = new BasicPhone('basic Keypad');
basicPhone.sendSMS();
basicPhone.makeCalls();

let smartPhone = new SmartPhone('touch keypad','fpSensor');
smartPhone.sendSMS();
smartPhone.sendEmail();
