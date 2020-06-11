import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHumanresourcesDialogComponent } from './create-humanresources-dialog.component';

describe('CreateHumanresourcesDialogComponent', () => {
  let component: CreateHumanresourcesDialogComponent;
  let fixture: ComponentFixture<CreateHumanresourcesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHumanresourcesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHumanresourcesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
