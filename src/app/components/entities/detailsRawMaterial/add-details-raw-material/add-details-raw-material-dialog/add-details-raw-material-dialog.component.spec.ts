import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailsRawMaterialDialogComponent } from './add-details-raw-material-dialog.component';

describe('AddDetailsRawMaterialDialogComponent', () => {
  let component: AddDetailsRawMaterialDialogComponent;
  let fixture: ComponentFixture<AddDetailsRawMaterialDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDetailsRawMaterialDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailsRawMaterialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
