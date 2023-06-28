// import { FormlyFieldConfig } from '@ngx-formly/core';
// import { Field, FieldType } from '../../field.model';
// import { AbstractFieldDefinition } from '../../abstract/definition.abstract';
// import { SelectListFieldConfig } from './select-list.config';
// import {
//   SelectListFieldAddNew,
//   SelectListFieldConfigFormModel,
// } from './select-list.model';

// export class SelectListFieldDefinition extends AbstractFieldDefinition {
//   type = FieldType.SelectList;

//   configFormFields = this.config.getConfigFormFields();
//   configFormModels = this.config.getConfigModelDefault();
//   addFieldFields = this.config.getAddNewFormFields();
//   addFieldModel = this.config.getAddNewModelDefault();

//   constructor(private config: SelectListFieldConfig) {
//     super();
//   }

//   create(): Field<SelectListFieldConfigFormModel> {
//     return {
//       name: this.addFieldModel.name,
//       key: this.addFieldModel.key,
//       type: this.type,
//       model: {},
//       configModel: {
//         ...this.configFormModels,
//         settings: {
//           ...this.configFormModels.settings,
//           name: this.addFieldModel.name,
//           key: this.addFieldModel.key,
//         },
//         appearance: {
//           ...this.configFormModels.appearance,
//           helpText: this.addFieldModel.helpText,
//         },
//       },
//       fieldConfig: this.generateFieldFromCreateModel(this.addFieldModel),
//     };
//   }

//   update(): Field<SelectListFieldConfigFormModel> {
//     return {
//       name: this.configFormModels.settings.name,
//       key: this.configFormModels.settings.key,
//       type: this.type,
//       model: {
//         [this.configFormModels.settings.key]:
//           this.configFormModels.values.default,
//       },
//       configModel: this.configFormModels,
//       fieldConfig: this.generateFieldFromConfigModel(this.configFormModels),
//     };
//   }

//   generateFieldFromCreateModel(
//     value: SelectListFieldAddNew
//   ): FormlyFieldConfig[] {
//     return [
//       {
//         key: value.key,
//         type: 'select',
//         props: {
//           label: value.name,
//           description: value.helpText,
//           options: [
//             {
//               label: 'option 1',
//               value: 1,
//             },
//             {
//               label: 'option 2',
//               value: 2,
//             },
//             {
//               label: 'option 3',
//               value: 3,
//             },
//           ],
//         },
//       },
//     ];
//   }

//   generateFieldFromConfigModel(
//     value: SelectListFieldConfigFormModel
//   ): FormlyFieldConfig[] {
//     const validation = value.validation;

//     return [
//       {
//         key: value.settings.key,
//         type: value.appearance.displayAs,
//         props: {
//           label: value.settings.name,
//           description: value.appearance.helpText,
//           required: validation.required.enabled,
//           options: [
//             {
//               label: 'option 1',
//               value: 1,
//             },
//             {
//               label: 'option 2',
//               value: 2,
//             },
//             {
//               label: 'option 3',
//               value: 3,
//             },
//           ],
//         },
//       },
//     ];
//   }
// }
