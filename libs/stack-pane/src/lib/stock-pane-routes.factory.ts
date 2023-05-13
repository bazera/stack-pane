import { Type, inject } from '@angular/core';
import { StackPaneService } from './stack-pane.service';
import {
  convertOutletToComponentName,
  getComponentNameKebab,
} from './utils.fn';
import { Route } from '@angular/router';
import { StackPaneComponent } from './components';
import { tap } from 'rxjs';

const getStackPaneGurads = (outlet: string) => {
  return {
    canDeactivate: [
      (component: StackPaneComponent) => {
        const stackPane = inject(StackPaneService);

        // leave animation has some issues

        return component
          .playLeaveAnimation()
          .pipe(tap(() => stackPane.remove()));
      },
    ],
    canActivate: [
      () => {
        const service = inject(StackPaneService);
        const layer = service.config?.componentRegistry?.find(
          (x) => x.component.name === convertOutletToComponentName(outlet)
        );

        if (layer) {
          inject(StackPaneService).add(outlet, layer.type);
        }
      },
    ],
  };
};

export function stackPaneRouteFactory(component: Type<unknown>): Route {
  const componentNameKebeb = getComponentNameKebab(component.name);
  const { canActivate, canDeactivate } = getStackPaneGurads(componentNameKebeb);

  return {
    path: componentNameKebeb,
    component: StackPaneComponent,
    outlet: componentNameKebeb,
    canActivate,
    canDeactivate,
    children: [
      {
        path: '',
        component,
      },
    ],
  };
}