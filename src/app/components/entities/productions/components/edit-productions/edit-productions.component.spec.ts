import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductionsComponent } from './edit-productions.component';

describe('EditProductionsComponent', () => {
  let component: EditProductionsComponent;
  let fixture: ComponentFixture<EditProductionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
