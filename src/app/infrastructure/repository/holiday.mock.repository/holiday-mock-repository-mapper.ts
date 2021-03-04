import { HolidayModel } from '../../../core/domain/Holiday.model';
import { Mapper } from '../../../core/base/mapper';
import { HolidayMockEntity } from './holiday-mock-entity';

export class HolidayMockRepositoryMapper extends Mapper <HolidayMockEntity, HolidayModel> {
  mapFrom(param: HolidayMockEntity): HolidayModel {
    return {
      name: param.name,
      family: param.family,
      birthday: new Date(param.birthday)
    };
  }

  mapTo(param: HolidayModel): HolidayMockEntity {
    return {
      id: 0,
      name: param.name,
      family: param.family,
      birthday: param.birthday.getTime()
    };
  }
}
