import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesTablasMesasRoutingModule } from './pages-tablas-mesas-routing.module';
import { PagesTablasMesasChapineroComponent } from './pages-tablas-mesas-chapinero/pages-tablas-mesas-chapinero.component';
import { PagesTablasMesasGaleriasComponent } from './pages-tablas-mesas-galerias/pages-tablas-mesas-galerias.component';
import { PagesTablasMesasOchentaycincoComponent } from './pages-tablas-mesas-ochentaycinco/pages-tablas-mesas-ochentaycinco.component';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    PagesTablasMesasChapineroComponent,
    PagesTablasMesasGaleriasComponent,
    PagesTablasMesasOchentaycincoComponent
  ],
  imports: [
    ToastModule,
    CommonModule,
    ButtonModule,
    PagesTablasMesasRoutingModule
  ]
})
export class PagesTablasMesasModule { }
