import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneWorkshiftComponent } from './show-one-workshift.component';

describe('ShowOneWorkshiftComponent', () => {
  let component: ShowOneWorkshiftComponent;
  let fixture: ComponentFixture<ShowOneWorkshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOneWorkshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneWorkshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
