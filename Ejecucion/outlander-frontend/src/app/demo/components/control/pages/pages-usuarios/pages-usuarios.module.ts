import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesUsuariosRoutingModule } from './pages-usuarios-routing.module';
import { PageUsuariosListComponent } from './page-usuarios-list/page-usuarios-list.component';
import { PageUsuariosEditComponent } from './page-usuarios-edit/page-usuarios-edit.component';
import { PageUsuariosCreateComponent } from './page-usuarios-create/page-usuarios-create.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { UsuariosModule } from '../../components/usuarios/usuarios.module';


@NgModule({
  declarations: [
    PageUsuariosListComponent,
    PageUsuariosEditComponent,
    PageUsuariosCreateComponent
  ],
  imports: [
    ToastModule,
    ButtonModule,
    CommonModule,
    UsuariosModule,
    PagesUsuariosRoutingModule
  ]
})
export class PagesUsuariosModule { }
