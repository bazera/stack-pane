import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackPaneService } from '../../stack-pane.service';
import { RouterModule } from '@angular/router';
import { getComponentNameKebab } from '../../utils.fn';

@Component({
  selector: 'jet-stack-pane-container',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './stack-pane-container.component.html',
  styleUrls: ['./stack-pane-container.component.scss'],
})
export class StackPaneContainerComponent implements OnInit {
  outlets: string[] | undefined = [];

  constructor(private service: StackPaneService) {}

  ngOnInit() {
    this.outlets = this.service.config?.componentRegistry?.map((c) =>
      getComponentNameKebab(c.component.name)
    );
  }
}
