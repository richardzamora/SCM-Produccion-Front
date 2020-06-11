import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkshiftDialogComponent } from './create-workshift-dialog.component';

describe('CreateWorkshiftDialogComponent', () => {
  let component: CreateWorkshiftDialogComponent;
  let fixture: ComponentFixture<CreateWorkshiftDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkshiftDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkshiftDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
