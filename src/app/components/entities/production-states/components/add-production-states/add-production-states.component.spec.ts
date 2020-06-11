import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductionStatesComponent } from './add-production-states.component';

describe('AddProductionStatesComponent', () => {
  let component: AddProductionStatesComponent;
  let fixture: ComponentFixture<AddProductionStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductionStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductionStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
