import { FormlyFieldConfig } from '@ngx-formly/core';
import { Field, FieldType } from '../../field.model';
import { AbstractFieldDefinition } from '../../abstract/definition.abstract';
import {
  LongTextFieldAddNew,
  LongTextFieldConfigFormModel,
} from './long-text.model';
import { LongTextFieldConfig } from './long-text.config';

export class LongTextFieldDefinition extends AbstractFieldDefinition {
  type = FieldType.LongText;

  configFormFields = this.config.getConfigFormFields();
  configFormModels = this.config.getConfigModelDefault();
  addFieldFields = this.config.getAddNewFormFields();
  addFieldModel = this.config.getAddNewModelDefault();

  constructor(private config: LongTextFieldConfig) {
    super();
  }

  create(): Field<LongTextFieldConfigFormModel> {
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

  update(): Field<LongTextFieldConfigFormModel> {
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
    value: LongTextFieldAddNew
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
    value: LongTextFieldConfigFormModel
  ): FormlyFieldConfig[] {
    const validation = value.validation;

    return [
      {
        key: value.settings.key,
        type: 'textarea',
        props: {
          label: value.settings.name,
          description: value.appearance.helpText,
          required: validation.required.enabled,
        },
      },
    ];
  }
}
