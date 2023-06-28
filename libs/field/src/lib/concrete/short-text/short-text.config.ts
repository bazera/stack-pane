import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  DisplayHelpText,
  FieldConfig,
  FieldConfigFormFields,
} from '../../field.model';
import {
  FieldValidationLimitCharOption,
  FieldValidatorRegexType,
  validations,
} from '../../validation';
import {
  ShortTextFieldConfigFormModel,
  ShortTextFieldAddNew,
} from './short-text.model';
import {
  BASE_APPEARANCE,
  BASE_APPEARANCE_DEFAULT,
  BASE_SETTINGS,
  BASE_SETTINGS_CREATE,
  BASE_SETTINGS_CREATE_DEFAULT,
  BASE_SETTINGS_DEFAULT,
  BASE_VALIDATION,
} from '../../field.config';

export class ShortTextFieldConfig implements FieldConfig {
  getConfigFormFields(): FieldConfigFormFields {
    return {
      settings: [
        ...BASE_SETTINGS,
        {
          key: 'isTitle',
          type: 'checkbox',
          props: {
            label: 'This is the title of this entity',
          },
        },
      ],
      values: [
        {
          key: 'default',
          type: 'input',
          props: {
            label: 'Default Value',
          },
        },
      ],
      validation: [
        ...BASE_VALIDATION,
        validations.unique,
        validations.limitChar,
        validations.regex,
      ],
      appearance: [
        ...BASE_APPEARANCE,
        {
          key: 'displayCharCount',
          type: 'checkbox',
          props: {
            label: 'Display character counter',
          },
        },
        {
          key: 'placeholder',
          type: 'input',
          props: {
            label: 'Placeholder Text',
          },
        },
      ],
    };
  }

  getAddNewFormFields(): FormlyFieldConfig[] {
    return [
      ...BASE_SETTINGS_CREATE,
      {
        key: 'isTitle',
        type: 'checkbox',
        props: {
          label: 'This is the title of this entity',
        },
      },
    ];
  }

  getConfigModelDefault(): ShortTextFieldConfigFormModel {
    return {
      settings: {
        ...BASE_SETTINGS_DEFAULT,
        isTitle: false,
      },
      values: {
        default: '',
      },
      appearance: {
        ...BASE_APPEARANCE_DEFAULT,
        placeholder: '',
        displayCharCount: false,
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
  }

  getAddNewModelDefault(): ShortTextFieldAddNew {
    return {
      ...BASE_SETTINGS_CREATE_DEFAULT,
      isTitle: false,
    };
  }
}
