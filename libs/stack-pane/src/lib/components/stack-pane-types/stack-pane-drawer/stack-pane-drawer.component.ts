import { Component, Input } from '@angular/core';
import { StackPaneService } from '../../../stack-pane.service';

@Component({
  selector: 'jet-stack-pane-drawer',
  standalone: true,
  templateUrl: './stack-pane-drawer.component.html',
  styleUrls: ['./stack-pane-drawer.component.scss'],
})
export class StackPaneDrawerComponent {
  @Input() title: string | undefined;

  constructor(private service: StackPaneService) {}

  close() {
    this.service.close();
  }
}
