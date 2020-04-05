import { TestBed } from '@angular/core/testing';

import { ClientguardGuard } from './clientguard.guard';

describe('ClientguardGuard', () => {
  let guard: ClientguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClientguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
