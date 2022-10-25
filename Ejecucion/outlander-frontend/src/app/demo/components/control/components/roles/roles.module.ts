import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesEditComponent } from './roles-edit/roles-edit.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    RolesEditComponent,
    RolesListComponent
  ],
  imports: [
    FormsModule,
    TableModule,
    CommonModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    MultiSelectModule,
    RolesRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    RolesEditComponent,
    RolesListComponent
  ]
})
export class RolesModule { }
