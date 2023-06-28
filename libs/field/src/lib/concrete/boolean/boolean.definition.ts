import { FormlyFieldConfig } from '@ngx-formly/core';
import { Field, FieldAddNewBase, FieldType } from '../../field.model';
import { AbstractFieldDefinition } from '../../abstract/definition.abstract';
import { BooleanFieldConfig } from './boolean.config';
import { BooleanFieldConfigFormModel } from './boolean.model';

export class BooleanFieldDefinition extends AbstractFieldDefinition {
  type = FieldType.Boolean;

  configFormFields = this.config.getConfigFormFields();
  configFormModels = this.config.getConfigModelDefault();
  addFieldFields = this.config.getAddNewFormFields();
  addFieldModel = this.config.getAddNewModelDefault();

  constructor(private config: BooleanFieldConfig) {
    super();
  }

  create(): Field<BooleanFieldConfigFormModel> {
    return {
      name: this.addFieldModel.name,
      key: this.addFieldModel.key,
      type: this.type,
      model: {
        [this.addFieldModel.key]: this.configFormModels.values.default,
      },
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

  update(): Field<BooleanFieldConfigFormModel> {
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

  generateFieldFromCreateModel(value: FieldAddNewBase): FormlyFieldConfig[] {
    return [
      {
        key: value.key,
        type: 'radio',
        props: {
          label: value.name,
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
    ];
  }

  generateFieldFromConfigModel(
    value: BooleanFieldConfigFormModel
  ): FormlyFieldConfig[] {
    const validation = value.validation;

    return [
      {
        key: value.settings.key,
        type: 'radio',
        props: {
          label: value.settings.name,
          description: value.appearance.helpText,
          options: [
            {
              value: true,
              label: value.appearance.trueLabel,
            },
            {
              value: false,
              label: value.appearance.falseLabel,
            },
          ],
          required: validation.required.enabled,
        },
      },
    ];
  }
}
