import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard } from './security/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { 
                        path: '',
                        loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule)
                    },
                    { path: 'control', loadChildren: () => import('./demo/components/control/control.module').then(m => m.ControlModule) },
                    { path: 'espacio', loadChildren: () => import('./demo/components/espacio/espacio.module').then(m => m.EspacioModule) },
                    { path: 'core', loadChildren: () => import('./demo/components/core/core.module').then(m => m.CoreModule) },
                    { path: 'productos', loadChildren: () => import('./demo/components/productos/productos.module').then(m => m.ProductosModule) },
                ],
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'pages/notfound', component: NotfoundComponent },
            { path: '**', redirectTo: 'pages/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
