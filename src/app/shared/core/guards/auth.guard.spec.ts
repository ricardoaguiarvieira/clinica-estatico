import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardInterno } from './auth.guard.interno';

describe('AuthGuard', () => {
  let guard: AuthGuardInterno;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
    });
    guard = TestBed.inject(AuthGuardInterno);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
