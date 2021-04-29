import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysControlsComponent } from './holidays-controls.component';

describe('HolidaysControlsComponent', () => {
  let component: HolidaysControlsComponent;
  let fixture: ComponentFixture<HolidaysControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaysControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaysControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
