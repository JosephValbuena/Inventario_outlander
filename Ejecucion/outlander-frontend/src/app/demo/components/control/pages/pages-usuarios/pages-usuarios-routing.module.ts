import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUsuariosCreateComponent } from './page-usuarios-create/page-usuarios-create.component';
import { PageUsuariosEditComponent } from './page-usuarios-edit/page-usuarios-edit.component';
import { PageUsuariosListComponent } from './page-usuarios-list/page-usuarios-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageUsuariosListComponent
  },
  {
    path: 'create',
    component: PageUsuariosCreateComponent
  },
  {
    path: 'edit/:id',
    component: PageUsuariosEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesUsuariosRoutingModule { }
