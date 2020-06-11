import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRawMaterialRequestsDialogComponent } from './add-raw-material-requests-dialog.component';

describe('AddRawMaterialRequestsDialogComponent', () => {
  let component: AddRawMaterialRequestsDialogComponent;
  let fixture: ComponentFixture<AddRawMaterialRequestsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRawMaterialRequestsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRawMaterialRequestsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
