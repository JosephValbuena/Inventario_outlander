import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInventarioProductosCreateComponent } from './page-inventario-productos-create/page-inventario-productos-create.component';
import { PageInventarioProductosEditComponent } from './page-inventario-productos-edit/page-inventario-productos-edit.component';
import { PageInventarioProductosListComponent } from './page-inventario-productos-list/page-inventario-productos-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageInventarioProductosListComponent
  },
  {
    path: 'create',
    component: PageInventarioProductosCreateComponent
  },
  {
    path: 'edit/:id',
    component: PageInventarioProductosEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesInventarioProductosRoutingModule { }
