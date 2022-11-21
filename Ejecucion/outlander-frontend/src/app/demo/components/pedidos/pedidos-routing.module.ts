import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';

const routes: Routes = [
  { 
    path: '',
    canActivate: [AuthGuard],
    data: { permissions: ["order.handle.get"]},
    loadChildren: () => import('./pages/pages-pedidos/pages-pedidos.module').then(m => m.PagesPedidosModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
