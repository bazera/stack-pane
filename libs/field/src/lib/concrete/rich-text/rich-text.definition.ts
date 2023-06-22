import { FormlyFieldConfig } from '@ngx-formly/core';
import { Field, FieldType } from '../../field.model';
import { AbstractFieldDefinition } from '../../abstract/definition.abstract';
import {
  RichTextFieldAddNew,
  RichTextFieldConfigFormModel,
} from './rich-text.model';
import { RichTextFieldConfig } from './rich-text.config';

export class RichTextFieldDefinition extends AbstractFieldDefinition {
  type = FieldType.RichText;

  configFormFields = this.config.getConfigFormFields();
  configFormModels = this.config.getConfigModelDefault();
  addFieldFields = this.config.getAddNewFormFields();
  addFieldModel = this.config.getAddNewModelDefault();

  constructor(private config: RichTextFieldConfig) {
    super();
  }

  create(): Field<RichTextFieldConfigFormModel> {
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

  update(): Field<RichTextFieldConfigFormModel> {
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
    value: RichTextFieldAddNew
  ): FormlyFieldConfig[] {
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
    value: RichTextFieldConfigFormModel
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
        },
      },
    ];
  }
}
