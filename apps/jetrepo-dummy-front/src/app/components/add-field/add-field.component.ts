import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StackPaneDrawerComponent } from '@jetrepo-dummy/stack-pane';

@Component({
  selector: 'jetrepo-dummy-add-field',
  standalone: true,
  imports: [CommonModule, StackPaneDrawerComponent],
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.css'],
})
export class AddFieldComponent {}
