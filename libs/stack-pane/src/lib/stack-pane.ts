import { Injectable, Type } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { StackPaneService } from './stack-pane.service';

@Injectable({
  providedIn: 'root',
})
export class StackPane {
  constructor(private service: StackPaneService) {}

  close(extras?: NavigationExtras) {
    this.service.close(extras);
  }

  open(component: Type<unknown>, extras?: NavigationExtras) {
    this.service.open(component, extras);
  }
}
