import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  DisplayHelpText,
  FieldConfig,
  FieldConfigFormFields,
} from '../../field.model';
import {
  LongTextFieldAddNew,
  LongTextFieldConfigFormModel,
  LongTextFieldFormat,
} from './long-text.model';
import {
  BASE_APPEARANCE,
  BASE_APPEARANCE_DEFAULT,
  BASE_SETTINGS,
  BASE_SETTINGS_CREATE,
  BASE_SETTINGS_CREATE_DEFAULT,
  BASE_SETTINGS_DEFAULT,
  BASE_VALIDATION,
} from '../../field.config';

export class LongTextFieldConfig implements FieldConfig {
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
          key: 'height',
          type: 'number',
          props: {
            label: 'Number of textarea rows (textarea height)',
          },
        },
        {
          key: 'elements',
          type: 'input',
          props: {
            label:
              'Rich text elements (WYSIWYG editor buttons) to enable [CHANGE INTO CUSTOM TYPE]',
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

  getConfigModelDefault(): LongTextFieldConfigFormModel {
    return {
      settings: {
        ...BASE_SETTINGS_DEFAULT,
        format: LongTextFieldFormat.Plain,
      },
      values: {
        default: '',
      },
      appearance: {
        ...BASE_APPEARANCE_DEFAULT,
        placeholder: '',
        elements: [],
        height: 0,
      },
      validation: {
        required: {
          enabled: false,
        },
      },
    };
  }

  getAddNewModelDefault(): LongTextFieldAddNew {
    return {
      ...BASE_SETTINGS_CREATE_DEFAULT,
      format: LongTextFieldFormat.Plain,
    };
  }
}
