import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRawMaterialRequestsComponent } from './dialog-raw-material-requests.component';

describe('DialogRawMaterialRequestsComponent', () => {
  let component: DialogRawMaterialRequestsComponent;
  let fixture: ComponentFixture<DialogRawMaterialRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRawMaterialRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRawMaterialRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
