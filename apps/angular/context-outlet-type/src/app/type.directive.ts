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
  //   @Input({ required: true }) lijstTemplate!: T[];

  static ngTemplateContextGuard<T2>(
    dir: TypeDirective<T2>,
    ctx: unknown,
  ): ctx is TypeTemplateContext<T2> {
    return true;
  }
}
