import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFieldDialogComponent } from './choose-field-dialog.component';

describe('ChooseFieldDialogComponent', () => {
  let component: ChooseFieldDialogComponent;
  let fixture: ComponentFixture<ChooseFieldDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseFieldDialogComponent]
    });
    fixture = TestBed.createComponent(ChooseFieldDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
