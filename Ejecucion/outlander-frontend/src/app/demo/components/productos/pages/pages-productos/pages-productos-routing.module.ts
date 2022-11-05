import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesProductosCreateComponent } from './pages-productos-create/pages-productos-create.component';
import { PagesProductosEditComponent } from './pages-productos-edit/pages-productos-edit.component';
import { PagesProductosListComponent } from './pages-productos-list/pages-productos-list.component';

const routes: Routes = [
  {
    path: '',
    component: PagesProductosListComponent
  },
  {
    path: 'create',
    component: PagesProductosCreateComponent
  },
  {
    path: 'edit/:id',
    component: PagesProductosEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesProductosRoutingModule { }
