import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRegistroProveedorRoutingModule } from './pages-registro-proveedor-routing.module';
import { PageRegistroProveedorListComponent } from './page-registro-proveedor-list/page-registro-proveedor-list.component';
import { PageRegistroProveedorEditComponent } from './page-registro-proveedor-edit/page-registro-proveedor-edit.component';
import { PageRegistroProveedorCreateComponent } from './page-registro-proveedor-create/page-registro-proveedor-create.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RegistroProveedorModule } from '../../components/registro-proveedor/registro-proveedor.module';


@NgModule({
  declarations: [
    PageRegistroProveedorListComponent,
    PageRegistroProveedorEditComponent,
    PageRegistroProveedorCreateComponent
  ],
  imports: [
    ToastModule,
    CommonModule,
    ButtonModule,
    RegistroProveedorModule,
    PagesRegistroProveedorRoutingModule
  ]
})
export class PagesRegistroProveedorModule { }
