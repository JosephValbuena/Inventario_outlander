import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ControlModule } from './demo/components/control/control.module';
import { PagesRolesModule } from './demo/components/control/pages/pages-roles/pages-roles.module';
import { PagesUsuariosModule } from './demo/components/control/pages/pages-usuarios/pages-usuarios.module';
import { UsuariosModule } from './demo/components/control/components/usuarios/usuarios.module';
import { EspacioModule } from './demo/components/espacio/espacio.module';
import { PagesSedesModule } from './demo/components/espacio/pages/pages-sedes/pages-sedes.module';
import { PagesMesasModule } from './demo/components/espacio/pages/pages-mesas/pages-mesas.module';
import { MesasModule } from './demo/components/espacio/components/mesas/mesas.module';
import { SedesModule } from './demo/components/espacio/components/sedes/sedes.module';
import { CoreModule } from './demo/components/core/core.module';
import { PagesTablasMesasModule } from './demo/components/core/pages/pages-tablas-mesas/pages-tablas-mesas.module';
import { PagesPedidosModule } from './demo/components/core/pages/pages-pedidos/pages-pedidos.module';
import { PedidosModule } from './demo/components/core/components/pedidos/pedidos.module';
import { ProductosModule } from './demo/components/productos/productos.module';
import { PagesProductosModule } from './demo/components/productos/pages/pages-productos/pages-productos.module';

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        HttpClientModule,
        ControlModule,
        PagesRolesModule,
        PagesUsuariosModule,
        UsuariosModule,
        EspacioModule,
        PagesSedesModule,
        PagesMesasModule,
        MesasModule,
        SedesModule,
        CoreModule,
        PagesTablasMesasModule,
        PagesPedidosModule,
        PedidosModule,
        ProductosModule,
        PagesProductosModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
