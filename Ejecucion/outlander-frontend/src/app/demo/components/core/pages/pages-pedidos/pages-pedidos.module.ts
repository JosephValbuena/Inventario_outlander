import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesPedidosRoutingModule } from './pages-pedidos-routing.module';
import { PagePedidosEditComponent } from './page-pedidos-edit/page-pedidos-edit.component';


@NgModule({
  declarations: [
    PagePedidosEditComponent
  ],
  imports: [
    CommonModule,
    PagesPedidosRoutingModule
  ]
})
export class PagesPedidosModule { }
