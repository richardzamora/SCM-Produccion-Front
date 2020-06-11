import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductionStatesComponent } from './edit-production-states.component';

describe('EditProductionStatesComponent', () => {
  let component: EditProductionStatesComponent;
  let fixture: ComponentFixture<EditProductionStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductionStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductionStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
