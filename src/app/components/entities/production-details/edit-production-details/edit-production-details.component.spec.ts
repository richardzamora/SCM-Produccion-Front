import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductionDetailsComponent } from './edit-production-details.component';

describe('EditProductionDetailsComponent', () => {
  let component: EditProductionDetailsComponent;
  let fixture: ComponentFixture<EditProductionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
