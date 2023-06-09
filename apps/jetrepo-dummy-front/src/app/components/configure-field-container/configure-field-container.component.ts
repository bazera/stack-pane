import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { StackPaneDrawerComponent } from '@jetrepo-dummy/stack-pane';
import { ConfigureFieldComponent } from '../../field/components/configure-field/configure-field.component';
import { FieldsService } from '../../fields.service';
import { Field, FieldConfigFormModel } from '../../field/field.model';

@Component({
  selector: 'jetrepo-dummy-configure-field-container',
  standalone: true,
  imports: [CommonModule, StackPaneDrawerComponent, ConfigureFieldComponent],
  templateUrl: './configure-field-container.component.html',
  styleUrls: ['./configure-field-container.component.css'],
})
export class ConfigureFieldContainerComponent implements OnInit {
  @Input() key?: string;

  field?: Field<FieldConfigFormModel>;

  constructor(private fieldsService: FieldsService) {}

  ngOnInit() {
    if (this.key) {
      this.field = this.fieldsService.getField(this.key);
    }
  }
}
