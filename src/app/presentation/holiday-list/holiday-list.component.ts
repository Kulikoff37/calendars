import { Component, OnDestroy, OnInit } from '@angular/core';
import { HolidayModel } from 'src/app/core/domain/holiday.model';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HolidayListComponent implements OnInit {

  holidays: HolidayModel[] = [];

  constructor() {}

  ngOnInit(): void {}
}
