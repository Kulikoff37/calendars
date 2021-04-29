import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetAllCountriesUsecase } from './core/usecases/get-all-countries.usecase';
import { CountriesLocalRepository } from './infrastructure/repository/countries.local.repository/countries-local.repository';
import { Options } from './presentation/models/options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Праздники стран мира';
}
