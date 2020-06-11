import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHumanresourcesComponent } from './edit-machinery.component';

describe('EditHumanresourcesComponent', () => {
  let component: EditHumanresourcesComponent;
  let fixture: ComponentFixture<EditHumanresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHumanresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHumanresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
