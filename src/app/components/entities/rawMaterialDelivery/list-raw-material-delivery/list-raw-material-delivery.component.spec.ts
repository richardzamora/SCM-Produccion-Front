import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRawMaterialDeliveryComponent } from './list-raw-material-delivery.component';

describe('ListRawMaterialDeliveryComponent', () => {
  let component: ListRawMaterialDeliveryComponent;
  let fixture: ComponentFixture<ListRawMaterialDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRawMaterialDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRawMaterialDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
