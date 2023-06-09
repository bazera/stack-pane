import { FormlyFieldConfig } from '@ngx-formly/core';
import { POSSIBLE_APPEARANCES } from '../../field.constant';
import {
  FieldAppearance,
  FieldConfigFormFields,
  FieldType,
} from '../../field.model';
import { TextFieldAddNew, TextFieldConfigFormModel } from './text.model';
import {
  FieldValidationLimitCharOption,
  FieldValidatorRegexType,
  validations,
} from '../../validation';

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

export const getTextFieldConfigFields = (): FieldConfigFormFields => {
  return {
    settings: [
      {
        key: 'name',
        type: 'input',
        props: {
          label: 'Name',
          required: true,
        },
      },
      {
        key: 'key',
        type: 'input',
        props: {
          label: 'Key',
          required: true,
          disabled: true,
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
      validations.required,
      validations.unique,
      validations.limitChar,
      validations.regex,
    ],
    appearance: [
      {
        key: 'displayAs',
        type: 'radio',
        props: {
          label: 'Display Field As',
          options: POSSIBLE_APPEARANCES[FieldType.Text].map(
            (value: FieldAppearance) => ({
              label: value,
              value,
            })
          ),
        },
      },
      {
        key: 'helpText',
        type: 'textarea',
        props: {
          label: 'Help Text',
          placeholder: '',
          description: 'Additional information about this field for editors.',
        },
      },
    ],
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

export const getTextFieldAddNewFormFields = (): FormlyFieldConfig[] => {
  return [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name',
        required: true,
      },
    },
    {
      key: 'key',
      type: 'input',
      props: {
        label: 'Key',
        required: true,
        placeholder: 'Enter Name and Key will be generated automatically',
        description: 'This is a human-readable identifier used in API.',
      },
    },
    {
      key: 'helpText',
      type: 'textarea',
      props: {
        label: 'Help Text',
        placeholder: '',
        description: 'Additional information about this field for editors.',
      },
    },
    {
      key: 'displayHelpText',
      type: 'radio',
      props: {
        label: 'Display Help Text',
        options: [
          {
            value: 'belowLabel',
            label: 'Below the field name label',
          },
          {
            value: 'tooltip',
            label: 'In a tooltip of the "help" icon',
          },
        ],
      },
    },
  ];
};
