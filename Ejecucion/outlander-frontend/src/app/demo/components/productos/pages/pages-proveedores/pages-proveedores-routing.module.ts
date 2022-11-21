import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageProveedoresCreateComponent } from './page-proveedores-create/page-proveedores-create.component';
import { PageProveedoresEditComponent } from './page-proveedores-edit/page-proveedores-edit.component';
import { PageProveedoresListComponent } from './page-proveedores-list/page-proveedores-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageProveedoresListComponent
  },
  {
    path: 'create',
    component: PageProveedoresCreateComponent
  },
  {
    path: 'edit/:id',
    component: PageProveedoresEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesProveedoresRoutingModule { }
