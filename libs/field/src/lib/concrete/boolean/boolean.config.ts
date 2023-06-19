import { FormlyFieldConfig } from '@ngx-formly/core';
import { POSSIBLE_APPEARANCES } from '../../field.constant';
import {
  FieldAppearance,
  FieldConfig,
  FieldConfigFormFields,
  FieldType,
} from '../../field.model';
import { validations } from '../../validation';
import {
  BooleanFieldAddNew,
  BooleanFieldConfigFormModel,
} from './boolean.model';

export class BooleanFieldConfig implements FieldConfig {
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
      ],
      values: [
        {
          key: 'default',
          type: 'radio',
          props: {
            label: 'default',
            options: [
              {
                value: true,
                label: 'Yes',
              },
              {
                value: false,
                label: 'No',
              },
            ],
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
            options: POSSIBLE_APPEARANCES[FieldType.Boolean].map(
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
        {
          key: 'trueLabel',
          type: 'input',
          props: {
            label: 'True condition custom label',
            required: true,
          },
        },
        {
          key: 'falseLabel',
          type: 'input',
          props: {
            label: 'False condition custom label',
            required: true,
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
    ];
  }

  getConfigModelDefault(): BooleanFieldConfigFormModel {
    return {
      settings: {
        key: '',
        name: '',
      },
      values: {
        default: true,
      },
      appearance: {
        displayAs: POSSIBLE_APPEARANCES[FieldType.Boolean][0],
        helpText: '',
        trueLabel: 'True',
        falseLabel: 'False',
      },
      validation: {
        required: {
          enabled: false,
        },
      },
    };
  }

  getAddNewModelDefault(): BooleanFieldAddNew {
    return {
      name: '',
      key: '',
      helpText: '',
    };
  }
}
