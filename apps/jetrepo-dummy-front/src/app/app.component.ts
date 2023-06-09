import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StackPaneModule } from '@jetrepo-dummy/stack-pane';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, StackPaneModule, RouterModule, ReactiveFormsModule],
  selector: 'jetrepo-dummy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
