import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';


@Component({
    selector:'timer-component',
    templateUrl:'timer.html'
})

export class TimerComponent
{
    hrs:any="";
  mins:any="";
  apm:any="";
  arrow_up_hrs:number=0;
  arrow_up_mins:number=0;
  arrow_down_hrs:number=0;
  arrow_down_mins:number=0;
  current_hrs: number;
  current_mins: number;
  current_apm: any;
 
  constructor(public viewctrl:ViewController,navparams:NavParams) {
    let params=navparams.get('timeObj');
    this.hrs=params.hrs;
    this.mins=params.mins;
    this.apm=params.apm;
    var d=new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    this.current_hrs=hours;
    this.current_mins=mins;
    this.current_apm=ampm;
  }

  close(){
    this.viewctrl.dismiss({"data":""})
  }

  ionViewDidEnter(){
   
      if(this.current_apm==this.apm)
      {
        if(this.current_hrs===parseInt(this.hrs))
        {
          this.arrow_down_hrs=1;
        }
        if(this.current_mins==parseInt(this.mins))
        {
          this.arrow_down_mins=1;
        }
      }
      this.checkAndSetHrs();
  }

  setTime()
  {
    let time={'hrs':this.hrs,'mins':this.mins,'apm':this.apm}
    this.viewctrl.dismiss({"data": time })
  }

  setHours(hours)
  {
   
   hours = hours % 12;
   hours = hours ? hours : 12; // the hour '0' should be '12'
   let hr=hours<10?'0'+hours:hours;
   return hr;
  }
 setMinutes(minutes)
 {
    let mins=minutes>=10?minutes:'0'+minutes;
    return mins;
 }
 checkAndSetHrs()
 {
  if(this.apm=='AM')
  {
    if(parseInt(this.hrs)==12)
    {
         this.arrow_up_hrs=1;
         this.arrow_up_mins=1;
         this.arrow_down_mins=0;
    }
    this.mins='00';
  }
 }
   incHr()
   {
    this.hrs=parseInt(this.hrs)+1;
    if(this.hrs==12)
            {
              this.apm=(this.apm=='AM')?'PM':'AM';
              this.checkAndSetHrs();
           }
    this.hrs=this.setHours(this.hrs);
    this.arrow_down_hrs=0;
   }
  incMin()
   {
     
     this.mins=parseInt(this.mins)+1;
     this.arrow_down_mins=0;
     //this.mins=this.mins+1;
      if(this.mins==60)
        {
          this.arrow_down_hrs=0;
          this.hrs=this.setHours(parseInt(this.hrs)+1);
            if(this.hrs==12)
            {
              this.apm=(this.apm=='AM')?'PM':'AM';
              this.checkAndSetHrs(); 
            }
          this.mins='00';
        }
    else
     {
         this.arrow_up_mins=0;
         this.mins=this.setMinutes(this.mins);
     }
   }
   check_currentHr()
   {
     if(this.apm==this.current_apm)
     {
       if(this.hrs==this.current_hrs)
       {
          this.arrow_down_hrs=1;
          return true;
       }
     }
     return false;
   }
   decHr()
   {
    this.arrow_up_hrs=0;
    this.arrow_up_mins=1;
     this.hrs=parseInt(this.hrs);
   
      this.hrs=this.hrs-1;
      if(this.hrs==0)
        this.hrs=12;
       if(this.hrs==11)
       {
         this.apm=(this.apm=='AM')?'PM':'AM';
       }
       this.check_currentHr();
     this.hrs=this.setHours(this.hrs);
    
   }
   checkminsandHeaders()
   {  
           if(this.apm=this.current_apm)
           {
             if(this.hrs==this.current_hrs)
             {
              this.arrow_down_hrs=1;
               if(this.mins==this.current_mins)
               {
                 this.arrow_down_mins=1;
                
                 return true;
               }
             }
           }
           return false;
   }
   decMin()
   {

     this.mins=parseInt(this.mins);
     this.mins=this.mins-1;
     if(!this.checkminsandHeaders())
     {
      if(this.mins==-1)
      {
        this.hrs=this.setHours(parseInt(this.hrs)-1);
        if(this.hrs==11)
        {
          this.apm=(this.apm=='AM')?'PM':'AM';
          this.arrow_down_mins=0;
          this.arrow_down_hrs=0;
        }
        this.mins=59;
       
      }
      else
      this.mins=this.setMinutes(this.mins);
     }
     
     
   
    
   }
}