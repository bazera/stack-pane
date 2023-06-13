import { Type, inject } from '@angular/core';
import { StackPaneService } from './stack-pane.service';
import { Route } from '@angular/router';
import { StackPaneComponent } from './components';
import { tap } from 'rxjs';

const getStackPaneGurads = (outlet: string) => {
  return {
    canDeactivate: [
      (component: StackPaneComponent) => {
        const service = inject(StackPaneService);

        if (service.isBroweserNavigation) {
          service.remove();
          return true;
        }

        return component.playLeaveAnimation().pipe(tap(() => service.remove()));
      },
    ],
    canActivate: [
      () => {
        const service = inject(StackPaneService);
        const layer = service.config?.componentRegistry?.find(
          (x) => x.outlet === outlet
        );

        if (layer) {
          service.add(outlet, layer.type);
        }
      },
    ],
  };
};

export function stackPaneRouteFactory(
  component: Type<unknown>,
  outlet: string
): Route {
  const { canActivate, canDeactivate } = getStackPaneGurads(outlet);

  return {
    path: outlet,
    component: StackPaneComponent,
    outlet: outlet,
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
