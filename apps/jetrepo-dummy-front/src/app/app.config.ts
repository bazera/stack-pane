import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { StackPaneModule, StackPaneType } from '@jetrepo-dummy/stack-pane';
import { AddFieldComponent } from './components/add-field/add-field.component';
import { ChooseFieldDialogComponent } from './components/choose-field-dialog/choose-field-dialog.component';
import { ManageFieldsComponent } from './components/manage-fields/manage-fields.component';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    importProvidersFrom(
      StackPaneModule.forRoot({
        componentRegistry: [
          {
            component: AddFieldComponent,
            type: StackPaneType.Sidenav,
          },
          {
            component: ChooseFieldDialogComponent,
            type: StackPaneType.Dialog,
          },
          {
            component: ManageFieldsComponent,
            type: StackPaneType.Sidenav,
          },
        ],
      })
    ),
  ],
};
