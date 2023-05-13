import { animate, style } from '@angular/animations';

export const stackPaneAnimations = {
  sidenav: {
    enter: [
      style({ transform: 'translateX(100%)' }),
      animate('0.2s ease-out', style({ transform: 'translateX(0%)' })),
    ],
    leave: [
      style({ transform: 'translateX(0%)' }),
      animate('0.2s ease-out', style({ transform: 'translateX(100%)' })),
    ],
  },
  dialog: {
    enter: [
      style({ transform: 'translateX(100%)' }),
      animate('0.2s ease-out', style({ transform: 'translateX(0%)' })),
    ],
    leave: [
      style({ transform: 'translateX(0%)' }),
      animate('0.2s ease-out', style({ transform: 'translateX(100%)' })),
    ],
  },
  backdrop: {
    enter: [
      style({ backgroundColor: 'rgba(0, 0, 0, 0)' }),
      animate('0.2s ease-in', style({ backgroundColor: 'rgba(0, 0, 0, 0.3)' })),
    ],
    leave: [
      style({ backgroundColor: 'rgba(0, 0, 0, 0.3)' }),
      animate('0.2s ease-in', style({ backgroundColor: 'rgba(0, 0, 0, 0)' })),
    ],
  },
};
