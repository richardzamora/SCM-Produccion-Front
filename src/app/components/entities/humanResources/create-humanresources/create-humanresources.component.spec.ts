import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHumanresourcesComponent } from './create-humanresources.component';

describe('CreateHumanresourcesComponent', () => {
  let component: CreateHumanresourcesComponent;
  let fixture: ComponentFixture<CreateHumanresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHumanresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHumanresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
