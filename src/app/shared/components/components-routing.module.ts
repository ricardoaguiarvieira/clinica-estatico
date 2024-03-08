import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'src/app/shared/core/guards/auth.guard';
// import { FormMensagemComponent } from '../mensageria/mensageria/components/form-mensagem/form-mensagem.component';
// import { MensageriaComponent } from '../mensageria/mensageria/mensageria.component';

const routes: Routes = [
 
      // {
      //   path: 'mensageria',
      //   component: MensageriaComponent,
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'mensageria',
      //   canActivate: [AuthGuard],
      //   children: [
      //     {
      //       path: 'nova-mensagem',
      //       component: FormMensagemComponent,
      //       canActivate: [AuthGuard]
      //     },
      //   ]
      // },
      // {
      //   path: 'mensageria',
      //   canActivate: [AuthGuard],
      //   children: [
      //     {
      //       path: 'editar-mensagem/:id',
      //       component: FormMensagemComponent,
      //       canActivate: [AuthGuard]
      //     },
      //   ],
      // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
