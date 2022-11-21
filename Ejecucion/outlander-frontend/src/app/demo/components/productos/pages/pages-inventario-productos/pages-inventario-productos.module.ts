import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesInventarioProductosRoutingModule } from './pages-inventario-productos-routing.module';
import { PageInventarioProductosCreateComponent } from './page-inventario-productos-create/page-inventario-productos-create.component';
import { PageInventarioProductosEditComponent } from './page-inventario-productos-edit/page-inventario-productos-edit.component';
import { PageInventarioProductosListComponent } from './page-inventario-productos-list/page-inventario-productos-list.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InventarioProductosModule } from '../../components/inventario-productos/inventario-productos.module';


@NgModule({
  declarations: [
    PageInventarioProductosCreateComponent,
    PageInventarioProductosEditComponent,
    PageInventarioProductosListComponent
  ],
  imports: [
    ToastModule,
    ButtonModule,
    CommonModule,
    InventarioProductosModule,
    PagesInventarioProductosRoutingModule
  ]
})
export class PagesInventarioProductosModule { }
