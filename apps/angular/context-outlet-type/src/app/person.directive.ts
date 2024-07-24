import { Directive } from '@angular/core';

export interface SelectTemplateContext {
  age: number;
  name: string;
  $implicit: string;
}

@Directive({ selector: 'ng-template[personTemplate]', standalone: true })
export class PersonDirective {
  static ngTemplateContextGuard(
    dir: PersonDirective,
    ctx: any,
  ): ctx is SelectTemplateContext {
    return true;
  }
}
