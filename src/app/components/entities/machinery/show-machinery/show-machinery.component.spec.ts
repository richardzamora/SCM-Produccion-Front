import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMachineryComponent } from './show-machinery.component';

describe('ShowMachineryComponent', () => {
  let component: ShowMachineryComponent;
  let fixture: ComponentFixture<ShowMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
