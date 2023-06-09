import { TextFieldDefinition } from './concrete';
import {
  FieldConfigFormModel,
  FieldDefinition,
  FieldType,
} from './field.model';

export class FieldFactory {
  createField(type: FieldType): FieldDefinition<FieldConfigFormModel> {
    switch (type) {
      case FieldType.Text:
        return new TextFieldDefinition();
      default:
        throw new Error(`Unsupported field type: ${type}`);
    }
  }
}
