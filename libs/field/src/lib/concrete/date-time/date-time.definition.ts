import { FormlyFieldConfig } from '@ngx-formly/core';
import { Field, FieldType } from '../../field.model';
import { AbstractFieldDefinition } from '../../abstract/definition.abstract';
import { DateTimeFieldConfig } from './date-time.config';
import {
  DateTimeFieldAddNew,
  DateTimeFieldConfigFormModel,
} from './date-time.model';

export class DateTimeFieldDefinition extends AbstractFieldDefinition {
  type = FieldType.DateTime;

  configFormFields = this.config.getConfigFormFields();
  configFormModels = this.config.getConfigModelDefault();
  addFieldFields = this.config.getAddNewFormFields();
  addFieldModel = this.config.getAddNewModelDefault();

  constructor(private config: DateTimeFieldConfig) {
    super();
  }

  create(): Field<DateTimeFieldConfigFormModel> {
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

  update(): Field<DateTimeFieldConfigFormModel> {
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
    value: DateTimeFieldAddNew
  ): FormlyFieldConfig[] {
    return [
      {
        key: value.key,
        type: 'datepicker',
        props: {
          label: value.name,
          description: value.helpText,
        },
      },
    ];
  }

  generateFieldFromConfigModel(
    value: DateTimeFieldConfigFormModel
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
