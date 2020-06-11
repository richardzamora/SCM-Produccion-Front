import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRawMaterialRequestsComponent } from './edit-raw-material-requests.component';

describe('EditRawMaterialRequestsComponent', () => {
  let component: EditRawMaterialRequestsComponent;
  let fixture: ComponentFixture<EditRawMaterialRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRawMaterialRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRawMaterialRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
