import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  ShortTextFieldAddNew,
  ShortTextFieldConfigFormModel,
} from './short-text.model';
import { Field, FieldType } from '../../field.model';
import { AbstractFieldDefinition } from '../../abstract/definition.abstract';
import {
  FieldValidationLimitChar,
  FieldValidationPattern,
} from '../../validation';
import { ShortTextFieldConfig } from './short-text.config';

export class ShortTextFieldDefinition extends AbstractFieldDefinition {
  type = FieldType.ShortText;

  configFormFields = this.config.getConfigFormFields();
  configFormModels = this.config.getConfigModelDefault();
  addFieldFields = this.config.getAddNewFormFields();
  addFieldModel = this.config.getAddNewModelDefault();

  constructor(private config: ShortTextFieldConfig) {
    super();
  }

  create(): Field<ShortTextFieldConfigFormModel> {
    return {
      name: this.addFieldModel.name,
      key: this.addFieldModel.key,
      type: this.type,
      model: {},
      configModel: {
        ...this.configFormModels,
        settings: {
          ...this.configFormModels.settings,
          name: this.addFieldModel.name,
          key: this.addFieldModel.key,
        },
        appearance: {
          ...this.configFormModels.appearance,
        },
      },
      fieldConfig: this.generateFieldFromCreateModel(this.addFieldModel),
    };
  }

  update(): Field<ShortTextFieldConfigFormModel> {
    return {
      name: this.configFormModels.settings.name,
      key: this.configFormModels.settings.key,
      type: this.type,
      model: {
        [this.configFormModels.settings.key]:
          this.configFormModels.values.default,
      },
      configModel: this.configFormModels,
      fieldConfig: this.generateFieldFromConfigModel(this.configFormModels),
    };
  }

  generateFieldFromCreateModel(
    value: ShortTextFieldAddNew
  ): FormlyFieldConfig[] {
    return [
      {
        key: value.key,
        type: 'input',
        props: {
          label: value.name,
        },
      },
    ];
  }

  generateFieldFromConfigModel(
    value: ShortTextFieldConfigFormModel
  ): FormlyFieldConfig[] {
    const validation = value.validation;

    return [
      {
        key: value.settings.key,
        type: 'input',
        props: {
          label: value.settings.name,
          description: value.appearance.helpText,
          required: validation.required.enabled,
          minLength: validation.limitChar.enabled
            ? (validation.limitChar.value as FieldValidationLimitChar)?.min
            : undefined,
          maxLength: validation.limitChar.enabled
            ? (validation.limitChar.value as FieldValidationLimitChar)?.max
            : undefined,
          pattern: validation.regex.enabled
            ? new RegExp(
                (validation.regex.value as FieldValidationPattern)?.pattern
              )
            : undefined,
        },
      },
    ];
  }
}
