import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRawMaterialRequestsComponent } from './list-raw-material-requests.component';

describe('ListRawMaterialRequestsComponent', () => {
  let component: ListRawMaterialRequestsComponent;
  let fixture: ComponentFixture<ListRawMaterialRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRawMaterialRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRawMaterialRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
