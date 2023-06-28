import {
  FieldAppearanceBase,
  FieldConfigFormModel,
  FieldSettingsBase,
} from '../../field.model';
import { FieldValidationModelProps } from '../../validation';

export enum BooleanFieldDisplayAs {
  Checkbox,
  Radio,
}

export enum BooleanFieldCheckboxLabel {
  FieldName,
  Custom,
}

export interface BooleanFieldValues extends Record<string, unknown> {
  default: boolean;
}

export interface BooleanFieldAppearance extends FieldAppearanceBase {
  displayAs: BooleanFieldDisplayAs;
  checkboxLabel: BooleanFieldCheckboxLabel;
  customLabel?: string;
  trueLabel?: string;
  falseLabel?: string;
}

export interface BooleanFieldConfigFormModel extends FieldConfigFormModel {
  settings: FieldSettingsBase;
  values: BooleanFieldValues;
  appearance: BooleanFieldAppearance;
  validation: Record<'required', FieldValidationModelProps>;
}
