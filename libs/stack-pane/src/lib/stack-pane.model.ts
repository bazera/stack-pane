import { Type } from '@angular/core';

export enum StackPaneType {
  Sidenav,
  Dialog,
}

export interface StackPaneConfig {
  componentRegistry?: {
    component: Type<unknown>;
    type: StackPaneType;
  }[];
}

export interface StackPaneLayer {
  type: StackPaneType;
  outlet: string;
}
