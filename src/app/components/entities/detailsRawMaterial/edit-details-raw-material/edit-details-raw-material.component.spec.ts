import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailsRawMaterialComponent } from './edit-details-raw-material.component';

describe('EditDetailsRawMaterialComponent', () => {
  let component: EditDetailsRawMaterialComponent;
  let fixture: ComponentFixture<EditDetailsRawMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDetailsRawMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailsRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
