
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../../service/auth.service';

@Directive({
  selector: '[appHasToken]',
})
export class HasTokenDirective {
  stop$ = new Subject();
  isVisible = false;

  /**
   * @param {ViewContainerRef} viewContainerRef
   *  -- the location where we need to render the templateRef
   * @param {TemplateRef<any>} templateRef
   *   -- the templateRef to be potentially rendered
   * @param {AuthService} auth
   *   -- nos dará acesso ao token do usuário
   */
  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly templateRef: TemplateRef<any>,
    private readonly auth: AuthService
  ) { }

  ngOnInit(): void {
    if (!this.auth
      .isLoggedIn) {
      this.isVisible = false;
      this.viewContainerRef.clear();
    } else {
      if (!this.isVisible) {
        this.isVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    }
  }

  // Clear the subscription on destroy
  ngOnDestroy(): void {
    this.stop$.next();
  }
}
