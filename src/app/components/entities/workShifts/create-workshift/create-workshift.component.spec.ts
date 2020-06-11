import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkshiftComponent } from './create-workshift.component';

describe('CreateWorkshiftComponent', () => {
  let component: CreateWorkshiftComponent;
  let fixture: ComponentFixture<CreateWorkshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWorkshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
