import { Component, Input } from '@angular/core';
import { StackPaneService } from '../../../stack-pane.service';

@Component({
  selector: 'jet-stack-pane-dialog',
  standalone: true,
  templateUrl: './stack-pane-dialog.component.html',
  styleUrls: ['./stack-pane-dialog.component.scss'],
})
export class StackPaneDialogComponent {
  @Input() title: string | undefined;

  constructor(private service: StackPaneService) {}

  close() {
    this.service.close();
  }
}
