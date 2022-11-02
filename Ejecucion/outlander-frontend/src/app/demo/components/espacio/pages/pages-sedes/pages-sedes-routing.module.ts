import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreateSedesComponent } from './page-create-sedes/page-create-sedes.component';
import { PageEditSedesComponent } from './page-edit-sedes/page-edit-sedes.component';
import { PageListSedesComponent } from './page-list-sedes/page-list-sedes.component';

const routes: Routes = [
  {
    path: '',
    component: PageListSedesComponent
  },
  {
    path: 'create',
    component: PageCreateSedesComponent
  },
  {
    path: 'edit/:id',
    component: PageEditSedesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesSedesRoutingModule { }
