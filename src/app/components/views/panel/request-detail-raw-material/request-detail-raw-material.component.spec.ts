import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailRawMaterialComponent } from './request-detail-raw-material.component';

describe('RequestDetailRawMaterialComponent', () => {
  let component: RequestDetailRawMaterialComponent;
  let fixture: ComponentFixture<RequestDetailRawMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailRawMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDetailRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
