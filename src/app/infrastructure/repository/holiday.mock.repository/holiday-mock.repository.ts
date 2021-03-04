import { Injectable } from '@angular/core';
import { HolidayRepository } from '../../../core/repositories/Holiday.repository';
import { HolidayModel } from '../../../core/domain/Holiday.model';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HolidayMockEntity } from './holiday-mock-entity';
import { HolidayMockRepositoryMapper } from './Holiday-mock-repository-mapper';

@Injectable({
  providedIn: 'root'
})
export class HolidayMockRepository extends HolidayRepository {

  private mapper = new HolidayMockRepositoryMapper();

  Holidays = [];

  constructor() {
    super();
  }

  getHolidayById(id: number): Observable<HolidayModel> {
    return from(this.Holidays)
      .pipe(filter((Holiday: HolidayMockEntity) => Holiday.id === id))
      .pipe(map(this.mapper.mapFrom));
  }

  getAllHolidays(): Observable<HolidayModel> {
    return from(this.Holidays)
      .pipe(map(this.mapper.mapFrom));
  }
}
