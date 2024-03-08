import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from 'src/app/shared/service/portal.service';

@Component({
  selector: 'app-home-portal-adm',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private portalService: PortalService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.portalService.loginPortalAdm.logout();
    this.router.navigateByUrl('/login');
  }

}
