import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserModule } from '../shared/core/user-login/user.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  { path: '', loadChildren: () => HomeModule},
  { path: '', loadChildren: () => UserModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalAdministrativoDominioRoutingModule {}

