import { TimerComponent } from "./components/timer-component";
import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
@NgModule({
    imports:[
        IonicModule
    ],
    declarations:[
        TimerComponent
    ],
    exports:[
        TimerComponent
    ]
})

export class TimerModule{

}
