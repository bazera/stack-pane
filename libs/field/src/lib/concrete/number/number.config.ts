import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  DisplayHelpText,
  FieldConfig,
  FieldConfigFormFields,
} from '../../field.model';
import {
  NumberFieldAddNew,
  NumberFieldConfigFormModel,
  NumberFieldFormat,
} from './number.model';
import {
  BASE_APPEARANCE,
  BASE_APPEARANCE_DEFAULT,
  BASE_SETTINGS,
  BASE_SETTINGS_CREATE,
  BASE_SETTINGS_CREATE_DEFAULT,
  BASE_SETTINGS_DEFAULT,
  BASE_VALIDATION,
} from '../../field.config';

export class NumberFieldConfig implements FieldConfig {
  getConfigFormFields(): FieldConfigFormFields {
    return {
      settings: [
        ...BASE_SETTINGS,
        {
          key: 'type',
          type: 'radio',
          props: {
            label: 'Number Format',
            options: [
              {
                label: 'Integer',
                value: NumberFieldFormat.Integer,
              },
              {
                label: 'Decimal',
                value: NumberFieldFormat.Decimal,
              },
              {
                label: 'Float',
                value: NumberFieldFormat.Float,
              },
            ],
          },
        },
        {
          key: 'precision',
          type: 'number',
          props: {
            label:
              'The total number of digits to store in this field, from both sides of the decimal point.',
          },
        },
        {
          key: 'scale',
          type: 'number',
          props: {
            label: 'The number of digits to the right of the decimal point.',
          },
        },
      ],
      values: [
        {
          key: 'default',
          type: 'number',
          props: {
            label: 'Default Value',
          },
        },
      ],
      validation: [...BASE_VALIDATION],
      appearance: [
        ...BASE_APPEARANCE,
        {
          key: 'placeholder',
          type: 'input',
          props: {
            label: 'Placeholder Text',
          },
        },
        {
          key: 'prefix',
          type: 'input',
          props: {
            label: 'Prefix',
          },
        },
        {
          key: 'suffix',
          type: 'input',
          props: {
            label: 'Suffix',
          },
        },
      ],
    };
  }

  getAddNewFormFields(): FormlyFieldConfig[] {
    return [...BASE_SETTINGS_CREATE];
  }

  getConfigModelDefault(): NumberFieldConfigFormModel {
    return {
      settings: {
        ...BASE_SETTINGS_DEFAULT,
        format: NumberFieldFormat.Integer,
        precision: 0,
        scale: 0,
      },
      values: {
        default: 0,
      },
      appearance: {
        ...BASE_APPEARANCE_DEFAULT,
        placeholder: '',
        prefix: '',
        suffix: '',
      },
      validation: {
        required: {
          enabled: false,
        },
      },
    };
  }

  getAddNewModelDefault(): NumberFieldAddNew {
    return {
      ...BASE_SETTINGS_CREATE_DEFAULT,
      format: NumberFieldFormat.Integer,
    };
  }
}
