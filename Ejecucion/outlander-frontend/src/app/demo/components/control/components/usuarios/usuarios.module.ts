import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { UsuariosEditComponent } from './usuarios-edit/usuarios-edit.component';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    UsuariosListComponent,
    UsuariosEditComponent
  ],
  imports: [
    TableModule,
    FormsModule,
    CommonModule,
    ButtonModule,
    PasswordModule,
    DropdownModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule
  ],
  exports: [
    UsuariosListComponent,
    UsuariosEditComponent
  ]
})
export class UsuariosModule { }
