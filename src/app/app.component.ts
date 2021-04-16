import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendars';
  options = [
    { id: 1, label: 'Россия' },
    { id: 2, label: 'США' },
    { id: 3, label: 'Афганистан' }
  ];
  control = new FormControl();
}
