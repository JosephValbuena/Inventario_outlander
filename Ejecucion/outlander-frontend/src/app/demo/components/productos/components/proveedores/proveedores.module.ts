import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresListComponent } from './proveedores-list/proveedores-list.component';
import { ProveedoresEditComponent } from './proveedores-edit/proveedores-edit.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    ProveedoresListComponent,
    ProveedoresEditComponent
  ],
  imports: [
    FormsModule,
    TableModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProveedoresListComponent,
    ProveedoresEditComponent
  ]
})
export class ProveedoresModule { }
