import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRolesCreateComponent } from './page-roles-create/page-roles-create.component';
import { PageRolesEditComponent } from './page-roles-edit/page-roles-edit.component';
import { PageRolesListComponent } from './page-roles-list/page-roles-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageRolesListComponent
  },
  {
    path: 'create',
    component: PageRolesCreateComponent
  },
  {
    path: 'edit/:id',
    component: PageRolesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRolesRoutingModule { }
