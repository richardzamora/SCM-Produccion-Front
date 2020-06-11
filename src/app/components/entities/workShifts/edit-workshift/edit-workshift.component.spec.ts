import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkshiftComponent } from './edit-workshift.component';

describe('EditWorkshiftComponent', () => {
  let component: EditWorkshiftComponent;
  let fixture: ComponentFixture<EditWorkshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
