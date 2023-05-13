import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StackPaneSidenavComponent } from '@jetrepo-dummy/stack-pane';

@Component({
  selector: 'jetrepo-dummy-add-field',
  standalone: true,
  imports: [CommonModule, StackPaneSidenavComponent],
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.css'],
})
export class AddFieldComponent {}
