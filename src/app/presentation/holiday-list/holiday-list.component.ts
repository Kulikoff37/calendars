import { Component, OnInit } from '@angular/core';
import { HolidayModel } from 'src/app/core/domain/holiday.model';
import { GetAllHolidaysUsecase } from 'src/app/core/usecases/get-all-holidays.usecase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss']
})
export class HolidayListComponent implements OnInit {

  holidays: HolidayModel[] = [];

  constructor(private getAllHolidays: GetAllHolidaysUsecase) { }

  ngOnInit(): void {
    this.getAllHolidays.execute().subscribe((data) => {
      this.holidays.push(data)
    })
  }

}
