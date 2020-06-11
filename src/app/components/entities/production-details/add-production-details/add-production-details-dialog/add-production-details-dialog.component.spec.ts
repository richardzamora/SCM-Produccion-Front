import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductionDetailsDialogComponent } from './add-production-details-dialog.component';

describe('AddProductionDetailsDialogComponent', () => {
  let component: AddProductionDetailsDialogComponent;
  let fixture: ComponentFixture<AddProductionDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductionDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductionDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
