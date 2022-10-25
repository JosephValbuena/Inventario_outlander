import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/security/auth.guard';

const routes: Routes = [
  { 
    path: 'permisos',
    canActivate: [AuthGuard],
    data: { permissions: ["auth.permises.get"]},
    loadChildren: () => import('./pages/pages-permisos/page-permisos.module').then(m => m.PagePermisosModule)
  },
  { 
    path: 'roles',
    canActivate: [AuthGuard],
    data: { permissions: ["auth.roles.get"]},
    loadChildren: () => import('./pages/pages-roles/pages-roles.module').then(m => m.PagesRolesModule)
  },
  { 
    path: 'usuarios',
    canActivate: [AuthGuard],
    data: { permissions: ["auth.users.get"]},
    loadChildren: () => import('./pages/pages-usuarios/pages-usuarios.module').then(m => m.PagesUsuariosModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlRoutingModule { }
