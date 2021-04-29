import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';
import { GetAllCountriesUsecase } from 'src/app/core/usecases/get-all-countries.usecase';
import { CountriesLocalRepository } from 'src/app/infrastructure/repository/countries.local.repository/countries-local.repository';
import { Options } from '../models/options.interface';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getCountries();
    this.initializeForm();
    this.form
      .valueChanges
      .pipe(
        takeUntil(this.ngUnsubscribe$),
      )
      .subscribe(({date, country}) => {
        if (date && country) {
          console.log('download')
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
        this.options = countries.map(({ SHORTNAME }, idx) => ({
          id: idx + 1,
          label: SHORTNAME
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
