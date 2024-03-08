import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/model/usuario';
import { PortalService } from 'src/app/shared/service/portal.service';

@Component({
  selector: 'app-home-image',
  templateUrl: './home-image.component.html',
  styleUrls: ['./home-image.component.scss']
})
export class HomeImageComponent implements OnInit {

  usuario = new Usuario();

  constructor(
    private portalService: PortalService,
  ) {}

  ngOnInit(): void {
    this.usuario = this.portalService.loginPortalAdm.getUsuarioLogado();
  }

}
