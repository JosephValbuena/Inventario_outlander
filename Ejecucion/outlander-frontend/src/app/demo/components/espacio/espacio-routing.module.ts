import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';

const routes: Routes = [
  { 
    path: 'mesas',
    canActivate: [AuthGuard],
    data: { permissions: ["space.tables.get"]},
    loadChildren: () => import('./pages/pages-mesas/pages-mesas.module').then(m => m.PagesMesasModule)
  },
  { 
    path: 'sedes',
    canActivate: [AuthGuard],
    data: { permissions: ["space.campus.get"]},
    loadChildren: () => import('./pages/pages-sedes/pages-sedes.module').then(m => m.PagesSedesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspacioRoutingModule { }
