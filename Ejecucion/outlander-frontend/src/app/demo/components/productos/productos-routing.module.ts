import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';

const routes: Routes = [
  { 
    path: 'productos',
    canActivate: [AuthGuard],
    data: { permissions: ["products.products.get"]},
    loadChildren: () => import('./pages/pages-productos/pages-productos.module').then(m => m.PagesProductosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
