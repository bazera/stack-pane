import { Component, Input } from '@angular/core';
import { StackPaneService } from '../../../stack-pane.service';

@Component({
  selector: 'jet-stack-pane-sidenav',
  standalone: true,
  templateUrl: './stack-pane-sidenav.component.html',
  styleUrls: ['./stack-pane-sidenav.component.scss'],
})
export class StackPaneSidenavComponent {
  @Input() title: string | undefined;

  constructor(private service: StackPaneService) {}

  close() {
    this.service.close();
  }
}
