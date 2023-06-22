import {
  NumberFieldConfig,
  NumberFieldDefinition,
  TextFieldConfig,
  TextFieldDefinition,
  BooleanFieldConfig,
  BooleanFieldDefinition,
  SelectListFieldConfig,
  SelectListFieldDefinition,
  DateTimeFieldConfig,
  DateTimeFieldDefinition,
  RichTextFieldConfig,
  RichTextFieldDefinition,
} from './concrete';
import {
  FieldConfigFormModel,
  FieldDefinition,
  FieldType,
} from './field.model';

export class FieldFactory {
  createField(type: FieldType): FieldDefinition<FieldConfigFormModel> {
    switch (type) {
      case FieldType.Text: {
        return new TextFieldDefinition(new TextFieldConfig());
      }
      case FieldType.Number: {
        const config = new NumberFieldConfig();
        return new NumberFieldDefinition(config);
      }
      case FieldType.Boolean: {
        const config = new BooleanFieldConfig();
        return new BooleanFieldDefinition(config);
      }
      case FieldType.DateTime: {
        const config = new DateTimeFieldConfig();
        return new DateTimeFieldDefinition(config);
      }
      case FieldType.SelectList: {
        const config = new SelectListFieldConfig();
        return new SelectListFieldDefinition(config);
      }
      case FieldType.RichText: {
        const config = new RichTextFieldConfig();
        return new RichTextFieldDefinition(config);
      }
      default:
        throw new Error(`Unsupported field type: ${type}`);
    }
  }
}
