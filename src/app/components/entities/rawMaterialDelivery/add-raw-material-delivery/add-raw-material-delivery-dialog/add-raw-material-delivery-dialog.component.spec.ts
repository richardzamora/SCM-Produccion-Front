import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRawMaterialDeliveryDialogComponent } from './add-raw-material-delivery-dialog.component';

describe('AddRawMaterialDeliveryDialogComponent', () => {
  let component: AddRawMaterialDeliveryDialogComponent;
  let fixture: ComponentFixture<AddRawMaterialDeliveryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRawMaterialDeliveryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRawMaterialDeliveryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
