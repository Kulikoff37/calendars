import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GetAllCountriesUsecase } from 'src/app/core/usecases/get-all-countries.usecase';
import { CountriesLocalRepository } from 'src/app/infrastructure/repository/countries.local.repository/countries-local.repository';
import { Options } from '../models/options.interface';
import { UserSelectedParams } from '../models/params.interface';
import { StateService } from '../state-service';

@Component({
  selector: 'app-holidays-controls',
  templateUrl: './holidays-controls.component.html',
  styleUrls: ['./holidays-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HolidaysControlsComponent implements OnInit {

  options : Options[] = [];
  form: any;
  datePickerConfig = {
    format: 'DD.MM.YYYY',
    allowMultiSelect: false,
  }

  ngUnsubscribe$ = new Subject();

  constructor(
    private stateService: StateService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getCountries();
    this.initializeForm();
    this.form
      .valueChanges
      .pipe(
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe((values: UserSelectedParams) => {
        const {date, country} = values;
        const shortName = this.options.find(opt => opt.label === country)?.name;
        if (date && shortName ) {
          this.stateService.fetchHolidays({date, shortName})
        }
      })
  }

  private getCountries() {
    const countriesInstance = new GetAllCountriesUsecase(new CountriesLocalRepository());
    countriesInstance
      .execute()
      .pipe(
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe((countries) => {
        this.options = countries.map(({ SHORTNAME, ALFA2 }, idx) => ({
          id: idx + 1,
          label: SHORTNAME,
          name: ALFA2
        }))
      })
  }

  private initializeForm() {
    this.form = this.fb.group({
      country: [null],
      date: [null],
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
