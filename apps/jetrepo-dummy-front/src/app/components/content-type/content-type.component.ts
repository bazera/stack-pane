import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StackPane } from '@jetrepo-dummy/stack-pane';
import { ManageFieldsComponent } from '../manage-fields/manage-fields.component';

@Component({
  selector: 'jetrepo-dummy-content-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.css'],
})
export class ContentTypeComponent {
  constructor(private stackPane: StackPane) {}

  openManageFields() {
    this.stackPane.open(ManageFieldsComponent);
  }
}
