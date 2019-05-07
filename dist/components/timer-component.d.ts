import { ViewController, NavParams } from 'ionic-angular';
export declare class TimerComponent {
    viewctrl: ViewController;
    hrs: any;
    mins: any;
    apm: any;
    arrow_up_hrs: number;
    arrow_up_mins: number;
    arrow_down_hrs: number;
    arrow_down_mins: number;
    current_hrs: number;
    current_mins: number;
    current_apm: any;
    constructor(viewctrl: ViewController, navparams: NavParams);
    close(): void;
    ionViewDidEnter(): void;
    setTime(): void;
    setHours(hours: any): any;
    setMinutes(minutes: any): any;
    checkAndSetHrs(): void;
    incHr(): void;
    incMin(): void;
    check_currentHr(): boolean;
    decHr(): void;
    checkminsandHeaders(): boolean;
    decMin(): void;
}
