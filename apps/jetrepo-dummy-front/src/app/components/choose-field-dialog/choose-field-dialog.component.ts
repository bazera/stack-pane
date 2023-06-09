import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StackPane, StackPaneDialogComponent } from '@jetrepo-dummy/stack-pane';
import { MatButtonModule } from '@angular/material/button';
import { AddFieldContainerComponent } from '../add-field-container/add-field-container.component';
import { FieldType } from '@jetrepo-dummy/field';

@Component({
  selector: 'jetrepo-dummy-choose-field-dialog',
  standalone: true,
  imports: [CommonModule, StackPaneDialogComponent, MatButtonModule],
  templateUrl: './choose-field-dialog.component.html',
  styleUrls: ['./choose-field-dialog.component.scss'],
})
export class ChooseFieldDialogComponent {
  fieldType = FieldType;

  constructor(private stackPane: StackPane) {}

  chooseType(type: FieldType) {
    this.stackPane.open(AddFieldContainerComponent, { queryParams: { type } });
  }
}
