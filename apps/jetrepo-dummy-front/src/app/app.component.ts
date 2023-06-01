import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StackPaneModule } from '@jetrepo-dummy/stack-pane';
import { FieldFactory } from './field/field.factory';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, StackPaneModule, RouterModule],
  selector: 'jetrepo-dummy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FieldFactory],
})
export class AppComponent {}
