import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessShowOneComponent } from './process-show-one.component';

describe('ProcessShowOneComponent', () => {
  let component: ProcessShowOneComponent;
  let fixture: ComponentFixture<ProcessShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
