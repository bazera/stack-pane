import {
  FieldAddNewBase,
  FieldAppearanceBase,
  FieldConfigFormModel,
  FieldSettingsBase,
} from '../../field.model';
import { FieldValidationModelProps } from '../../validation';

export enum LongTextFieldFormat {
  Plain = 'Plain',
  Rich = 'Rich',
}

export enum RichTextFieldElement {
  Dummy,
}

export interface LongTextFieldSettings extends FieldSettingsBase {
  format: LongTextFieldFormat;
}

export interface LongTextFieldValues extends Record<string, unknown> {
  default: string;
}

export interface LongTextFieldAppearance extends FieldAppearanceBase {
  height?: number;
  elements?: Array<RichTextFieldElement>;
  placeholder: string;
}

export interface LongTextFieldConfigFormModel extends FieldConfigFormModel {
  settings: LongTextFieldSettings;
  values: LongTextFieldValues;
  appearance: LongTextFieldAppearance;
  validation: Record<'required', FieldValidationModelProps>;
}

export interface LongTextFieldAddNew extends FieldAddNewBase {
  format: LongTextFieldFormat;
}
