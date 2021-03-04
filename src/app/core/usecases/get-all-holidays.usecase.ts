import { Injectable } from '@angular/core';
import { HolidayRepository } from '../repositories/holiday.repository';
import { UseCase } from '../base/use-case';
import { HolidayModel } from '../domain/holiday.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetAllHolidaysUsecase implements UseCase<void, HolidayModel> {

  constructor(private holidayRepository: HolidayRepository) { }

  execute(): Observable<HolidayModel> {
    return this.holidayRepository.getAllHolidays();
  }
}