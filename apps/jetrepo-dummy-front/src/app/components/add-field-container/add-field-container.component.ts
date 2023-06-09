import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FieldModule, FieldType } from '@jetrepo-dummy/field';
import { StackPaneDrawerComponent } from '@jetrepo-dummy/stack-pane';

@Component({
  selector: 'jetrepo-dummy-add-field-container',
  standalone: true,
  imports: [CommonModule, StackPaneDrawerComponent, FieldModule],
  templateUrl: './add-field-container.component.html',
  styleUrls: ['./add-field-container.component.css'],
})
export class AddFieldContainerComponent implements OnInit {
  title = 'Add New Field';

  @Input() type?: FieldType;

  ngOnInit() {
    if (this.type) {
      this.title = `Add New ${this.type} Field`;
    }
  }
}
