import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRawMaterialDeliveryComponent } from './add-raw-material-delivery.component';

describe('AddRawMaterialDeliveryComponent', () => {
  let component: AddRawMaterialDeliveryComponent;
  let fixture: ComponentFixture<AddRawMaterialDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRawMaterialDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRawMaterialDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
