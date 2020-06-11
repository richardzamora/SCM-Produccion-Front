import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneRawMaterialRequestsComponent } from './list-one-raw-material-requests.component';

describe('ListOneRawMaterialRequestsComponent', () => {
  let component: ListOneRawMaterialRequestsComponent;
  let fixture: ComponentFixture<ListOneRawMaterialRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOneRawMaterialRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneRawMaterialRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
