import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDialogRequestsComponent } from './show-dialog-requests.component';

describe('ShowDialogRequestsComponent', () => {
  let component: ShowDialogRequestsComponent;
  let fixture: ComponentFixture<ShowDialogRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDialogRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDialogRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
