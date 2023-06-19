import {
  FieldAddNewBase,
  FieldAppearanceBase,
  FieldConfigFormModel,
  FieldSettingsBase,
} from '../../field.model';
import { FieldValidationModelProps } from '../../validation';

export interface DateTimeFieldValues extends Record<string, unknown> {
  default: string;
}

export interface DateTimeFieldAppearance extends FieldAppearanceBase {
  helpText: string;
}

export interface DateTimeFieldConfigFormModel extends FieldConfigFormModel {
  settings: FieldSettingsBase;
  values: DateTimeFieldValues;
  appearance: DateTimeFieldAppearance;
  validation: Record<'required', FieldValidationModelProps>;
}

export interface DateTimeFieldAddNew extends FieldAddNewBase {
  helpText: string;
}
