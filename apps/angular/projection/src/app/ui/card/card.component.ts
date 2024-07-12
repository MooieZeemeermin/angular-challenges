import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-card',
  template: `
    <div
      class="flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4"
      [class]="customClass">
      <ng-content select="[imageid]"></ng-content>

      <section>
        <ng-container *ngFor="let item of list">
          <ng-container
            [ngTemplateOutlet]="listElement"
            [ngTemplateOutletContext]="{ item: item }"></ng-container>
        </ng-container>
      </section>

      <ng-content select="[buttonid]"></ng-content>
    </div>
  `,
  standalone: true,
  imports: [NgIf, NgFor, ListItemComponent, NgTemplateOutlet],
})
export class CardComponent {
  @Input() list: any[] | null = null;
  @Input() customClass = '';
  @ContentChild('list') listElement!: TemplateRef<any>;
}
