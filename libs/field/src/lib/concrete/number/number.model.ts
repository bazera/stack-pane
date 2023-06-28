import {
  FieldAddNewBase,
  FieldAppearanceBase,
  FieldConfigFormModel,
  FieldSettingsBase,
} from '../../field.model';
import { FieldValidationModelProps } from '../../validation';

export interface NumberFieldSettings extends FieldSettingsBase {
  format: NumberFieldFormat;
  precision?: number;
  scale?: number;
}

export enum NumberFieldFormat {
  Integer = 'Integer',
  Decimal = 'Decimal',
  Float = 'Float',
}

export interface NumberFieldValues extends Record<string, unknown> {
  default: number;
}

export interface NumberFieldAppearance extends FieldAppearanceBase {
  prefix: string;
  suffix: string;
  placeholder: string;
}

export interface NumberFieldConfigFormModel extends FieldConfigFormModel {
  settings: NumberFieldSettings;
  values: NumberFieldValues;
  appearance: NumberFieldAppearance;
  validation: Record<'required', FieldValidationModelProps>;
}

export interface NumberFieldAddNew extends FieldAddNewBase {
  format: NumberFieldFormat;
}
