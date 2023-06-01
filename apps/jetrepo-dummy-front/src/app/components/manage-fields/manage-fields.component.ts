import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StackPane, StackPaneDrawerComponent } from '@jetrepo-dummy/stack-pane';
import { ChooseFieldDialogComponent } from '../choose-field-dialog/choose-field-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { FieldListItem, FieldsService } from '../../fields.service';
import { ConfigureFieldContainerComponent } from '../configure-field-container/configure-field-container.component';

@Component({
  selector: 'jetrepo-dummy-manage-fields',
  standalone: true,
  imports: [CommonModule, StackPaneDrawerComponent, MatButtonModule],
  templateUrl: './manage-fields.component.html',
  styleUrls: ['./manage-fields.component.scss'],
})
export class ManageFieldsComponent {
  constructor(
    private stackPane: StackPane,
    public fieldsService: FieldsService
  ) {}

  chooseFieldType() {
    this.stackPane.open(ChooseFieldDialogComponent);
  }

  configureField({ key }: FieldListItem) {
    this.stackPane.open(ConfigureFieldContainerComponent, {
      queryParams: { key },
    });
  }
}
