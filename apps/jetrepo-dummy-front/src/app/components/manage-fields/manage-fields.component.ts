import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StackPane, StackPaneDrawerComponent } from '@jetrepo-dummy/stack-pane';
import { ChooseFieldDialogComponent } from '../choose-field-dialog/choose-field-dialog.component';

@Component({
  selector: 'jetrepo-dummy-manage-fields',
  standalone: true,
  imports: [CommonModule, StackPaneDrawerComponent],
  templateUrl: './manage-fields.component.html',
  styleUrls: ['./manage-fields.component.css'],
})
export class ManageFieldsComponent {
  constructor(private stackPane: StackPane) {}

  chooseFieldType() {
    this.stackPane.open(ChooseFieldDialogComponent);
  }
}
