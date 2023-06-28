import {
  FieldAddNewBase,
  FieldAppearanceBase,
  FieldConfigFormModel,
  FieldSettingsBase,
} from '../../field.model';
import { FieldValidationModelProps } from '../../validation';

export interface ShortTextFieldSettings extends FieldSettingsBase {
  isTitle: boolean;
}

export interface ShortTextFieldValues extends Record<string, unknown> {
  default: string;
}

export interface ShortTextFieldAppearance extends FieldAppearanceBase {
  displayCharCount: boolean;
  placeholder: string;
}

export interface ShortTextFieldConfigFormModel extends FieldConfigFormModel {
  settings: ShortTextFieldSettings;
  values: ShortTextFieldValues;
  appearance: ShortTextFieldAppearance;
  validation: Record<
    'required' | 'unique' | 'limitChar' | 'regex',
    FieldValidationModelProps
  >;
}

export interface ShortTextFieldAddNew extends FieldAddNewBase {
  isTitle: boolean;
}
