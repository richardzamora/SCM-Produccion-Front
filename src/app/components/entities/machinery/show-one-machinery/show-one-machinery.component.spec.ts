import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneMachineryComponent } from './show-one-machinery.component';

describe('ShowOneMachineryComponent', () => {
  let component: ShowOneMachineryComponent;
  let fixture: ComponentFixture<ShowOneMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOneMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
