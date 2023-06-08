import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StackPane } from '@jetrepo-dummy/stack-pane';
import { ManageFieldsComponent } from '../manage-fields/manage-fields.component';
import { MatButtonModule } from '@angular/material/button';
import { FieldsService } from '../../fields.service';
import {
  FormlyFieldConfig,
  FormlyFormBuilder,
  FormlyModule,
} from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ValidationFormlyFieldComponent } from '../../field/custom-type/validation-type.component';
import { tap } from 'rxjs';

@Component({
  selector: 'jetrepo-dummy-content-type',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    FormlyModule,
    FormlyMaterialModule,
    ValidationFormlyFieldComponent,
  ],
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.scss'],
})
export class ContentTypeComponent {
  constructor(
    private stackPane: StackPane,
    public fieldsService: FieldsService
  ) {}

  testConfig: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      props: {
        required: true,
        type: 'text',
        label: 'First Name',
      },
    },
    {
      key: 'address',
      wrappers: ['panel'],
      props: { label: 'Address' },
      fieldGroup: [
        {
          key: 'town',
          type: 'input',
          props: {
            required: true,
            type: 'text',
            label: 'Town',
          },
        },
        {
          key: 'city',
          type: 'input',
          props: {
            required: true,
            type: 'text',
            label: 'City',
          },
        },
        {
          key: 'test',
          wrappers: ['panel'],
          props: { label: 'bazera' },
          fieldGroup: [
            {
              key: 'ee',
              type: 'checkbox',
              props: {
                required: true,
                type: 'text',
                label: 'Town',
              },
            },
          ],
        },
      ],
    },
  ];

  model = {
    required: {
      enabled: true,
    },
    unique: {
      enabled: true,
    },
    limitChar: {
      enabled: false,
      value: {
        min: 222,
        max: 123,
        options: 1,
      },
    },
    regex: {
      enabled: false,
      value: {
        pattern: '',
        flags: '',
      },
    },
  };

  test2: FormlyFieldConfig[] = [
    {
      key: 'required',
      className: 'validation-block',
      fieldGroup: [
        {
          key: 'enabled',
          type: 'checkbox',
          expressions: {},
          props: {
            label: 'Required Field',
            description:
              'Do not allow publishing of the entity if this field has no value.',
          },
          hooks: {},
        },
      ],
    },
    {
      key: 'unique',
      className: 'validation-block',
      fieldGroup: [
        {
          key: 'enabled',
          type: 'checkbox',
          expressions: {},
          props: {
            label: 'Unique field.',
            description:
              'Each value of this field across this content type should be unique.',
          },
          hooks: {},
        },
      ],
    },
    {
      key: 'limitChar',
      className: 'validation-block',
      fieldGroup: [
        {
          key: 'enabled',
          type: 'checkbox',
          props: {
            label: 'Limit Character Count.',
            description:
              'Specify minimum or maximum number of allowed characters.',
          },
        },
        {
          key: 'value',
          className: 'inner-form',
          hideExpression: '!field.parent.model.enabled',
          fieldGroup: [
            {
              key: 'options',
              type: 'select',
              props: {
                options: [
                  {
                    label: 'Minimum and Maximum',
                    value: 1,
                  },
                  {
                    label: 'Minimum',
                    value: 2,
                  },
                  {
                    label: 'Maximum',
                    value: 3,
                  },
                ],
              },
            },
            {
              key: 'min',
              type: 'number',
              props: {
                label: 'Minimum:',
              },
              expressions: {
                hide: (field: FormlyFieldConfig) => field.model?.options === 3,
              },
            },
            {
              key: 'max',
              type: 'number',
              props: {
                label: 'Maximum:',
              },
              expressions: {
                hide: (field: FormlyFieldConfig) => field.model?.options === 2,
              },
            },
          ],
        },
      ],
    },
    {
      key: 'regex',
      className: 'validation-block',
      fieldGroup: [
        {
          key: 'enabled',
          type: 'checkbox',
          props: {
            label: 'Match a RegEx Pattern.',
            description:
              'Require to match or prohibit from matching this field to a predefined or custom RegEx pattern.',
          },
        },
        {
          key: 'value',
          className: 'inner-form',
          hideExpression: '!field.parent.model.enabled',
          fieldGroup: [
            {
              key: 'pattern',
              type: 'input',
              props: {
                label: 'Pattern:',
              },
            },
            {
              key: 'flags',
              type: 'input',
              props: {
                label: 'Flags:',
              },
            },
          ],
        },
      ],
    },
  ];

  hey() {
    console.log(JSON.stringify(this.model));
  }

  openManageFields() {
    this.stackPane.open(ManageFieldsComponent);
  }
}
