import { Component, OnInit } from '@angular/core';
import { HolidayModel } from 'src/app/core/domain/holiday.model';
import { GetAllHolidaysUsecase } from 'src/app/core/usecases/get-all-holidays.usecase';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent implements OnInit {

  holidays: Array<HolidayModel> = [];

  constructor(private getAllHolidays: GetAllHolidaysUsecase) { }

  ngOnInit(): void { }

}
