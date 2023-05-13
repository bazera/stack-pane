import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFieldsComponent } from './manage-fields.component';

describe('ManageFieldsComponent', () => {
  let component: ManageFieldsComponent;
  let fixture: ComponentFixture<ManageFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageFieldsComponent]
    });
    fixture = TestBed.createComponent(ManageFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
