import {
  FieldAddNewBase,
  FieldAppearanceBase,
  FieldConfigFormModel,
  FieldSettingsBase,
} from '../../field.model';

export interface TextFieldSettings extends FieldSettingsBase {
  isTitle: boolean;
  translatable: boolean;
}

export interface TextFieldValues extends Record<string, unknown> {
  mode: 'multi' | 'single';
  default: string;
}

export interface TextFieldAppearance extends FieldAppearanceBase {
  displayCharCount: boolean;
  helpText: string;
  displayHelpText: 'belowLabel' | 'tooltip';
  placeholder: string;
}

export interface TextFieldConfigFormModel extends FieldConfigFormModel {
  settings: TextFieldSettings;
  values: TextFieldValues;
  appearance: TextFieldAppearance;
}

export interface TextFieldAddNew extends FieldAddNewBase {
  helpText: string;
  displayHelpText: 'belowLabel' | 'tooltip';
  isTitle: boolean;
  translatable: boolean;
}
