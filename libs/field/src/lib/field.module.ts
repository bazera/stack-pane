import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FieldFactory } from './field.factory';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AddFieldComponent, ConfigureFieldComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        {
          name: 'minLength',
          message: (error, field: FormlyFieldConfig) =>
            `${field.props?.label || ''} length should be equal or more than ${
              error.requiredLength
            }`,
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
    }),
    AddFieldComponent,
    ConfigureFieldComponent,
  ],
  providers: [FieldFactory],
  exports: [
    FormlyMaterialModule,
    FormlyModule,
    AddFieldComponent,
    ConfigureFieldComponent,
  ],
})
export class FieldModule {}
