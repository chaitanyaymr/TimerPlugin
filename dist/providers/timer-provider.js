import { Injectable } from '@angular/core';
var TimerProvider = (function () {
    function TimerProvider() {
    }
    TimerProvider.prototype.getDate = function () {
        return new Date().toDateString();
    };
    TimerProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TimerProvider.ctorParameters = function () { return []; };
    return TimerProvider;
}());
export { TimerProvider };
//# sourceMappingURL=timer-provider.js.map