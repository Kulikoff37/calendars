import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayModel } from '../domain/holiday.model';

export abstract class HolidayRepository {
  abstract getHolidayByCountryId(id: number): Observable<HolidayModel>;
  abstract getAllHolidays(): Observable<HolidayModel>;
}
