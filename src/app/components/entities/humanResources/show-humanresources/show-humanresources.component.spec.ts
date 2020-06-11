import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHumanresourcesComponent } from './show-humanresources.component';

describe('ShowHumanresourcesComponent', () => {
  let component: ShowHumanresourcesComponent;
  let fixture: ComponentFixture<ShowHumanresourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHumanresourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHumanresourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
