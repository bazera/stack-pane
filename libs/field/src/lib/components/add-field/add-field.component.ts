import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FieldAddNewBase,
  FieldConfigFormModel,
  FieldDefinition,
  FieldType,
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
  selector: 'jetrepo-dummy-add-field',
  standalone: true,
  imports: [
    CommonModule,
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.scss'],
  providers: [FieldFactory],
})
export class AddFieldComponent implements OnInit {
  @Input() type?: FieldType;

  contentModel = {};
  contentFields: FormlyFieldConfig[] = [];
  contentForm = new FormGroup({});

  currentTab = 'settings';

  private _field: FieldDefinition<FieldConfigFormModel> | undefined;

  get addFieldForm(): FormGroup | undefined {
    return this._field?.addFieldForm;
  }

  get addFieldFields(): FormlyFieldConfig[] | undefined {
    return this._field?.addFieldFields;
  }

  get addFieldModel(): FieldAddNewBase | undefined {
    return this._field?.addFieldModel;
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

  addField() {
    if (!this._field || !this.type) {
      return;
    }

    const field = this._field.create();

    this.fieldsService.addField(field);
    this.stackPane.close();
  }

  ngOnInit() {
    if (this.type) {
      this._field = this.fieldFactory.createField(FieldType.Text);
      this._field.init();
    }
  }
}
