import { FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { tap } from 'rxjs';

export type FieldValidations = 'required' | 'unique' | 'limitChar' | 'regex';

export type FieldValidationFields = Record<FieldValidations, FormlyFieldConfig>;

export type FieldValidationModel = Record<
  FieldValidations,
  FieldValidationModelProps
>;

export interface FieldValidationModelProps {
  enabled: boolean;
  value?: FieldValidationLimitChar | FieldValidationPattern;
}

export enum FieldValidationLimitCharOption {
  Min = 'Min',
  Max = 'Max',
  MinMax = 'MinMax',
}

export interface FieldValidationLimitChar {
  option: FieldValidationLimitCharOption;
  min?: number;
  max?: number;
}

export enum FieldValidatorRegexType {
  Custom,
  Email,
  Url,
}

/* eslint-disable no-useless-escape */
const FIELD_VALIDATOR_REGEX = {
  email: new RegExp(/^\S+@\S+\.\S+$/),
  url: new RegExp(
    /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\.[a-z]{2,})?(\/[^\s]*)?$/i
  ),
};

export interface FieldValidationPattern {
  type: FieldValidatorRegexType;
  pattern: RegExp;
  flag: string;
}

function regexPatternValidator(
  control: FormControl
): { [key: string]: unknown } | null {
  try {
    // Attempt to create a regex object with the provided pattern
    new RegExp(control.value);
  } catch (e) {
    // If an error occurs, the pattern is invalid
    return { regexPattern: true };
  }

  // The pattern is valid
  return null;
}

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
        hideExpression: '!field.parent.model.enabled',
        fieldGroup: [
          {
            key: 'option',
            type: 'select',
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
        hideExpression: '!field.parent.model.enabled',
        fieldGroup: [
          {
            key: 'type',
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

                      // field.formControl?.setValue('bazera', {
                      //   emitEvent: false,
                      // });
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
