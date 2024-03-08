
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../../service/auth.service';

import { HasTokenDirective } from './has-token.directive';

let viewContainerRefSpy: ViewContainerRef;
let templateRefSpy: TemplateRef<any>;
let authServiceSpy: AuthService



describe('HasTokenDirective', () => {
  beforeEach(() => {
    viewContainerRefSpy = <ViewContainerRef>jasmine.createSpyObj('ViewContainerRef', ['insert'], { 'injector': TestBed });
    templateRefSpy = <TemplateRef<any>>jasmine.createSpyObj('TemplateRef', ['insert'], { 'injector': TestBed });
    authServiceSpy = <AuthService>jasmine.createSpyObj('AuthService', ['insert'], { 'injector': TestBed });
  })

  it('should create an instance', () => {
    const directive = new HasTokenDirective(viewContainerRefSpy, templateRefSpy, authServiceSpy);
    expect(directive).toBeTruthy();
  });
});
