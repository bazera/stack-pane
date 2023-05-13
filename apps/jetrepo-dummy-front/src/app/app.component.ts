import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StackPaneModule } from '@jetrepo-dummy/stack-pane';
@Component({
  standalone: true,
  imports: [RouterModule, StackPaneModule],
  selector: 'jetrepo-dummy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'jetrepo-dummy-front';
}
