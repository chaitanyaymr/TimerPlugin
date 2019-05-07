import { TimerProvider } from './providers/timer-provider';
import { TimerComponent } from "./components/timer-component";
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
var IonicTimerModule = (function () {
    function IonicTimerModule() {
    }
    IonicTimerModule.forRoot = function () {
        return {
            ngModule: IonicTimerModule,
            providers: [TimerProvider]
        };
    };
    IonicTimerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        TimerComponent
                    ],
                    exports: [
                        TimerComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    IonicTimerModule.ctorParameters = function () { return []; };
    return IonicTimerModule;
}());
export { IonicTimerModule };
//# sourceMappingURL=ionic-timer-module.js.map