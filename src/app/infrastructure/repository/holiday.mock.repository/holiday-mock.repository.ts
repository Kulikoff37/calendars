import { HolidayRepository } from '../../../core/repositories/holiday.repository';
import { HolidayModel } from '../../../core/domain/holiday.model';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { usHolidays } from './holiday-mock-data';

export class HolidayMockRepository extends HolidayRepository {

  Holidays = [...usHolidays];

  constructor() {
    super();
  }

  getHolidayByParams(shortName: string, date: Date | string): Observable<HolidayModel[]> {
    return of(this.Holidays)
      .pipe(map((Holidays: HolidayModel[]) => {
        return Holidays.filter(elem => elem.name === shortName);
      }));
  }

  getAllHolidays(): Observable<HolidayModel> {
    return from(this.Holidays);
  }
}
