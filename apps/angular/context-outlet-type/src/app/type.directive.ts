import { Directive, Input } from '@angular/core';

export interface TypeTemplateContext<T> {
  $implicit: T;
  appList: T;
  index: number;
}

@Directive({
  selector: 'ng-template[appList]',
  standalone: true,
})
export class TypeDirective<T> {
  @Input('appList') data!: T[];

  static ngTemplateContextGuard<T>(
    dir: TypeDirective<T>,
    ctx: unknown,
  ): ctx is TypeTemplateContext<T> {
    return true;
  }
}
