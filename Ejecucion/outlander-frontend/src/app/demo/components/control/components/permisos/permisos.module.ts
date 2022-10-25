import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRoutingModule } from './permisos-routing.module';
import { PermisosListComponent } from './permisos-list/permisos-list.component';
import { PermisosEditComponent } from './permisos-edit/permisos-edit.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PermisosListComponent,
    PermisosEditComponent
  ],
  imports: [
    TableModule,
    FormsModule,
    ButtonModule,
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    PermisosRoutingModule
  ],
  exports: [
    PermisosListComponent,
    PermisosEditComponent
  ]
})
export class PermisosModule { }
