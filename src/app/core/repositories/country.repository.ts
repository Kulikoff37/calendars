import { Observable } from 'rxjs';
import { CountryModel } from '../domain/country.model';

export abstract class CountryRepository {
  abstract getAllCountries(): Observable<CountryModel[]>;
}
