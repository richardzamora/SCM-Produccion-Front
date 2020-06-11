import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowOneComponent } from './product-show-one.component';

describe('ProductShowOneComponent', () => {
  let component: ProductShowOneComponent;
  let fixture: ComponentFixture<ProductShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
