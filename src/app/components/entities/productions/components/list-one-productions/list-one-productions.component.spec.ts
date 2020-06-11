import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOneProductionsComponent } from './list-one-productions.component';

describe('ListOneProductionsComponent', () => {
  let component: ListOneProductionsComponent;
  let fixture: ComponentFixture<ListOneProductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOneProductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
