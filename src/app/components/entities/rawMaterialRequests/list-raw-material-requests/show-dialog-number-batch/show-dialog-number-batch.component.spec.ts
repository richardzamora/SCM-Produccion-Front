import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDialogNumberBatchComponent } from './show-dialog-number-batch.component';

describe('ShowDialogNumberBatchComponent', () => {
  let component: ShowDialogNumberBatchComponent;
  let fixture: ComponentFixture<ShowDialogNumberBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDialogNumberBatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDialogNumberBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
