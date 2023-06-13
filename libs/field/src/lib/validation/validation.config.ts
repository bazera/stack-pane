import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  FieldValidationFields,
  FieldValidationLimitCharOption,
  FieldValidatorRegexType,
} from './validation.model';
import { tap } from 'rxjs';
import { regexPatternValidator } from './validation.fn';

const FIELD_VALIDATOR_REGEX = {
  email: new RegExp(/^\S+@\S+\.\S+$/),
  url: new RegExp(
    /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\.[a-z]{2,})?(\/[^\s]*)?$/i
  ),
};

export const validations: FieldValidationFields = {
  required: {
    key: 'required',
    className: 'validation-block',
    fieldGroup: [
      {
        key: 'enabled',
        type: 'checkbox',
        expressions: {},
        props: {
          label: 'Required Field',
          description:
            'Do not allow publishing of the entity if this field has no value.',
        },
        hooks: {},
      },
    ],
  },
  unique: {
    key: 'unique',
    className: 'validation-block',
    fieldGroup: [
      {
        key: 'enabled',
        type: 'checkbox',
        expressions: {},
        props: {
          label: 'Unique field.',
          description:
            'Each value of this field across this content type should be unique.',
        },
        hooks: {},
      },
    ],
  },
  limitChar: {
    key: 'limitChar',
    className: 'validation-block',
    fieldGroup: [
      {
        key: 'enabled',
        type: 'checkbox',
        props: {
          label: 'Limit Character Count.',
          description:
            'Specify minimum or maximum number of allowed characters.',
        },
      },
      {
        key: 'value',
        className: 'inner-form',
        resetOnHide: false,
        hideExpression: '!field.parent.model.enabled',
        fieldGroup: [
          {
            key: 'option',
            type: 'select',
            resetOnHide: false,
            props: {
              options: [
                {
                  label: 'Minimum and Maximum',
                  value: FieldValidationLimitCharOption.MinMax,
                },
                {
                  label: 'Minimum',
                  value: FieldValidationLimitCharOption.Min,
                },
                {
                  label: 'Maximum',
                  value: FieldValidationLimitCharOption.Max,
                },
              ],
            },
          },
          {
            key: 'min',
            type: 'number',
            resetOnHide: false,
            props: {
              label: 'Minimum:',
            },
            expressions: {
              hide: (field: FormlyFieldConfig) =>
                field.model?.option === FieldValidationLimitCharOption.Max,
            },
          },
          {
            key: 'max',
            type: 'number',
            resetOnHide: false,
            props: {
              label: 'Maximum:',
            },
            expressions: {
              hide: (field: FormlyFieldConfig) =>
                field.model?.option === FieldValidationLimitCharOption.Min,
            },
          },
        ],
      },
    ],
  },
  regex: {
    key: 'regex',
    className: 'validation-block',
    fieldGroup: [
      {
        key: 'enabled',
        type: 'checkbox',
        props: {
          label: 'Match a RegEx Pattern.',
          description:
            'Require to match or prohibit from matching this field to a predefined or custom RegEx pattern.',
        },
      },
      {
        key: 'value',
        className: 'inner-form',
        resetOnHide: false,
        expressions: {
          hide: (field) => {
            console.log(field.parent?.model);
            return !field.parent?.model.enabled;
          },
        },
        fieldGroup: [
          {
            key: 'type',
            resetOnHide: false,
            type: 'select',
            props: {
              options: [
                {
                  label: 'Custom',
                  value: FieldValidatorRegexType.Custom,
                },
                {
                  label: 'Email',
                  value: FieldValidatorRegexType.Email,
                },
                {
                  label: 'URL',
                  value: FieldValidatorRegexType.Url,
                },
              ],
            },
            hooks: {
              onInit: (field) => {
                return field.formControl?.valueChanges.pipe(
                  tap((value) => {
                    if (field.parent && field.parent.get) {
                      const pattern = field.parent.get('pattern').formControl;

                      switch (value) {
                        case FieldValidatorRegexType.Custom: {
                          pattern?.setValue(undefined);
                          break;
                        }
                        case FieldValidatorRegexType.Email: {
                          pattern?.setValue(FIELD_VALIDATOR_REGEX.email);
                          break;
                        }
                        case FieldValidatorRegexType.Url: {
                          pattern?.setValue(FIELD_VALIDATOR_REGEX.url);
                          break;
                        }
                      }
                    }
                  })
                );
              },
            },
          },
          {
            key: 'pattern',
            resetOnHide: false,
            type: 'input',
            props: {
              label: 'Pattern:',
              disabled: true,
            },
            hooks: {
              onInit: (field) => {
                return field.formControl?.valueChanges.pipe(
                  tap((value) => {
                    if (field.parent && field.parent.get) {
                      const type = field.parent.get('type').formControl;

                      if (
                        !Object.values(FIELD_VALIDATOR_REGEX).includes(value)
                      ) {
                        type?.setValue(FieldValidatorRegexType.Custom, {
                          emitEvent: false,
                        });
                      }
                    }
                  })
                );
              },
            },
            validators: {
              validation: [regexPatternValidator],
            },
          },
          {
            key: 'flags',
            resetOnHide: false,
            type: 'input',
            props: {
              label: 'Flags:',
            },
          },
        ],
      },
    ],
  },
};
