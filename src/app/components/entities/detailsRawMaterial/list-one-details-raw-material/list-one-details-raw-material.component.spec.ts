import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneDetailsRawMaterialComponent } from './list-one-details-raw-material.component';

describe('ListOneDetailsRawMaterialComponent', () => {
  let component: ListOneDetailsRawMaterialComponent;
  let fixture: ComponentFixture<ListOneDetailsRawMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOneDetailsRawMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneDetailsRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
