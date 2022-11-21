import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioProductosListComponent } from './inventario-productos-list/inventario-productos-list.component';
import { InventarioProductosEditComponent } from './inventario-productos-edit/inventario-productos-edit.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    InventarioProductosListComponent,
    InventarioProductosEditComponent
  ],
  imports: [
    TableModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,

    ReactiveFormsModule,
  ],
  exports: [
    InventarioProductosListComponent,
    InventarioProductosEditComponent
  ]
})
export class InventarioProductosModule { }
