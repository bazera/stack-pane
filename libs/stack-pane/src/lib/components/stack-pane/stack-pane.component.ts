import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { stackPaneAnimations as animations } from '../../stack-pane.animations';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StackPaneLayer, StackPaneType } from '../../stack-pane.model';
import { StackPaneService } from '../../stack-pane.service';
import {
  StackPaneDialogComponent,
  StackPaneDrawerComponent,
} from '../stack-pane-types';

@Component({
  selector: 'jet-stack-pane',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    StackPaneComponent,
    StackPaneDrawerComponent,
    StackPaneDialogComponent,
  ],
  templateUrl: './stack-pane.component.html',
  styleUrls: ['./stack-pane.component.scss'],
})
export class StackPaneComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') drawer: ElementRef | undefined;
  @ViewChild('dialog') dialog: ElementRef | undefined;
  @ViewChild('backdrop') backdrop: ElementRef | undefined;

  panelEnterAnimation: AnimationPlayer | undefined;
  backdropEnterAnimation: AnimationPlayer | undefined;

  panelLeaveAnimation: AnimationPlayer | undefined;
  backdropLeaveAnimation: AnimationPlayer | undefined;

  private _panelLeaveAnimation$ = new Subject<boolean>();

  layer: StackPaneLayer | undefined;
  typeSet = StackPaneType;

  layerDepth: number | undefined;
  panelZIndex: number | undefined;

  constructor(
    private animationBuilder: AnimationBuilder,
    private stackPaneService: StackPaneService,
    private routerOutlet: RouterOutlet
  ) {}

  private setAnimations() {
    switch (this.layer?.type) {
      case StackPaneType.Dialog: {
        const dialogEnterAnimationBuilder = this.animationBuilder.build(
          animations.dialog.enter
        );

        this.panelEnterAnimation = dialogEnterAnimationBuilder.create(
          this.dialog?.nativeElement
        );

        const dialogLeaveAnimationBuilder = this.animationBuilder.build(
          animations.dialog.leave
        );

        this.panelLeaveAnimation = dialogLeaveAnimationBuilder.create(
          this.dialog?.nativeElement
        );

        this.panelLeaveAnimation.onDone(() => {
          this._panelLeaveAnimation$.next(true);
        });
        break;
      }
      case StackPaneType.Drawer: {
        const drawerEnterAnimationBuilder = this.animationBuilder.build(
          animations.drawer.enter
        );

        this.panelEnterAnimation = drawerEnterAnimationBuilder.create(
          this.drawer?.nativeElement
        );

        const drawerLeaveAnimationBuilder = this.animationBuilder.build(
          animations.drawer.leave
        );

        this.panelLeaveAnimation = drawerLeaveAnimationBuilder.create(
          this.drawer?.nativeElement
        );

        this.panelLeaveAnimation.onDone(() => {
          this._panelLeaveAnimation$.next(true);
        });
        break;
      }
    }

    const backdropEnterAnimationBuilder = this.animationBuilder.build(
      animations.backdrop.enter
    );

    this.backdropEnterAnimation = backdropEnterAnimationBuilder.create(
      this.backdrop?.nativeElement
    );

    const backdropLeaveAnimationBuilder = this.animationBuilder.build(
      animations.backdrop.leave
    );

    this.backdropLeaveAnimation = backdropLeaveAnimationBuilder.create(
      this.backdrop?.nativeElement
    );
  }

  playEnterAnimation() {
    this.panelEnterAnimation?.play();
    this.backdropEnterAnimation?.play();
  }

  playLeaveAnimation() {
    this.panelLeaveAnimation?.play();
    this.backdropLeaveAnimation?.play();
    return this._panelLeaveAnimation$.asObservable();
  }

  close() {
    this.stackPaneService.close();
  }

  private setLayer() {
    const outlet = this.routerOutlet.name;
    this.layer = this.stackPaneService.getLayer(outlet);
    this.layerDepth = this.stackPaneService.getLayerIndex(outlet) + 1;
    this.panelZIndex = this.layerDepth + 1;
  }

  getBackdropClass() {
    return {
      hasDrawer: this.layer?.type === StackPaneType.Drawer,
      hasDialog: this.layer?.type === StackPaneType.Dialog,
    };
  }

  ngOnInit() {
    this.setLayer();
  }

  ngAfterViewInit() {
    this.setAnimations();
    this.playEnterAnimation();
  }
}
