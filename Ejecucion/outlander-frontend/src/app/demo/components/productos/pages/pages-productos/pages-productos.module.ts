import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesProductosRoutingModule } from './pages-productos-routing.module';
import { PagesProductosListComponent } from './pages-productos-list/pages-productos-list.component';
import { PagesProductosEditComponent } from './pages-productos-edit/pages-productos-edit.component';
import { PagesProductosCreateComponent } from './pages-productos-create/pages-productos-create.component';
import { ProductosModule } from '../../components/productos/productos.module';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    PagesProductosListComponent,
    PagesProductosEditComponent,
    PagesProductosCreateComponent
  ],
  imports: [
    ToastModule,
    ButtonModule,
    CommonModule,
    ProductosModule,
    PagesProductosRoutingModule
  ]
})
export class PagesProductosModule { }
