import { Observable } from 'rxjs';
import { HolidayWebRepository } from 'src/app/infrastructure/repository/holiday.web.repository/holiday-web-repository';
import { UseCase } from '../base/use-case';
import { HolidayModel } from '../domain/holiday.model';

export class GetlHolidaysByParamsUsecase implements UseCase<string, HolidayModel[]> {

  constructor(private holidayRepository: HolidayWebRepository) { }

  execute(shortName: string, date: string ): Observable<HolidayModel[]> {
    return this.holidayRepository.getHolidayByParams(shortName, date);
  }
}