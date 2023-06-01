import { FormlyFieldConfig } from '@ngx-formly/core';
import { AbstractFieldDefinition } from '../definition.abstract';
import {
  getTextFieldAddNewFormFields,
  getTextFieldAddNewModelDefault,
  getTextFieldConfigFields,
  getTextFieldModelDefault,
} from './text.config';
import { TextFieldAddNew, TextFieldConfigFormModel } from './text.model';
import { Field, FieldType } from '../../field.model';

export class TextFieldDefinition extends AbstractFieldDefinition {
  configFormModels = getTextFieldModelDefault();
  configFormFields = getTextFieldConfigFields();

  addFieldModel = getTextFieldAddNewModelDefault();
  addFieldFields = getTextFieldAddNewFormFields();

  create(): Field<TextFieldConfigFormModel> {
    return {
      name: this.addFieldModel.name,
      key: this.addFieldModel.key,
      type: FieldType.Text,
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
      type: FieldType.Text,
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
    return [
      {
        key: value.settings.key,
        type: value.appearance.displayAs,
        props: {
          label: value.settings.name,
          description: value.appearance.helpText,
          required: value.validation.required?.value,
        },
      },
    ];
  }
}
