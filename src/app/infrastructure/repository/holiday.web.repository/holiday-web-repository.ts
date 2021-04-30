import { from, Observable } from "rxjs";
import { HolidayModel } from "src/app/core/domain/holiday.model";
import { HolidayRepository } from "src/app/core/repositories/holiday.repository";
import { key, url } from "./settings";

export class HolidayWebRepository extends HolidayRepository {
  getHolidayByParams(shortName: string, date: string ): Observable<HolidayModel[]> {
    const [day, month, year] = date.toString().split('.')
    return from(fetch(`${url}${key}&country=${shortName}&year=${year}&month=${month}`).then((response) => response.json()))
  }
  getAllHolidays(): Observable<HolidayModel> {
    throw new Error("Method not implemented.");
  }
  
}