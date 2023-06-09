import { POSSIBLE_APPEARANCES } from '../../field.constant';
import { FieldType } from '../../field.model';
import {
  NumberFieldAddNew,
  NumberFieldConfigFormModel,
  NumberFieldType,
} from './number.model';

export const getNumberFieldModelDefault = (): NumberFieldConfigFormModel => {
  return {
    settings: {
      key: '',
      name: '',
      type: NumberFieldType.Integer,
    },
    values: {
      default: 0,
    },
    appearance: {
      displayAs: POSSIBLE_APPEARANCES[FieldType.Number][0],
      helpText: '',
      placeholder: '',
      displayHelpText: 'belowLabel',
    },
    validation: {
      required: {
        enabled: false,
      },
    },
  };
};

export const getNumberFieldAddNewModelDefault = (): NumberFieldAddNew => {
  return {
    name: '',
    key: '',
    helpText: '',
    displayHelpText: 'belowLabel',
  };
};
