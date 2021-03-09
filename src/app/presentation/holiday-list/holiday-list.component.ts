import { Component, OnDestroy, OnInit } from '@angular/core';
import { HolidayModel } from 'src/app/core/domain/holiday.model';
import { GetAllHolidaysUsecase } from 'src/app/core/usecases/get-all-holidays.usecase';
import { ChangeDetectionStrategy } from '@angular/core';
import { HolidayMockRepository } from 'src/app/infrastructure/repository/holiday.mock.repository/holiday-mock.repository';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HolidayListComponent implements OnInit {

  holidays: HolidayModel[] = [];

  constructor() {}

  ngOnInit(): void {
    const holidayInstance = new GetAllHolidaysUsecase(new HolidayMockRepository());
    holidayInstance.execute().subscribe((data) => {
      this.holidays.push(data)
    })
  }
}
