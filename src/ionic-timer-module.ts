import { TimerProvider } from './providers/timer-provider';
import { TimerComponent } from "./components/timer-component";
import { NgModule, ModuleWithProviders } from '@angular/core';
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

export class IonicTimerModule{
        static forRoot():ModuleWithProviders{
            return{
                ngModule:IonicTimerModule,
                providers:[TimerProvider]
            }
        }
}
