import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneMachineryTypeComponent } from './show-one-machineryType.component';

describe('ShowOneMachineryTypeComponent', () => {
  let component: ShowOneMachineryTypeComponent;
  let fixture: ComponentFixture<ShowOneMachineryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOneMachineryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneMachineryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
