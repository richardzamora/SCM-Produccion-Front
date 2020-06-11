import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionStatesComponent } from './production-states.component';

describe('ProductionStatesComponent', () => {
  let component: ProductionStatesComponent;
  let fixture: ComponentFixture<ProductionStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
