import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { AutocompleteContentDirective } from './autocomplete-content.directive';
import { OptionComponent } from './option/option.component';
import { switchMap } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  template: `
    <ng-template #root>
      <div class="autocomplete">
        <ng-container *ngTemplateOutlet="content.tpl"></ng-container>
      </div>
    </ng-template>
  `,
  exportAs: 'appAutocomplete',
  styleUrls: ['./autocomplete.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent {
  @ViewChild('root') rootTemplate!: TemplateRef<HTMLBaseElement>;

  @ContentChild(AutocompleteContentDirective) content!: AutocompleteContentDirective;

  @ContentChildren(OptionComponent) options!: QueryList<OptionComponent>;

  optionsClick() {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map((option: { click$: Observable<string>; }) => option.click$);
        return merge(...clicks$);
      })
    );
  }
}
