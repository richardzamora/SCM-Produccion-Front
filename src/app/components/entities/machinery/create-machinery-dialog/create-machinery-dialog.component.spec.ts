import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMachineryDialogComponent } from './create-machinery-dialog.component';

describe('CreateMachinerysDialogComponent', () => {
  let component: CreateMachineryDialogComponent;
  let fixture: ComponentFixture<CreateMachineryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMachineryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMachineryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
