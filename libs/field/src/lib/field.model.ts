import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { FieldValidationModel } from './validation';

export enum FieldType {
  Text = 'Text',
  Number = 'Number',
  Boolean = 'Boolean',
  DateTime = 'DateTime',
}

export enum FieldAppearance {
  TextInput = 'input',
  Textarea = 'textarea',
  NumberInput = 'number',
  BooleanRadio = 'radio',
  Datepicker = 'datepicker',
}

export interface FieldConfig {
  getConfigFormFields(): FieldConfigFormFields;
  getAddNewFormFields(): FormlyFieldConfig[];
  getConfigModelDefault(): FieldConfigFormModel;
  getAddNewModelDefault(): FieldAddNewBase;
}

export interface FieldConfigFormFields {
  settings: FormlyFieldConfig[];
  values: FormlyFieldConfig[];
  validation: FormlyFieldConfig[];
  appearance: FormlyFieldConfig[];
}
export interface FieldSettingsBase {
  name: string;
  key: string;
}

export interface FieldAppearanceBase {
  displayAs: FieldAppearance;
}

export interface Field<T extends FieldConfigFormModel> {
  name: string;
  key: string;
  type: FieldType;
  configModel: T;
  model: Record<string, unknown>;
  fieldConfig: FormlyFieldConfig[];
}

export interface FieldDefinition<T extends FieldConfigFormModel> {
  configFormModels: T;
  configFormFields: FieldConfigFormFields;
  configForm: FormGroup | undefined;
  addFieldModel: FieldAddNewBase;
  addFieldFields: FormlyFieldConfig[];
  addFieldForm: FormGroup | undefined;
  preview$: Observable<FormlyFieldConfig[]> | undefined;
  init(config?: T): void;
  create(): Field<T>;
  update(): Field<T>;
}

export interface FieldConfigFormModel {
  settings: FieldSettingsBase;
  values: Record<string, unknown>;
  validation: Partial<FieldValidationModel>;
  appearance: FieldAppearanceBase;
}

export interface FieldAddNewBase {
  name: string;
  key: string;
}

export enum FieldTab {
  Settings,
  Values,
  Validation,
  Appearance,
}
