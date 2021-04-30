import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HolidayParams } from './models/params.interface';

@Injectable({
  providedIn: 'root',
})

export class StateService {
  holidaysParams$: Subject<HolidayParams> = new Subject();

  fetchHolidays(params: HolidayParams) {
    this.holidaysParams$.next(params);
  }
}