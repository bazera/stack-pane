import {
  FieldAddNewBase,
  FieldAppearanceBase,
  FieldConfigFormModel,
  FieldSettingsBase,
} from '../../field.model';
import { FieldValidationModelProps } from '../../validation';

export interface RichTextFieldSettings extends FieldSettingsBase {
  isTitle: boolean;
  translatable: boolean;
}

export interface RichTextFieldValues extends Record<string, unknown> {
  default: string;
}

export interface RichTextFieldAppearance extends FieldAppearanceBase {
  displayCharCount: boolean;
  helpText: string;
  displayHelpText: 'belowLabel' | 'tooltip';
  placeholder: string;
}

export interface RichTextFieldConfigFormModel extends FieldConfigFormModel {
  settings: RichTextFieldSettings;
  values: RichTextFieldValues;
  appearance: RichTextFieldAppearance;
  validation: Record<'required', FieldValidationModelProps>;
}

export interface RichTextFieldAddNew extends FieldAddNewBase {
  helpText: string;
  displayHelpText: 'belowLabel' | 'tooltip';
  isTitle: boolean;
  translatable: boolean;
}
