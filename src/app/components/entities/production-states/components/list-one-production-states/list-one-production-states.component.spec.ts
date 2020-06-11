import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneProductionStatesComponent } from './list-one-production-states.component';

describe('ListOneProductionStatesComponent', () => {
  let component: ListOneProductionStatesComponent;
  let fixture: ComponentFixture<ListOneProductionStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOneProductionStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneProductionStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
