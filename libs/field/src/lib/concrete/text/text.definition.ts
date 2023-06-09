import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  getTextFieldAddNewFormFields,
  getTextFieldConfigFields,
} from './text.config';
import { TextFieldAddNew, TextFieldConfigFormModel } from './text.model';
import { Field, FieldType } from '../../field.model';
import { AbstractFieldDefinition } from '../../abstract/definition.abstract';
import {
  FieldValidationLimitChar,
  FieldValidationPattern,
} from '../../validation';
import {
  getTextFieldAddNewModelDefault,
  getTextFieldModelDefault,
} from './text.default';

export class TextFieldDefinition extends AbstractFieldDefinition {
  type = FieldType.Text;

  configFormModels = getTextFieldModelDefault();
  configFormFields = getTextFieldConfigFields();

  addFieldModel = getTextFieldAddNewModelDefault();
  addFieldFields = getTextFieldAddNewFormFields();

  create(): Field<TextFieldConfigFormModel> {
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
          helpText: this.addFieldModel.helpText,
        },
      },
      fieldConfig: this.generateFieldFromCreateModel(this.addFieldModel),
    };
  }

  update(): Field<TextFieldConfigFormModel> {
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

  generateFieldFromCreateModel(value: TextFieldAddNew): FormlyFieldConfig[] {
    return [
      {
        key: value.key,
        type: 'input',
        props: {
          label: value.name,
          description: value.helpText,
        },
      },
    ];
  }

  generateFieldFromConfigModel(
    value: TextFieldConfigFormModel
  ): FormlyFieldConfig[] {
    const validation = value.validation;

    return [
      {
        key: value.settings.key,
        type: value.appearance.displayAs,
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
