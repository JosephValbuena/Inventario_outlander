import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesProveedoresRoutingModule } from './pages-proveedores-routing.module';
import { PageProveedoresListComponent } from './page-proveedores-list/page-proveedores-list.component';
import { PageProveedoresEditComponent } from './page-proveedores-edit/page-proveedores-edit.component';
import { PageProveedoresCreateComponent } from './page-proveedores-create/page-proveedores-create.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ProveedoresModule } from '../../components/proveedores/proveedores.module';


@NgModule({
  declarations: [
    PageProveedoresListComponent,
    PageProveedoresEditComponent,
    PageProveedoresCreateComponent
  ],
  imports: [
    ToastModule,
    CommonModule,
    ButtonModule,
    ProveedoresModule,
    PagesProveedoresRoutingModule
  ]
})
export class PagesProveedoresModule { }
