import { FieldAppearance, FieldType } from './field.model';

export const POSSIBLE_APPEARANCES = {
  [FieldType.Text]: [FieldAppearance.TextInput, FieldAppearance.Textarea],
  [FieldType.Number]: [FieldAppearance.NumberInput],
  [FieldType.Boolean]: [FieldAppearance.BooleanRadio],
};

export const APPEARANCES_LABEL = {
  [FieldAppearance.TextInput]: 'Text Input',
  [FieldAppearance.Textarea]: 'Text Area',
  [FieldAppearance.BooleanRadio]: 'Radio',
};
