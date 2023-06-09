import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  Field,
  FieldConfigFormFields,
  FieldConfigFormModel,
  FieldDefinition,
} from '../../field.model';
import { FieldFactory } from '../../field.factory';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { StackPane } from '@jetrepo-dummy/stack-pane';
import { FieldsService } from '../../fields.service';

@Component({
  selector: 'jetrepo-dummy-configure-field',
  standalone: true,
  imports: [
    CommonModule,
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './configure-field.component.html',
  styleUrls: ['./configure-field.component.scss'],
  providers: [FieldFactory],
})
export class ConfigureFieldComponent implements OnInit {
  @Input() field?: Field<FieldConfigFormModel>;

  contentModel = {};
  contentFields: FormlyFieldConfig[] = [];
  contentForm = new FormGroup({});

  currentTab = 'settings';

  private _field: FieldDefinition<FieldConfigFormModel> | undefined;

  get configForm(): FormGroup | undefined {
    return this._field?.configForm;
  }

  get configFormFields(): FieldConfigFormFields | undefined {
    return this._field?.configFormFields;
  }

  get configFormModels(): FieldConfigFormModel | undefined {
    return this._field?.configFormModels;
  }

  get preview$(): Observable<FormlyFieldConfig[]> | undefined {
    return this._field?.preview$;
  }

  constructor(
    private fieldFactory: FieldFactory,
    private fieldsService: FieldsService,
    private stackPane: StackPane
  ) {}

  setTab(tab: string) {
    this.currentTab = tab;
  }

  save() {
    const fields = this.fieldsService.getFields().map((field) => {
      if (this._field && field.key === this.field?.key) {
        return this._field?.update();
      }

      return field;
    });

    this.fieldsService.resetFields(fields);
    this.stackPane.close();
  }

  ngOnInit() {
    if (this.field) {
      this._field = this.fieldFactory.createField(this.field.type);
      this._field.init(this.field.configModel);
    }
  }
}
