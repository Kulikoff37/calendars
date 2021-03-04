import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryModel } from '../domain/country.model';

@Injectable({
  providedIn: 'root'
})

export abstract class CountryRepository {
  abstract getAllCountries(): Observable<CountryModel>;
}
