import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePermisosCreateComponent } from './page-permisos-create/page-permisos-create.component';
import { PagePermisosEditComponent } from './page-permisos-edit/page-permisos-edit.component';
import { PagePermisosListComponent } from './page-permisos-list/page-permisos-list.component';

const routes: Routes = [
  {
    path: '',
    component: PagePermisosListComponent
  },
  {
    path: 'create',
    component: PagePermisosCreateComponent
  },
  {
    path: 'edit/:id',
    component: PagePermisosEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagePermisosRoutingModule { }
