import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMachineryTypeComponent } from './create-machineryType.component';

describe('CreateMachineryTypeComponent', () => {
  let component: CreateMachineryTypeComponent;
  let fixture: ComponentFixture<CreateMachineryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMachineryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMachineryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
