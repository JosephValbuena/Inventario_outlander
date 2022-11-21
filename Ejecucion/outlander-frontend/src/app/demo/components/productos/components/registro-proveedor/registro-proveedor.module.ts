import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroProveedorListComponent } from './registro-proveedor-list/registro-proveedor-list.component';
import { RegistroProveedorEditComponent } from './registro-proveedor-edit/registro-proveedor-edit.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    RegistroProveedorListComponent,
    RegistroProveedorEditComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegistroProveedorListComponent,
    RegistroProveedorEditComponent
  ]
})
export class RegistroProveedorModule { }
