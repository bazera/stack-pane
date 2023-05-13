import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StackPaneComponent } from './stack-pane.component';

describe('StackPaneComponent', () => {
  let component: StackPaneComponent;
  let fixture: ComponentFixture<StackPaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StackPaneComponent],
    });
    fixture = TestBed.createComponent(StackPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
