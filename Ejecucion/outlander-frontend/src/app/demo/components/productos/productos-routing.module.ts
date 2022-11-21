import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';

const routes: Routes = [
  { 
    path: 'productos',
    canActivate: [AuthGuard],
    data: { permissions: ["products.products.get"]},
    loadChildren: () => import('./pages/pages-productos/pages-productos.module').then(m => m.PagesProductosModule)
  },
  { 
    path: 'inventario',
    canActivate: [AuthGuard],
    data: { permissions: ["products.inventory.get"]},
    loadChildren: () => import('./pages/pages-inventario-productos/pages-inventario-productos.module').then(m => m.PagesInventarioProductosModule)
  },
  { 
    path: 'proveedores',
    canActivate: [AuthGuard],
    data: { permissions: ["products.providers.get"]},
    loadChildren: () => import('./pages/pages-proveedores/pages-proveedores.module').then(m => m.PagesProveedoresModule)
  },
  { 
    path: 'registro-productos',
    canActivate: [AuthGuard],
    data: { permissions: ["products.registers.get"]},
    loadChildren: () => import('./pages/pages-registro-proveedor/pages-registro-proveedor.module').then(m => m.PagesRegistroProveedorModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
