import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SedesListComponent } from './sedes-list/sedes-list.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SedesEditComponent } from './sedes-edit/sedes-edit.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    SedesListComponent,
    SedesEditComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    MultiSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    SedesListComponent,
    SedesEditComponent
  ]
})
export class SedesModule { }
