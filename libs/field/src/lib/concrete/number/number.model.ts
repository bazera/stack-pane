import {
  FieldAddNewBase,
  FieldAppearanceBase,
  FieldConfigFormModel,
  FieldSettingsBase,
} from '../../field.model';
import { FieldValidationModelProps } from '../../validation';

export interface NumberFieldSettings extends FieldSettingsBase {
  type: NumberFieldType;
}

export enum NumberFieldType {
  Integer,
  Decimal,
}

export interface NumberFieldValues extends Record<string, unknown> {
  default: number;
}

export interface NumberFieldAppearance extends FieldAppearanceBase {
  helpText: string;
  displayHelpText: 'belowLabel' | 'tooltip';
  placeholder: string;
}

export interface NumberFieldConfigFormModel extends FieldConfigFormModel {
  settings: NumberFieldSettings;
  values: NumberFieldValues;
  appearance: NumberFieldAppearance;
  validation: Record<'required', FieldValidationModelProps>;
}

export interface NumberFieldAddNew extends FieldAddNewBase {
  helpText: string;
  displayHelpText: 'belowLabel' | 'tooltip';
}
