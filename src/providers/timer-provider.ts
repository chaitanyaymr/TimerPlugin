import {Injectable} from '@angular/core';

@Injectable()
export class TimerProvider
{
    getDate()
    {
        return new Date().toDateString();
    }
}
