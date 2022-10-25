import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesMesasRoutingModule } from './pages-mesas-routing.module';
import { PageListMesasComponent } from './page-list-mesas/page-list-mesas.component';
import { PageEditMesasComponent } from './page-edit-mesas/page-edit-mesas.component';
import { PageCreateMesasComponent } from './page-create-mesas/page-create-mesas.component';
import { MesasModule } from '../../components/mesas/mesas.module';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    PageListMesasComponent,
    PageEditMesasComponent,
    PageCreateMesasComponent
  ],
  imports: [
    ToastModule,
    ButtonModule,
    MesasModule,
    CommonModule,
    PagesMesasRoutingModule
  ]
})
export class PagesMesasModule { }
