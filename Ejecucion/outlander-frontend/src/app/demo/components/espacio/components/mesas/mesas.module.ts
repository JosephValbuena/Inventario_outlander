import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesasRoutingModule } from './mesas-routing.module';
import { MesasListComponent } from './mesas-list/mesas-list.component';
import { MesasEditComponent } from './mesas-edit/mesas-edit.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    MesasListComponent,
    MesasEditComponent
  ],
  imports: [
    FormsModule,
    TableModule,
    ButtonModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    MesasRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    MesasListComponent,
    MesasEditComponent
  ]
})
export class MesasModule { }
