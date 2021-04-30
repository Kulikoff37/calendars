import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { HolidayModel } from 'src/app/core/domain/holiday.model';
import { ChangeDetectionStrategy } from '@angular/core';
import { StateService } from '../state-service';
import { GetlHolidaysByParamsUsecase } from 'src/app/core/usecases/get-hoolidays-by-params.usecase';
import { HolidayWebRepository } from 'src/app/infrastructure/repository/holiday.web.repository/holiday-web-repository';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HolidayListComponent implements OnInit {

  holidays: HolidayModel[] = [];

  constructor(
    private stateService: StateService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const holidaysInstance = new GetlHolidaysByParamsUsecase(new HolidayWebRepository());
    this.stateService.holidaysParams$.pipe(
      switchMap(({shortName, date}) => holidaysInstance.execute(shortName, date)),
    ).subscribe((data: any) => {
      this.holidays = [...data.response.holidays];
      this.cdr.markForCheck();
    });
    
  }
}
