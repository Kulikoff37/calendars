import { Observable, of } from "rxjs";
import { CountryModel } from "src/app/core/domain/country.model";
import { CountryRepository } from "src/app/core/repositories/country.repository";
import { countriesData } from "./countries.data";

export class CountriesLocalRepository extends CountryRepository {

  constructor() {
    super();
  }

  getAllCountries(): Observable<CountryModel[]> {
    return of(countriesData)
  }

}