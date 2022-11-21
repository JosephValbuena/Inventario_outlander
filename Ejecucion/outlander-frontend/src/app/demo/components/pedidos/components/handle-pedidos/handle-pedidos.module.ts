import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandlePedidosComponent } from './handle-pedidos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    HandlePedidosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    MultiSelectModule,
    ReactiveFormsModule,
  ]
})
export class HandlePedidosModule { }
