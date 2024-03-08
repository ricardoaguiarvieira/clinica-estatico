import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalAdministrativoDominioModule } from './dominio/dominio.module';

const routes: Routes = [
  { path: '', loadChildren: () => PortalAdministrativoDominioModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
