import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidaysControlsComponent } from './holidays-controls/holidays-controls.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { FilterPipe } from '../filter.pipe';
import { AutocompleteModule } from '../components/autocomplete/autocomplete.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';


@NgModule({
  declarations: [
    HolidayListComponent,
    HolidaysControlsComponent,
    FilterPipe
  ],
  exports: [
    HolidayListComponent,
    HolidaysControlsComponent
  ],
  imports: [
    CommonModule,
    AutocompleteModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    DpDatePickerModule,
  ]
})
export class PresentationModule { }
