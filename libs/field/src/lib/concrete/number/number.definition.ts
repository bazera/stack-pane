import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  getNumberFieldAddNewFormFields,
  getNumberFieldConfigFields,
} from './number.config';
import { NumberFieldAddNew, NumberFieldConfigFormModel } from './number.model';
import { Field, FieldType } from '../../field.model';
import { AbstractFieldDefinition } from '../../abstract/definition.abstract';
import {
  getNumberFieldAddNewModelDefault,
  getNumberFieldModelDefault,
} from './number.default';

export class NumberFieldDefinition extends AbstractFieldDefinition {
  type = FieldType.Number;

  configFormModels = getNumberFieldModelDefault();
  configFormFields = getNumberFieldConfigFields();

  addFieldModel = getNumberFieldAddNewModelDefault();
  addFieldFields = getNumberFieldAddNewFormFields();

  create(): Field<NumberFieldConfigFormModel> {
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

  update(): Field<NumberFieldConfigFormModel> {
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

  generateFieldFromCreateModel(value: NumberFieldAddNew): FormlyFieldConfig[] {
    return [
      {
        key: value.key,
        type: 'number',
        props: {
          label: value.name,
          description: value.helpText,
        },
      },
    ];
  }

  generateFieldFromConfigModel(
    value: NumberFieldConfigFormModel
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
