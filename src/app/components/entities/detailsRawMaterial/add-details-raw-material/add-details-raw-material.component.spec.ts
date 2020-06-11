import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailsRawMaterialComponent } from './add-details-raw-material.component';

describe('AddDetailsRawMaterialComponent', () => {
  let component: AddDetailsRawMaterialComponent;
  let fixture: ComponentFixture<AddDetailsRawMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDetailsRawMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailsRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
