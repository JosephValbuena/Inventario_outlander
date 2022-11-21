import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Usuario } from '../demo/components/models/usuario.model';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        let usuario: Usuario = JSON.parse(localStorage.getItem('token'));
        if (usuario.roles[0].tipo === 'administrador') {
            this.model = [
                {
                    label: 'Autenticación',
                    items: [
                        { label: 'Usuarios', icon: 'pi pi-users', routerLink: ['/control/usuarios'] },
                        { label: 'Roles', icon: 'pi pi-sitemap', routerLink: ['/control/roles'] },
                        { label: 'Permisos', icon: 'pi pi-key', routerLink: ['/control/permisos'] }
                        
                    ]
                },
                {
                    label: 'Espacios',
                    items: [
                        { label: 'Mesas', icon: 'pi pi-table', routerLink: ['/espacio/mesas'] },
                        { label: 'Sedes', icon: 'pi pi-home', routerLink: ['/espacio/sedes'] },
                        
                    ]
                },
                {
                    label: 'Productos',
                    items: [
                        { label: 'Productos', icon: 'pi pi-map', routerLink: ['/productos/productos'] },
                        { label: 'Inventario productos', icon: 'pi pi-box', routerLink: ['/productos/inventario'] },
                        { label: 'Proveedores', icon: 'pi pi-car', routerLink: ['/productos/proveedores'] },
                        { label: 'Registro productos', icon: 'pi pi-database', routerLink: ['/productos/registro-productos'] },
                    ]
                },
                {
                    label: 'Atención en mesas',
                    items: [
                        { label: 'Sede 85', icon: 'pi pi-clone', routerLink: ['/core/mesas/sede85'] },
                        { label: 'Sede Galerías', icon: 'pi pi-clone', routerLink: ['/core/mesas/sedeGalerias'] },            
                        { label: 'Sede Chapinero', icon: 'pi pi-clone', routerLink: ['/core/mesas/sedeChapinero'] },            
                    ]
                },
                
            ]
        } else if (usuario.roles[0].tipo === 'cajero') {
            this.model = [
                {
                    label: 'Productos',
                    items: [
                        { label: 'Productos', icon: 'pi pi-map', routerLink: ['/productos/productos'] },
                        { label: 'Inventario productos', icon: 'pi pi-box', routerLink: ['/productos/inventario'] },
                        { label: 'Proveedores', icon: 'pi pi-car', routerLink: ['/productos/proveedores'] },
                    ]
                },
                {
                    label: 'Atención en mesas',
                    items: [
                        { label: 'Sede 85', icon: 'pi pi-clone', routerLink: ['/core/mesas/sede85'] }  
                    ]
                },
                
            ]
        } else if (usuario.roles[0].tipo === 'mesero') {
            this.model = [
                {
                    label: 'Atención en mesas',
                    items: [
                        { label: 'Sede 85', icon: 'pi pi-clone', routerLink: ['/core/mesas/sede85'] }  
                    ]
                },
                
            ]
        }
    }
}

