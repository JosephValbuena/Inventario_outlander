import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePedidosHandleComponent } from './page-pedidos-handle/page-pedidos-handle.component';

const routes: Routes = [
  {
    path: 'pedido/:sede/:idMesa',
    component: PagePedidosHandleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesPedidosRoutingModule { }
