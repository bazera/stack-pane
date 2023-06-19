import { FormlyFieldConfig } from '@ngx-formly/core';
import { POSSIBLE_APPEARANCES } from '../../field.constant';
import {
  FieldAppearance,
  FieldConfig,
  FieldConfigFormFields,
  FieldType,
} from '../../field.model';
import {
  NumberFieldAddNew,
  NumberFieldConfigFormModel,
  NumberFieldType,
} from './number.model';
import { validations } from '../../validation';

export class NumberFieldConfig implements FieldConfig {
  getConfigFormFields(): FieldConfigFormFields {
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
        {
          key: 'type',
          type: 'radio',
          props: {
            label: 'Type',
            options: [
              {
                label: 'Integer',
                value: NumberFieldType.Integer,
              },
              {
                label: 'Decimal',
                value: NumberFieldType.Decimal,
              },
            ],
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
      validation: [validations.required],
      appearance: [
        {
          key: 'displayAs',
          type: 'radio',
          props: {
            label: 'Display Field As',
            options: POSSIBLE_APPEARANCES[FieldType.Number].map(
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
  }

  getAddNewFormFields(): FormlyFieldConfig[] {
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
  }

  getConfigModelDefault(): NumberFieldConfigFormModel {
    return {
      settings: {
        key: '',
        name: '',
        type: NumberFieldType.Integer,
      },
      values: {
        default: 0,
      },
      appearance: {
        displayAs: POSSIBLE_APPEARANCES[FieldType.Number][0],
        helpText: '',
        placeholder: '',
        displayHelpText: 'belowLabel',
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
      name: '',
      key: '',
      helpText: '',
      displayHelpText: 'belowLabel',
    };
  }
}
