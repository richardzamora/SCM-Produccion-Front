import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductionDetailsComponent } from './add-production-details.component';

describe('AddProductionDetailsComponent', () => {
  let component: AddProductionDetailsComponent;
  let fixture: ComponentFixture<AddProductionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
