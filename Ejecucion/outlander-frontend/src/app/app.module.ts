import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { HttpClientModule } from '@angular/common/http';
import { ControlModule } from './demo/components/control/control.module';
import { PagesRolesModule } from './demo/components/control/pages/pages-roles/pages-roles.module';
import { PagesUsuariosModule } from './demo/components/control/pages/pages-usuarios/pages-usuarios.module';
import { UsuariosModule } from './demo/components/control/components/usuarios/usuarios.module';
import { EspacioModule } from './demo/components/espacio/espacio.module';
import { PagesSedesModule } from './demo/components/espacio/pages/pages-sedes/pages-sedes.module';
import { PagesMesasModule } from './demo/components/espacio/pages/pages-mesas/pages-mesas.module';
import { MesasModule } from './demo/components/espacio/components/mesas/mesas.module';

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
        MesasModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
