import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaModule } from './clinica/agenda/agenda.module';
import { HomeModule } from './clinica/home/home.module';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadChildren: () => HomeModule,
    data: { pageTitle: 'Home OdontoMaxter' } 
  },
  { 
    path: 'agenda', 
    loadChildren: () => AgendaModule,
    data: { pageTitle: 'Agendamentos de clientes' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
