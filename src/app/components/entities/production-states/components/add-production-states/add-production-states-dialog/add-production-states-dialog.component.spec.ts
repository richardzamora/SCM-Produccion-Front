import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductionStatesDialogComponent } from './add-production-states-dialog.component';

describe('AddProductionStatesDialogComponent', () => {
  let component: AddProductionStatesDialogComponent;
  let fixture: ComponentFixture<AddProductionStatesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductionStatesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductionStatesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
