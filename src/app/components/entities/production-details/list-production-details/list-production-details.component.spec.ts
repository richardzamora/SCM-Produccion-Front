import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductionDetailsComponent } from './list-production-details.component';

describe('ListProductionDetailsComponent', () => {
  let component: ListProductionDetailsComponent;
  let fixture: ComponentFixture<ListProductionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
