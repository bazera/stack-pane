import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  FieldAddNewBase,
  FieldConfig,
  FieldConfigFormFields,
} from '../../field.model';
import {
  BooleanFieldCheckboxLabel,
  BooleanFieldConfigFormModel,
  BooleanFieldDisplayAs,
} from './boolean.model';
import {
  BASE_APPEARANCE,
  BASE_APPEARANCE_DEFAULT,
  BASE_SETTINGS,
  BASE_SETTINGS_CREATE_DEFAULT,
  BASE_SETTINGS_DEFAULT,
  BASE_VALIDATION,
} from '../../field.config';

export class BooleanFieldConfig implements FieldConfig {
  getConfigFormFields(): FieldConfigFormFields {
    return {
      settings: [...BASE_SETTINGS],
      values: [
        {
          key: 'default',
          type: 'radio',
          props: {
            label: 'Default Value',
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
      validation: [...BASE_VALIDATION],
      appearance: [
        ...BASE_APPEARANCE,
        {
          key: 'displayAs',
          type: 'radio',
          props: {
            label: 'Display field as',
            options: [
              {
                value: BooleanFieldDisplayAs.Checkbox,
                label: 'Single checkbox',
              },
              {
                value: BooleanFieldDisplayAs.Radio,
                label: 'Two radio buttons',
              },
            ],
          },
        },
        {
          key: 'checkboxLabel',
          type: 'radio',
          props: {
            label: 'Checkbox label',
            options: [
              {
                value: BooleanFieldCheckboxLabel.FieldName,
                label: 'Display field name as the label',
              },
              {
                value: BooleanFieldCheckboxLabel.Custom,
                label: 'Custom label',
              },
            ],
          },
        },
        {
          key: 'customLabel',
          type: 'input',
          props: {
            label: 'Checkbox Label',
          },
        },
        {
          key: 'trueLabel',
          type: 'input',
          props: {
            label: 'Label for true value',
          },
        },
        {
          key: 'falseLabel',
          type: 'input',
          props: {
            label: 'Label for false value',
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
        ...BASE_SETTINGS_DEFAULT,
      },
      values: {
        default: true,
      },
      appearance: {
        ...BASE_APPEARANCE_DEFAULT,
        checkboxLabel: BooleanFieldCheckboxLabel.FieldName,
        displayAs: BooleanFieldDisplayAs.Checkbox,
      },
      validation: {
        required: {
          enabled: false,
        },
      },
    };
  }

  getAddNewModelDefault(): FieldAddNewBase {
    return {
      ...BASE_SETTINGS_CREATE_DEFAULT,
    };
  }
}
