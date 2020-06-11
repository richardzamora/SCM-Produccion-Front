import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductionStatesComponent } from './list-production-states.component';

describe('ListProductionStatesComponent', () => {
  let component: ListProductionStatesComponent;
  let fixture: ComponentFixture<ListProductionStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductionStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductionStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
