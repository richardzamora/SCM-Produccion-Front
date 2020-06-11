import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneHumanresourcesComponent } from './show-one-humanresources.component';

describe('ShowOneHumanresourcesComponent', () => {
  let component: ShowOneHumanresourcesComponent;
  let fixture: ComponentFixture<ShowOneHumanresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOneHumanresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneHumanresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
