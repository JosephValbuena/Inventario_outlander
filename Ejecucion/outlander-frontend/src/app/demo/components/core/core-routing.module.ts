import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';

const routes: Routes = [
  { 
    path: 'mesas',
    canActivate: [AuthGuard],
    data: { permissions: ["core.boards-tables.get"]},
    loadChildren: () => import('./pages/pages-tablas-mesas/pages-tablas-mesas.module').then(m => m.PagesTablasMesasModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
