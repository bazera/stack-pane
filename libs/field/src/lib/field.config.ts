import { FormlyFieldConfig } from '@ngx-formly/core';
import { validations } from './validation';
import {
  DisplayHelpText,
  FieldAddNewBase,
  FieldAppearanceBase,
  FieldSettingsBase,
} from './field.model';

export const BASE_SETTINGS: FormlyFieldConfig[] = [
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
    key: 'translatable',
    type: 'checkbox',
    props: {
      label: 'Translatable',
    },
  },
  {
    key: 'hiddenFromApi',
    type: 'checkbox',
    props: {
      label: 'Hidden From API',
    },
  },
  {
    key: 'hasMultipleValues',
    type: 'checkbox',
    props: {
      label: 'Has Multiple Values',
    },
  },
];

export const BASE_APPEARANCE: FormlyFieldConfig[] = [
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
  {
    key: 'hiddenInAdmin',
    type: 'checkbox',
    props: {
      label: 'Hidden in Admin App Form',
    },
  },
];

export const BASE_VALIDATION: FormlyFieldConfig[] = [validations.required];

export const BASE_SETTINGS_CREATE: FormlyFieldConfig[] = [
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
    },
  },
  {
    key: 'translatable',
    type: 'checkbox',
    props: {
      label: 'Translatable',
    },
  },
  {
    key: 'hiddenFromApi',
    type: 'checkbox',
    props: {
      label: 'Hidden From API',
    },
  },
  {
    key: 'hasMultipleValues',
    type: 'checkbox',
    props: {
      label: 'Has Multiple Values',
    },
  },
];

export const BASE_SETTINGS_DEFAULT: FieldSettingsBase = {
  key: '',
  name: '',
  hasMultipleValues: false,
  hiddenFromApi: false,
  translatable: false,
};

export const BASE_APPEARANCE_DEFAULT: FieldAppearanceBase = {
  displayHelpText: DisplayHelpText.BelowLabel,
  helpText: '',
  hiddenInAdmin: false,
};

export const BASE_SETTINGS_CREATE_DEFAULT: FieldAddNewBase = {
  key: '',
  name: '',
  hasMultipleValues: false,
  hiddenFromApi: false,
  translatable: false,
};
