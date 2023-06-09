import { FormlyFieldConfig } from '@ngx-formly/core';

export type FieldValidations = 'required' | 'unique' | 'limitChar' | 'regex';

export type FieldValidationFields = Record<FieldValidations, FormlyFieldConfig>;

export type FieldValidationModel = Record<
  FieldValidations,
  FieldValidationModelProps
>;

export interface FieldValidationModelProps {
  enabled: boolean;
  value?: FieldValidationLimitChar | FieldValidationPattern;
}

export enum FieldValidationLimitCharOption {
  Min = 'Min',
  Max = 'Max',
  MinMax = 'MinMax',
}

export interface FieldValidationLimitChar {
  option: FieldValidationLimitCharOption;
  min?: number;
  max?: number;
}

export enum FieldValidatorRegexType {
  Custom,
  Email,
  Url,
}

export interface FieldValidationPattern {
  type: FieldValidatorRegexType;
  pattern: RegExp;
  flag: string;
}
