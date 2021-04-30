import { Observable } from 'rxjs';
import { HolidayModel } from '../domain/holiday.model';

export abstract class HolidayRepository {
  abstract getHolidayByParams(shortName: string, date: Date | string): Observable<HolidayModel[]>;
  abstract getAllHolidays(): Observable<HolidayModel>;
}
