import { TestBed } from '@angular/core/testing';

import { HttpErrorInterceptor } from './http-error-interceptor.service';

xdescribe('HttpErrorInterceptor', () => {
  let service: HttpErrorInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpErrorInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
