import { Injectable, Type } from '@angular/core';
import {
  StackPaneConfig,
  StackPaneLayer,
  StackPaneType,
} from './stack-pane.model';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { getComponentNameKebab } from './utils.fn';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StackPaneService {
  private _outletStack: BehaviorSubject<StackPaneLayer[]> = new BehaviorSubject<
    StackPaneLayer[]
  >([]);
  get outletStack(): Observable<string[]> {
    return this._outletStack.pipe(map((stack) => stack.map((i) => i.outlet)));
  }

  config: StackPaneConfig | undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  getLayerIndex(outlet: string) {
    const stack = this._outletStack.getValue();
    return stack.findIndex((i) => i.outlet === outlet);
  }

  getLayer(outlet: string) {
    const stack = this._outletStack.getValue();
    console.log(stack);
    return stack.find((i) => i.outlet === outlet);
  }

  add(outlet: string, type: StackPaneType) {
    const stack = this._outletStack.getValue();
    this._outletStack.next([...stack, { outlet, type }]);
  }

  remove() {
    const stack = this._outletStack.getValue();
    this._outletStack.next([
      ...stack.filter((_, index) => index !== stack.length - 1),
    ]);
  }

  reverse() {
    const stack = this._outletStack.getValue();
    this._outletStack.next(stack.reverse());
  }

  close(extras?: NavigationExtras) {
    const stack = this._outletStack.getValue();

    if (!stack.length) {
      return;
    }

    console.log(stack.map((x) => x.outlet));

    const outlets = stack
      .map((s) => s.outlet)
      .reduce<Record<string, string | null>>((acc, curr, index) => {
        acc[curr] = index !== stack.length - 1 ? curr : null;

        return acc;
      }, {} as Record<string, string | null>);

    this.router.navigate([{ outlets }], {
      queryParams: this.activatedRoute.snapshot.queryParams,
      ...extras,
    });
  }

  open(component: Type<unknown>) {
    if (
      !this.config?.componentRegistry
        ?.map((x) => x.component)
        .includes(component)
    ) {
      throw new Error(
        `${component.name} was not found in stack pane component registry`
      );
    }

    const componentNameKebeb = getComponentNameKebab(component.name);
    this.router.navigate([
      { outlets: { [componentNameKebeb]: componentNameKebeb } },
    ]);
  }
}
