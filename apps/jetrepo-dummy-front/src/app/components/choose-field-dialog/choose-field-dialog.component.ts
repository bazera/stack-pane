import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StackPane } from '@jetrepo-dummy/stack-pane';
import { AddFieldComponent } from '../add-field/add-field.component';

@Component({
  selector: 'jetrepo-dummy-choose-field-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-field-dialog.component.html',
  styleUrls: ['./choose-field-dialog.component.css'],
})
export class ChooseFieldDialogComponent {
  constructor(private stackPane: StackPane) {}

  chooseNumber() {
    this.stackPane.open(AddFieldComponent);
  }
}
