import { HolidayModel } from '../../../core/domain/holiday.model';
import { Mapper } from '../../../core/base/mapper';
import { HolidayMockEntity } from './holiday-mock-entity';

export class HolidayMockRepositoryMapper extends Mapper <HolidayMockEntity, HolidayModel> {
  mapFrom(param: HolidayMockEntity): HolidayModel {
    return {
      ...param
    };
  }

  mapTo(param: HolidayModel): HolidayMockEntity {
    return {
      id: 0,
      ...param
    };
  }
}
