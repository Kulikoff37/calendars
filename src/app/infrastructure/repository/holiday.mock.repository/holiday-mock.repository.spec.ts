import { inject, TestBed } from '@angular/core/testing';

import { HolidayMockRepository } from './holiday-mock.repository';

describe('HolidayRepositoryMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolidayMockRepository]
    });
  });

  it('should be created', inject([HolidayMockRepository], (service: HolidayMockRepository) => {
    expect(service).toBeTruthy();
  }));
});
