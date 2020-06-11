import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMachineryTypeComponent } from './show-machineryType.component';

describe('ShowMachineryTypeComponent', () => {
  let component: ShowMachineryTypeComponent;
  let fixture: ComponentFixture<ShowMachineryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMachineryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMachineryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
