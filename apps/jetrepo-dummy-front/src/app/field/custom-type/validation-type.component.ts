import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'jetrepo-dummy-validation-formly-field',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './validation-type.component.html',
  styleUrls: ['./validation-type.component.scss'],
})
export class ValidationFormlyFieldComponent extends FieldType<FieldTypeConfig> {
  get enabled() {
    return this.formControl.value?.enabled;
  }

  set enabled(enabled: boolean) {
    this.formControl.setValue({
      ...this.formControl.value,
      enabled,
    });
  }

  check() {
    this.enabled = !this.enabled;
  }
}
