import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosEditComponent } from './pedidos-edit/pedidos-edit.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    PedidosEditComponent
  ],
  imports: [
    FormsModule,
    TableModule,
    CommonModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    PedidosRoutingModule
  ],
  exports: [
    PedidosEditComponent,
  ]
})
export class PedidosModule { }
