import { HolidayRepository } from '../../../core/repositories/holiday.repository';
import { HolidayModel } from '../../../core/domain/holiday.model';
import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HolidayMockEntity } from './holiday-mock-entity';
import { usHolidays } from './holiday-mock-data';

export class HolidayMockRepository extends HolidayRepository {


  Holidays = [...usHolidays];

  constructor() {
    super();
  }

  getHolidayByCountryId(id: number): Observable<HolidayModel> {
    return from(this.Holidays)
      .pipe(filter((Holiday: HolidayMockEntity) => Holiday.id === id));
  }

  getAllHolidays(): Observable<HolidayModel> {
    return from(this.Holidays);
  }
}
