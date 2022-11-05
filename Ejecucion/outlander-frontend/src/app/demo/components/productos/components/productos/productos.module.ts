import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { ProductosEditComponent } from './productos-edit/productos-edit.component';


@NgModule({
  declarations: [
    ProductosListComponent,
    ProductosEditComponent
  ],
  imports: [
    TableModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProductosListComponent,
    ProductosEditComponent
  ]
})
export class ProductosModule { }
