import { UseCase } from '../base/use-case';
import { HolidayModel } from '../domain/holiday.model';
import { Observable } from 'rxjs';
import { HolidayMockRepository } from '../../infrastructure/repository/holiday.mock.repository/holiday-mock.repository';

export class GetAllHolidaysUsecase implements UseCase<void, HolidayModel> {

  constructor(private holidayRepository: HolidayMockRepository) { }

  execute(): Observable<HolidayModel> {
    return this.holidayRepository.getAllHolidays();
  }
}