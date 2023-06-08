import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StackPaneModule } from '@jetrepo-dummy/stack-pane';
import { FieldFactory } from './field/field.factory';
import { CommonModule } from '@angular/common';
import { FieldWrapper } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, StackPaneModule, RouterModule, ReactiveFormsModule],
  selector: 'jetrepo-dummy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FieldFactory],
})
export class AppComponent {}

@Component({
  selector: 'jetrepo-dummy-formly-wrapper-panel',
  template: `
    <div class="card">
      <h3 class="card-header">{{ props.label }}</h3>
      <div class="card-body">
        <ng-container #fieldComponent></ng-container>
      </div>
    </div>
  `,
})
export class PanelWrapperComponent extends FieldWrapper {}
