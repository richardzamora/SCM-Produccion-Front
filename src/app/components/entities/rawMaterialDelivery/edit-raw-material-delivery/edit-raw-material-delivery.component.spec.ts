import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRawMaterialDeliveryComponent } from './edit-raw-material-delivery.component';

describe('EditRawMaterialDeliveryComponent', () => {
  let component: EditRawMaterialDeliveryComponent;
  let fixture: ComponentFixture<EditRawMaterialDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRawMaterialDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRawMaterialDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
