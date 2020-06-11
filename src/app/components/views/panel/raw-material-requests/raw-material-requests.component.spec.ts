import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialRequestsComponent } from './raw-material-requests.component';

describe('RawMaterialRequestsComponent', () => {
  let component: RawMaterialRequestsComponent;
  let fixture: ComponentFixture<RawMaterialRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawMaterialRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawMaterialRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
