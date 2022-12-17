import { TestBed } from '@angular/core/testing';

import { MultiAdminGuard } from './multi-admin.guard';

describe('MultiAdminGuard', () => {
  let guard: MultiAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MultiAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
