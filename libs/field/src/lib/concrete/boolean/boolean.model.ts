import {
  FieldAddNewBase,
  FieldAppearanceBase,
  FieldConfigFormModel,
  FieldSettingsBase,
} from '../../field.model';
import { FieldValidationModelProps } from '../../validation';

export interface BooleanFieldValues extends Record<string, unknown> {
  default: boolean;
}

export interface BooleanFieldAppearance extends FieldAppearanceBase {
  helpText: string;
  trueLabel: string;
  falseLabel: string;
}

export interface BooleanFieldConfigFormModel extends FieldConfigFormModel {
  settings: FieldSettingsBase;
  values: BooleanFieldValues;
  appearance: BooleanFieldAppearance;
  validation: Record<'required', FieldValidationModelProps>;
}

export interface BooleanFieldAddNew extends FieldAddNewBase {
  helpText: string;
}
