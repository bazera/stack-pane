import { POSSIBLE_APPEARANCES } from '../../field.constant';
import { FieldType } from '../../field.model';
import {
  FieldValidationLimitCharOption,
  FieldValidatorRegexType,
} from '../../validation';
import { TextFieldAddNew, TextFieldConfigFormModel } from './text.model';

export const getTextFieldModelDefault = (): TextFieldConfigFormModel => {
  return {
    settings: {
      key: '',
      name: '',
      isTitle: false,
      translatable: false,
    },
    values: {
      default: '',
    },
    appearance: {
      displayAs: POSSIBLE_APPEARANCES[FieldType.Text][0],
      helpText: '',
      placeholder: '',
      displayCharCount: false,
      displayHelpText: 'belowLabel',
    },
    validation: {
      required: {
        enabled: false,
      },
      unique: {
        enabled: false,
      },
      limitChar: {
        enabled: false,
        value: {
          min: undefined,
          max: undefined,
          option: FieldValidationLimitCharOption.MinMax,
        },
      },
      regex: {
        enabled: false,
        value: {
          type: FieldValidatorRegexType.Custom,
          pattern: new RegExp(''),
          flag: '',
        },
      },
    },
  };
};

export const getTextFieldAddNewModelDefault = (): TextFieldAddNew => {
  return {
    name: '',
    key: '',
    displayHelpText: 'belowLabel',
    helpText: '',
    isTitle: false,
    translatable: false,
  };
};
