import { TestBed } from '@angular/core/testing';

import { WorkShiftsService } from './work-shifts.service';

describe('WorkShiftsService', () => {
  let service: WorkShiftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkShiftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
