import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRegistroProveedorCreateComponent } from './page-registro-proveedor-create/page-registro-proveedor-create.component';
import { PageRegistroProveedorEditComponent } from './page-registro-proveedor-edit/page-registro-proveedor-edit.component';
import { PageRegistroProveedorListComponent } from './page-registro-proveedor-list/page-registro-proveedor-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageRegistroProveedorListComponent
  },
  {
    path: 'create',
    component: PageRegistroProveedorCreateComponent
  },
  {
    path: 'edit/:id',
    component: PageRegistroProveedorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRegistroProveedorRoutingModule { }
