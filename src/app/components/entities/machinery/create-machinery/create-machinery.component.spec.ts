import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMachineryComponent } from './create-machinery.component';

describe('CreateMachineryComponent', () => {
  let component: CreateMachineryComponent;
  let fixture: ComponentFixture<CreateMachineryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMachineryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
