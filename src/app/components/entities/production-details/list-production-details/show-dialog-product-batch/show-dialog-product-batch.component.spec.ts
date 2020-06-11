import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDialogProductBatchComponent } from './show-dialog-product-batch.component';

describe('ShowDialogProductBatchComponent', () => {
  let component: ShowDialogProductBatchComponent;
  let fixture: ComponentFixture<ShowDialogProductBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDialogProductBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDialogProductBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
