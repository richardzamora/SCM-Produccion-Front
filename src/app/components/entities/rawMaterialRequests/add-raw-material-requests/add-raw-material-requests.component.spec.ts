import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRawMaterialRequestsComponent } from './add-raw-material-requests.component';

describe('AddRawMaterialRequestsComponent', () => {
  let component: AddRawMaterialRequestsComponent;
  let fixture: ComponentFixture<AddRawMaterialRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRawMaterialRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRawMaterialRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
