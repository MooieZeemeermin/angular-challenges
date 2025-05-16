import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListComponent } from './list.component';
import { PersonComponent } from './person.component';
import { PersonDirective } from './person.directive';
import { TypeDirective } from './type.directive';

@Component({
  standalone: true,
  imports: [PersonComponent, ListComponent, PersonDirective, TypeDirective],
  selector: 'app-root',
  template: `
    <person [person]="person">
      <ng-template [personTemplate] let-name let-age="age">
        {{ name }}: {{ age }}
      </ng-template>
    </person>

    <list [list]="students">
      <ng-container *appList="students as student; index as i">
        {{ student.name }}: {{ student.age }} - {{ i }}
      </ng-container>
    </list>

    <list [list]="cities">
      <ng-container *appList="cities as city; index as i">
        {{ city.name }}: {{ city.country }} - {{ i }}
      </ng-container>
    </list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  person = {
    name: 'toto',
    age: 3,
  };

  students = [
    { name: 'toto', age: 3 },
    { name: 'titi', age: 4 },
  ];

  cities = [
    { name: 'Paris', country: 'France' },
    { name: 'Berlin', country: 'Germany' },
  ];
}
