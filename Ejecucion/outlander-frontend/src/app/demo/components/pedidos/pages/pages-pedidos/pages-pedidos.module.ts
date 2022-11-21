import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesPedidosRoutingModule } from './pages-pedidos-routing.module';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { PagePedidosHandleComponent } from './page-pedidos-handle/page-pedidos-handle.component';


@NgModule({
  declarations: [
    
  
    PagePedidosHandleComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule,
    PagesPedidosRoutingModule
  ]
})
export class PagesPedidosModule { }
