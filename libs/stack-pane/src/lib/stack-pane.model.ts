import { Type } from '@angular/core';

export enum StackPaneType {
  Drawer,
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
