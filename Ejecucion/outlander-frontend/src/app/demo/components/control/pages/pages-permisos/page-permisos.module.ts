import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagePermisosRoutingModule } from './page-permisos-routing.module';
import { PagePermisosListComponent } from './page-permisos-list/page-permisos-list.component';
import { PagePermisosEditComponent } from './page-permisos-edit/page-permisos-edit.component';
import { TableModule } from 'primeng/table';
import { PermisosModule } from '../../components/permisos/permisos.module';
import { ToastModule } from 'primeng/toast';
import { PagePermisosCreateComponent } from './page-permisos-create/page-permisos-create.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    PagePermisosListComponent,
    PagePermisosEditComponent,
    PagePermisosCreateComponent
  ],
  imports: [
    ToastModule,
    TableModule,
    ButtonModule,
    CommonModule,
    PermisosModule,
    PagePermisosRoutingModule
  ]
})
export class PagePermisosModule { }
