import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkshiftComponent } from './show-workshift.component';

describe('ShowWorkshiftComponent', () => {
  let component: ShowWorkshiftComponent;
  let fixture: ComponentFixture<ShowWorkshiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWorkshiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWorkshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
