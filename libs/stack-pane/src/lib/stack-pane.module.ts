import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StackPaneConfig } from './stack-pane.model';
import { StackPaneService } from './stack-pane.service';
import { stackPaneRouteFactory } from './stock-pane-routes.factory';
import {
  StackPaneContainerComponent,
  StackPaneDialogComponent,
  StackPaneDrawerComponent,
} from './components';

@NgModule({
  imports: [
    StackPaneContainerComponent,
    StackPaneDialogComponent,
    StackPaneDrawerComponent,
  ],
  exports: [
    StackPaneContainerComponent,
    StackPaneDialogComponent,
    StackPaneDrawerComponent,
  ],
})
export class StackPaneModule {
  static forRoot(
    config?: StackPaneConfig
  ): ModuleWithProviders<StackPaneModule> {
    return {
      ngModule: StackPaneModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (router: Router, service: StackPaneService) => {
            return () => {
              if (!config || !config.componentRegistry) {
                return;
              }

              service.config = config;

              router.resetConfig([
                ...config.componentRegistry.map((c) =>
                  stackPaneRouteFactory(c.component)
                ),
                ...router.config,
              ]);

              const subscription = router.events.subscribe((event) => {
                if (event instanceof NavigationEnd) {
                  service.reverse();
                  subscription.unsubscribe();
                }
              });
            };
          },
          deps: [Router, StackPaneService],
          multi: true,
        },
      ],
    };
  }
}
