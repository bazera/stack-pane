import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFieldComponent } from './add-field.component';

describe('AddFieldComponent', () => {
  let component: AddFieldComponent;
  let fixture: ComponentFixture<AddFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFieldComponent]
    });
    fixture = TestBed.createComponent(AddFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
