import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneRawMaterialDeliveryComponent } from './list-one-raw-material-delivery.component';

describe('ListOneRawMaterialDeliveryComponent', () => {
  let component: ListOneRawMaterialDeliveryComponent;
  let fixture: ComponentFixture<ListOneRawMaterialDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOneRawMaterialDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneRawMaterialDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
