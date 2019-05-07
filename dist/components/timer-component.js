import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
var HTML_TXT = "\n<ion-row>\n    <ion-col>\n      <ion-label color=\"primary\" style=\"text-align:center\"><h2>Select Time</h2></ion-label>\n            <ion-grid>\n               <ion-row>\n                 <ion-col style=\"text-align:center;padding-bottom:0px;\" (click)=\"incHr()\" *ngIf=\"arrow_up_hrs==0\">\n                    <ion-icon ios=\"ios-arrow-up\" md=\"md-arrow-up\"  style=\"color:#000000\"></ion-icon>\n                 </ion-col >\n                 <ion-col style=\"text-align:center;padding-bottom:0px;\"  *ngIf=\"arrow_up_hrs==1\">\n                  <ion-icon ios=\"ios-arrow-up\" md=\"md-arrow-up\" style=\"color:lightgrey\" ></ion-icon>\n               </ion-col >\n                 <ion-col style=\"text-align:center;padding-bottom:0px;\" (click)=\"incMin()\"  *ngIf=\"arrow_up_mins==0\">\n                    <ion-icon ios=\"ios-arrow-up\" md=\"md-arrow-up\" style=\"margin-left:18px;color:#000000\"></ion-icon>\n                 </ion-col>\n                 <ion-col style=\"text-align:center;padding-bottom:0px;\"   *ngIf=\"arrow_up_mins==1\">\n                  <ion-icon ios=\"ios-arrow-up\" md=\"md-arrow-up\" style=\"margin-left:18px;color:lightgray\"></ion-icon>\n               </ion-col>\n                 <ion-col style=\"padding-bottom:0px;\">\n                   <ion-label></ion-label>\n                 </ion-col>\n               </ion-row>\n               <ion-row>\n                  <ion-col style=\"padding-top:0px;max-width:40%;padding-right:0px;\">\n                    <ion-item no-lines style=\"border:1px solid black; border-radius:2px;text-align:center;width:70%;float:left\">\n                      <ion-label>{{hrs}}</ion-label>\n                    </ion-item>\n                    <ion-label style=\"font-weight:bold;float:left;font-size:2rem;margin:11px 8px 13px 9px\">:</ion-label>\n                  </ion-col>\n                  <ion-col style=\"padding-top:0px;max-width:30%\">\n                      <ion-item no-lines style=\"border:1px solid black; border-radius:2px;text-align:center\">\n                        <ion-label>{{mins}}</ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col style=\"padding-top:0px;max-width:30%\">\n                        <ion-item no-lines style=\"border:1px solid black; border-radius:2px;text-align:center\">\n                          <ion-label color=\"primary\">{{apm}}</ion-label>\n                        </ion-item>\n                      </ion-col>\n               </ion-row>\n               <ion-row>\n                  <ion-col style=\"text-align:center\" (click)=\"decHr()\" *ngIf=\"arrow_down_hrs==0\">\n                      <ion-icon ios=\"ios-arrow-down\" md=\"md-arrow-down\"  style=\"color:#000000\" ></ion-icon>\n                  </ion-col>\n                  <ion-col style=\"text-align:center\" *ngIf=\"arrow_down_hrs==1\">\n                    <ion-icon ios=\"ios-arrow-down\" md=\"md-arrow-down\" style=\"color:lightgrey\"></ion-icon>\n                </ion-col>\n                  <ion-col style=\"text-align:center\" (click)=\"decMin()\"  *ngIf=\"arrow_down_mins==0\">\n                      <ion-icon ios=\"ios-arrow-down\" md=\"md-arrow-down\"  style=\"margin-left:18px;color:#000000\"></ion-icon>\n                  </ion-col>\n                  <ion-col style=\"text-align:center\"   *ngIf=\"arrow_down_mins==1\">\n                    <ion-icon ios=\"ios-arrow-down\" md=\"md-arrow-down\"  style=\"margin-left:18px;color:lightgrey\"></ion-icon>\n                </ion-col>\n                  <ion-col>\n                    <ion-label></ion-label>\n                  </ion-col>\n                </ion-row>\n            </ion-grid>\n      \n    </ion-col>\n  </ion-row>\n  <ion-row style=\"border-top:1px solid gray\">\n      <ion-col style=\"text-align:center\">\n        <button ion-button outline (click)=\"close()\" style=\"border:none;\">Cancel</button>\n      </ion-col>\n      <ion-col style=\"text-align:center\">\n        <button ion-button outline (click)=\"setTime()\" style=\"border:none;\">Set</button>\n      </ion-col>\n  </ion-row>\n  \n  \n";
var TimerComponent = (function () {
    function TimerComponent(viewctrl, navparams) {
        this.viewctrl = viewctrl;
        this.hrs = "";
        this.mins = "";
        this.apm = "";
        this.arrow_up_hrs = 0;
        this.arrow_up_mins = 0;
        this.arrow_down_hrs = 0;
        this.arrow_down_mins = 0;
        var params = navparams.get('timeObj');
        this.hrs = params.hrs;
        this.mins = params.mins;
        this.apm = params.apm;
        var d = new Date();
        var hours = d.getHours();
        var mins = d.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        this.current_hrs = hours;
        this.current_mins = mins;
        this.current_apm = ampm;
    }
    TimerComponent.prototype.close = function () {
        this.viewctrl.dismiss({ "data": "" });
    };
    TimerComponent.prototype.ionViewDidEnter = function () {
        if (this.current_apm == this.apm) {
            if (this.current_hrs === parseInt(this.hrs)) {
                this.arrow_down_hrs = 1;
            }
            if (this.current_mins == parseInt(this.mins)) {
                this.arrow_down_mins = 1;
            }
        }
        this.checkAndSetHrs();
    };
    TimerComponent.prototype.setTime = function () {
        var time = { 'hrs': this.hrs, 'mins': this.mins, 'apm': this.apm };
        this.viewctrl.dismiss({ "data": time });
    };
    TimerComponent.prototype.setHours = function (hours) {
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        var hr = hours < 10 ? '0' + hours : hours;
        return hr;
    };
    TimerComponent.prototype.setMinutes = function (minutes) {
        var mins = minutes >= 10 ? minutes : '0' + minutes;
        return mins;
    };
    TimerComponent.prototype.checkAndSetHrs = function () {
        if (this.apm == 'AM') {
            if (parseInt(this.hrs) == 12) {
                this.arrow_up_hrs = 1;
                this.arrow_up_mins = 1;
                this.arrow_down_mins = 0;
            }
            this.mins = '00';
        }
    };
    TimerComponent.prototype.incHr = function () {
        this.arrow_down_mins = 0;
        this.hrs = parseInt(this.hrs) + 1;
        if (this.hrs == 12) {
            this.apm = (this.apm == 'AM') ? 'PM' : 'AM';
            this.checkAndSetHrs();
        }
        this.hrs = this.setHours(this.hrs);
        this.arrow_down_hrs = 0;
    };
    TimerComponent.prototype.incMin = function () {
        this.mins = parseInt(this.mins) + 1;
        this.arrow_down_mins = 0;
        //this.mins=this.mins+1;
        if (this.mins == 60) {
            this.arrow_down_hrs = 0;
            this.hrs = this.setHours(parseInt(this.hrs) + 1);
            if (this.hrs == 12) {
                this.apm = (this.apm == 'AM') ? 'PM' : 'AM';
                this.checkAndSetHrs();
            }
            this.mins = '00';
        }
        else {
            this.arrow_up_mins = 0;
            this.mins = this.setMinutes(this.mins);
        }
    };
    TimerComponent.prototype.check_currentHr = function () {
        if (this.apm == this.current_apm) {
            if (this.hrs == this.current_hrs) {
                this.arrow_down_hrs = 1;
                this.mins = this.setMinutes(this.current_mins);
                this.arrow_down_mins = 1;
                return true;
            }
        }
        return false;
    };
    TimerComponent.prototype.decHr = function () {
        this.arrow_up_hrs = 0;
        //this.arrow_up_mins=1;
        this.hrs = parseInt(this.hrs);
        this.hrs = this.hrs - 1;
        if (this.hrs == 0)
            this.hrs = 12;
        if (this.hrs == 11) {
            this.apm = (this.apm == 'AM') ? 'PM' : 'AM';
            this.arrow_up_mins = 0;
        }
        this.check_currentHr();
        this.hrs = this.setHours(this.hrs);
    };
    TimerComponent.prototype.checkminsandHeaders = function () {
        if (this.apm == this.current_apm) {
            if (this.hrs == this.current_hrs) {
                this.arrow_down_hrs = 1;
                if (this.mins == this.current_mins) {
                    this.arrow_down_mins = 1;
                    return true;
                }
            }
        }
        return false;
    };
    TimerComponent.prototype.decMin = function () {
        this.mins = parseInt(this.mins);
        this.mins = this.mins - 1;
        if (!this.checkminsandHeaders()) {
            if (this.mins == -1) {
                this.hrs = this.setHours(parseInt(this.hrs) - 1);
                if (this.hrs == this.current_hrs) {
                    this.arrow_down_hrs = 1;
                }
                if (this.hrs == 11) {
                    this.apm = (this.apm == 'AM') ? 'PM' : 'AM';
                    this.arrow_down_mins = 0;
                    this.arrow_down_hrs = 0;
                    this.arrow_up_hrs = 0;
                    this.arrow_up_mins = 0;
                }
                this.mins = 59;
            }
        }
        this.mins = this.setMinutes(this.mins);
    };
    TimerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'timer-component',
                    template: HTML_TXT
                },] },
    ];
    /** @nocollapse */
    TimerComponent.ctorParameters = function () { return [
        { type: ViewController, },
        { type: NavParams, },
    ]; };
    return TimerComponent;
}());
export { TimerComponent };
//# sourceMappingURL=timer-component.js.map