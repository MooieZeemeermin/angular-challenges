import { Directive } from '@angular/core';

export interface SelectTemplateContext {
  age: number;
  $implicit: string;
}

@Directive({ selector: 'ng-template[personTemplate]', standalone: true })
export class PersonDirective {
  static ngTemplateContextGuard(
    dir: PersonDirective,
    ctx: unknown,
  ): ctx is SelectTemplateContext {
    // The guard body is not used at runtime, and included only to avoid TypeScript errors.
    return true;
  }
}
