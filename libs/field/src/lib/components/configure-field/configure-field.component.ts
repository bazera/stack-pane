import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  Field,
  FieldConfigFormModel,
  FieldDefinition,
  FieldTab,
} from '../../field.model';
import { FieldFactory } from '../../field.factory';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { StackPane } from '@jetrepo-dummy/stack-pane';
import { FieldsService } from '../../fields.service';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'jetrepo-dummy-configure-field',
  standalone: true,
  imports: [
    CommonModule,
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    FormlyMatDatepickerModule,
    MatNativeDateModule,
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

  currentTab = FieldTab.Settings;
  tabs = FieldTab;

  fieldDefinition: FieldDefinition<FieldConfigFormModel> | undefined;

  constructor(
    private fieldFactory: FieldFactory,
    private fieldsService: FieldsService,
    private stackPane: StackPane
  ) {}

  setTab(tab: FieldTab) {
    this.currentTab = tab;
  }

  save() {
    const fields = this.fieldsService.getFields().map((field) => {
      if (this.fieldDefinition && field.key === this.field?.key) {
        return this.fieldDefinition.update();
      }

      return field;
    });

    this.fieldsService.resetFields(fields);
    this.stackPane.close();
  }

  ngOnInit() {
    if (this.field) {
      this.fieldDefinition = this.fieldFactory.createField(this.field.type);
      this.fieldDefinition.init(this.field.configModel);
    }
  }
}
