import { Injectable } from '@angular/core';
import { CountryRepository } from '../repositories/country.repository';
import { UseCase } from '../base/use-case';
import { CountryModel } from '../domain/country.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetAllCountriesUsecase implements UseCase<void, CountryModel[]> {

  constructor(private countriesRepositiry: CountryRepository) { }

  execute(): Observable<CountryModel[]> {
    return this.countriesRepositiry.getAllCountries();
  }
}