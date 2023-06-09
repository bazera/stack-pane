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

  fieldDefinition: FieldDefinition<FieldConfigFormModel> | undefined;

  constructor(
    private fieldFactory: FieldFactory,
    private fieldsService: FieldsService,
    private stackPane: StackPane
  ) {}

  addField() {
    if (!this.fieldDefinition || !this.type) {
      return;
    }

    const field = this.fieldDefinition.create();

    this.fieldsService.addField(field);
    this.stackPane.close();
  }

  ngOnInit() {
    if (this.type) {
      this.fieldDefinition = this.fieldFactory.createField(this.type);
      this.fieldDefinition.init();
    }
  }
}
