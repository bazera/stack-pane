import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StackPane } from '@jetrepo-dummy/stack-pane';
import { ManageFieldsComponent } from '../manage-fields/manage-fields.component';
import { MatButtonModule } from '@angular/material/button';
import { FieldModule, FieldsService } from '@jetrepo-dummy/field';

@Component({
  selector: 'jetrepo-dummy-content-type',
  standalone: true,
  imports: [CommonModule, MatButtonModule, FieldModule],
  templateUrl: './content-type.component.html',
  styleUrls: ['./content-type.component.scss'],
})
export class ContentTypeComponent {
  constructor(
    private stackPane: StackPane,
    public fieldsService: FieldsService
  ) {}

  openManageFields() {
    this.stackPane.open(ManageFieldsComponent);
  }
}
