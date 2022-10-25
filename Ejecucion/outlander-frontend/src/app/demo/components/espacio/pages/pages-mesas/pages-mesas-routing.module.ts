import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreateMesasComponent } from './page-create-mesas/page-create-mesas.component';
import { PageEditMesasComponent } from './page-edit-mesas/page-edit-mesas.component';
import { PageListMesasComponent } from './page-list-mesas/page-list-mesas.component';

const routes: Routes = [
  {
    path: '',
    component: PageListMesasComponent
  },
  {
    path: 'create',
    component: PageCreateMesasComponent
  },
  {
    path: 'edit/:id',
    component: PageEditMesasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesMesasRoutingModule { }
