import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailsRawMaterialComponent } from './list-details-raw-material.component';

describe('ListDetailsRawMaterialComponent', () => {
  let component: ListDetailsRawMaterialComponent;
  let fixture: ComponentFixture<ListDetailsRawMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDetailsRawMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailsRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
