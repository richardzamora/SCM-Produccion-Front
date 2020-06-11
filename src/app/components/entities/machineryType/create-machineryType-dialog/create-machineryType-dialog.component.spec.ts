import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMachineryTypeDialogComponent } from './create-machineryType-dialog.component';

describe('CreateMachineryTypeDialogComponent', () => {
  let component: CreateMachineryTypeDialogComponent;
  let fixture: ComponentFixture<CreateMachineryTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMachineryTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMachineryTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
