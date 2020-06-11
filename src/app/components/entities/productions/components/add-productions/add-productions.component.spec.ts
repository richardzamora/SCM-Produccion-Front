import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductionsComponent } from './add-productions.component';

describe('AddProductionsComponent', () => {
  let component: AddProductionsComponent;
  let fixture: ComponentFixture<AddProductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
