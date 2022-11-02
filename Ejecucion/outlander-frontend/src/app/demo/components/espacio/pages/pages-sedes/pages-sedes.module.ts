import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesSedesRoutingModule } from './pages-sedes-routing.module';
import { SedesModule } from '../../components/sedes/sedes.module';
import { PageListSedesComponent } from './page-list-sedes/page-list-sedes.component';
import { PageEditSedesComponent } from './page-edit-sedes/page-edit-sedes.component';
import { PageCreateSedesComponent } from './page-create-sedes/page-create-sedes.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    PageListSedesComponent,
    PageEditSedesComponent,
    PageCreateSedesComponent
  ],
  imports: [
    ToastModule,
    SedesModule,
    CommonModule,
    ButtonModule,
    PagesSedesRoutingModule
  ]
})
export class PagesSedesModule { }
