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
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { AddFieldContainerComponent } from './components/add-field-container/add-field-container.component';
import { ConfigureFieldContainerComponent } from './components/configure-field-container/configure-field-container.component';
import { ValidationFormlyFieldComponent } from './field/custom-type/validation-type.component';
import { PanelWrapperComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding()
    ),
    provideAnimations(),
    importProvidersFrom(
      FormlyModule.forRoot({
        types: [
          {
            name: 'validation-field',
            component: ValidationFormlyFieldComponent,
          },
        ],
        validationMessages: [
          { name: 'required', message: 'This field is required' },
          {
            name: 'minLength',
            message: (error, field: FormlyFieldConfig) =>
              `${
                field.props?.label || ''
              } length should be equal or more than ${error.requiredLength}`,
          },
          {
            name: 'maxLength',
            message: (error, field: FormlyFieldConfig) =>
              `${field.props?.label || ''} length should be less than ${
                error.requiredLength
              }`,
          },
          {
            name: 'pattern',
            message: `Input doesn't match the required pattern`,
          },
          {
            name: 'regexPattern',
            message: 'Regex pattern is invalid',
          },
        ],
        wrappers: [{ name: 'panel', component: PanelWrapperComponent }],
      }),
      StackPaneModule.forRoot({
        componentRegistry: [
          {
            component: AddFieldContainerComponent,
            type: StackPaneType.Drawer,
          },
          {
            component: ConfigureFieldContainerComponent,
            type: StackPaneType.Drawer,
          },
          {
            component: ChooseFieldDialogComponent,
            type: StackPaneType.Dialog,
          },
          {
            component: ManageFieldsComponent,
            type: StackPaneType.Drawer,
          },
        ],
      })
    ),
  ],
};
