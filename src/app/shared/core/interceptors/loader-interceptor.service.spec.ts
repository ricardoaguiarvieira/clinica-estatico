import { TestBed } from '@angular/core/testing';
import { LoaderService } from 'src/app/layout-servicos/loader/loader.service';

import { LoaderInterceptor } from './loader-interceptor.service';

describe('LoaderInterceptor', () => {
  let interceptor: LoaderInterceptor;
  let loaderServiceStub: Partial<LoaderService>;

  

  beforeEach(() => {
    loaderServiceStub = {};
    TestBed.configureTestingModule({
      providers: [LoaderInterceptor, {provide: LoaderService, useValue: loaderServiceStub}]
    });
    interceptor = TestBed.inject(LoaderInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
