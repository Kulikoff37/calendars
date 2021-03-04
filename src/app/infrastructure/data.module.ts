import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HolidayMockRepository } from './repository/holiday.mock.repository/holiday-mock.repository';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    HolidayMockRepository
  ]
})
export class InfrastructureModule { }
