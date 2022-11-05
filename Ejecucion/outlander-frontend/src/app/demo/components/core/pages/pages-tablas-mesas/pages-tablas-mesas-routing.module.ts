import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';
import { PagesTablasMesasChapineroComponent } from './pages-tablas-mesas-chapinero/pages-tablas-mesas-chapinero.component';
import { PagesTablasMesasGaleriasComponent } from './pages-tablas-mesas-galerias/pages-tablas-mesas-galerias.component';
import { PagesTablasMesasOchentaycincoComponent } from './pages-tablas-mesas-ochentaycinco/pages-tablas-mesas-ochentaycinco.component';

const routes: Routes = [
  {
    path: 'sede85',
    canActivate: [AuthGuard],
    data: { permissions: ["core.boards-tables.85.get"]},
    component: PagesTablasMesasOchentaycincoComponent
  },
  {
    path: 'sedeGalerias',
    canActivate: [AuthGuard],
    data: { permissions: ["core.boards-tables.galerias.get"]},
    component: PagesTablasMesasGaleriasComponent
  },
  {
    canActivate: [AuthGuard],
    data: { permissions: ["core.boards-tables.chapinero.get"]},
    path: 'sedeChapinero',
    component: PagesTablasMesasChapineroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesTablasMesasRoutingModule { }
