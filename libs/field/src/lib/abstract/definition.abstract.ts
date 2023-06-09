import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  Field,
  FieldAddNewBase,
  FieldConfigFormFields,
  FieldConfigFormModel,
  FieldDefinition,
  FieldType,
} from '../field.model';
import { Observable, filter, map, startWith } from 'rxjs';
import { FormGroup } from '@angular/forms';

export abstract class AbstractFieldDefinition
  implements FieldDefinition<FieldConfigFormModel>
{
  abstract type: FieldType | undefined;

  configForm: FormGroup | undefined;
  addFieldForm: FormGroup | undefined;

  abstract configFormModels: FieldConfigFormModel;
  abstract configFormFields: FieldConfigFormFields;

  abstract addFieldModel: FieldAddNewBase;
  abstract addFieldFields: FormlyFieldConfig[];

  preview$: Observable<FormlyFieldConfig[]> | undefined;

  abstract create(): Field<FieldConfigFormModel>;
  abstract update(): Field<FieldConfigFormModel>;

  abstract generateFieldFromCreateModel(
    value: FieldAddNewBase
  ): FormlyFieldConfig[];
  abstract generateFieldFromConfigModel(
    value: FieldConfigFormModel
  ): FormlyFieldConfig[];

  init(config?: FieldConfigFormModel) {
    this.setForms(!!config);

    if (config) {
      this.configFormModels = config;
    }

    this.setPreview();
  }

  private setForms(existing: boolean) {
    if (existing) {
      this.configForm = new FormGroup({});
      return;
    }

    this.addFieldForm = new FormGroup({});
  }

  private setPreview() {
    if (this.configForm) {
      this.preview$ = this.configForm.valueChanges.pipe(
        startWith(this.configFormModels),
        filter(() => !this.configForm?.invalid),
        map(() => this.generateFieldFromConfigModel(this.configFormModels))
      );
      return;
    }

    if (this.addFieldForm) {
      this.preview$ = this.addFieldForm.valueChanges.pipe(
        startWith(this.addFieldModel),
        filter(() => !this.addFieldForm?.invalid),
        map((value) => this.generateFieldFromCreateModel(value))
      );
    }
  }
}
