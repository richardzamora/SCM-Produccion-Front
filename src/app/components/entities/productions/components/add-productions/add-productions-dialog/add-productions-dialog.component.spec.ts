import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductionsDialogComponent } from './add-productions-dialog.component';

describe('AddProductionsDialogComponent', () => {
  let component: AddProductionsDialogComponent;
  let fixture: ComponentFixture<AddProductionsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductionsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
