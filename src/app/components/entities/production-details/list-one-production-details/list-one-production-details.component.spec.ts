import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneProductionDetailsComponent } from './list-one-production-details.component';

describe('ListOneProductionDetailsComponent', () => {
  let component: ListOneProductionDetailsComponent;
  let fixture: ComponentFixture<ListOneProductionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOneProductionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneProductionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
