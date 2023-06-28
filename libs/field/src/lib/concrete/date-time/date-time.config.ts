// import { FormlyFieldConfig } from '@ngx-formly/core';
// import { POSSIBLE_APPEARANCES } from '../../field.constant';
// import {
//   FieldAppearance,
//   FieldConfig,
//   FieldConfigFormFields,
//   FieldType,
// } from '../../field.model';
// import { validations } from '../../validation';
// import {
//   DateTimeFieldAddNew,
//   DateTimeFieldConfigFormModel,
// } from './date-time.model';

// export class DateTimeFieldConfig implements FieldConfig {
//   getConfigFormFields(): FieldConfigFormFields {
//     return {
//       settings: [
//         {
//           key: 'name',
//           type: 'input',
//           props: {
//             label: 'Name',
//             required: true,
//           },
//         },
//         {
//           key: 'key',
//           type: 'input',
//           props: {
//             label: 'Key',
//             required: true,
//             disabled: true,
//           },
//         },
//       ],
//       values: [
//         {
//           key: 'default',
//           type: 'datepicker',
//           props: {
//             label: 'Default Value',
//           },
//         },
//       ],
//       validation: [validations.required],
//       appearance: [
//         {
//           key: 'displayAs',
//           type: 'radio',
//           props: {
//             label: 'Display Field As',
//             options: POSSIBLE_APPEARANCES[FieldType.DateTime].map(
//               (value: FieldAppearance) => ({
//                 label: value,
//                 value,
//               })
//             ),
//           },
//         },
//         {
//           key: 'helpText',
//           type: 'textarea',
//           props: {
//             label: 'Help Text',
//             placeholder: '',
//             description: 'Additional information about this field for editors.',
//           },
//         },
//       ],
//     };
//   }

//   getAddNewFormFields(): FormlyFieldConfig[] {
//     return [
//       {
//         key: 'name',
//         type: 'input',
//         props: {
//           label: 'Name',
//           required: true,
//         },
//       },
//       {
//         key: 'key',
//         type: 'input',
//         props: {
//           label: 'Key',
//           required: true,
//           placeholder: 'Enter Name and Key will be generated automatically',
//           description: 'This is a human-readable identifier used in API.',
//         },
//       },
//       {
//         key: 'helpText',
//         type: 'textarea',
//         props: {
//           label: 'Help Text',
//           placeholder: '',
//           description: 'Additional information about this field for editors.',
//         },
//       },
//     ];
//   }

//   getConfigModelDefault(): DateTimeFieldConfigFormModel {
//     return {
//       settings: {
//         key: '',
//         name: '',
//       },
//       values: {
//         default: '',
//       },
//       appearance: {
//         displayAs: POSSIBLE_APPEARANCES[FieldType.DateTime][0],
//         helpText: '',
//       },
//       validation: {
//         required: {
//           enabled: false,
//         },
//       },
//     };
//   }

//   getAddNewModelDefault(): DateTimeFieldAddNew {
//     return {
//       name: '',
//       key: '',
//       helpText: '',
//     };
//   }
// }
