import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMachineryTypeComponent } from './edit-machineryType.component';

describe('EditMachineryTypeComponent', () => {
  let component: EditMachineryTypeComponent;
  let fixture: ComponentFixture<EditMachineryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMachineryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMachineryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
