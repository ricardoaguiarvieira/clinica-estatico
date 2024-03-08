import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardInterno } from 'src/app/shared/core/guards/auth.guard.interno';
import { HomeImageComponent } from '../../shared/components/home-image/home-image.component';
import { HomeComponent } from './home/home.component';
import { AgendaModule } from '../agenda/agenda.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardInterno],
    children: [
      {
        path: '',
        component: HomeImageComponent,
      },
      {
        path: 'agenda',
        canActivate: [],
        children: [
          {
            path: '',
            loadChildren: () => AgendaModule,
          }
        ]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
