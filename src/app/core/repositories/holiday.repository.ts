import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayModel } from '../domain/holiday.model';

@Injectable({
  providedIn: 'root'
})

export abstract class HolidayRepository {
  abstract getHolidayById(id: number): Observable<HolidayModel>;
  abstract getAllHolidays(): Observable<HolidayModel>;
}