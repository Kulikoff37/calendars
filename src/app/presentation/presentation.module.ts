import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayListComponent } from './holiday-list/holiday-list.component';

@NgModule({
  declarations: [HolidayListComponent],
  exports: [
    HolidayListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PresentationModule { }
