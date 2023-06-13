import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { StackPaneModule, StackPaneType } from '@jetrepo-dummy/stack-pane';
import { ChooseFieldDialogComponent } from './components/choose-field-dialog/choose-field-dialog.component';
import { ManageFieldsComponent } from './components/manage-fields/manage-fields.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AddFieldContainerComponent } from './components/add-field-container/add-field-container.component';
import { ConfigureFieldContainerComponent } from './components/configure-field-container/configure-field-container.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding()
    ),
    provideAnimations(),
    importProvidersFrom(
      StackPaneModule.forRoot({
        componentRegistry: [
          {
            component: AddFieldContainerComponent,
            outlet: 'add-field',
            type: StackPaneType.Drawer,
          },
          {
            component: ConfigureFieldContainerComponent,
            outlet: 'configure-field',
            type: StackPaneType.Drawer,
          },
          {
            component: ChooseFieldDialogComponent,
            outlet: 'choose-field-dialog',
            type: StackPaneType.Dialog,
          },
          {
            component: ManageFieldsComponent,
            outlet: 'manage-fields',
            type: StackPaneType.Drawer,
          },
        ],
      })
    ),
  ],
};
