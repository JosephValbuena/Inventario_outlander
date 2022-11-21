import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SedesService } from 'src/app/demo/components/espacio/services/sedes.service';
import { Producto } from 'src/app/demo/components/models/producto.model';
import { Proveedor } from 'src/app/demo/components/models/proveedor.model';
import { RegistroProveedor } from 'src/app/demo/components/models/registroProveedor.model';
import { Sede } from 'src/app/demo/components/models/sede.model';
import { Usuario } from 'src/app/demo/components/models/usuario.model';
import { ProductosService } from '../../../services/productos.service';
import { ProveedorService } from '../../../services/proveedor.service';
import { RegisroProveedorService } from '../../../services/regisro-proveedor.service';

@Component({
  selector: 'app-page-registro-proveedor-create',
  templateUrl: './page-registro-proveedor-create.component.html',
  styleUrls: ['./page-registro-proveedor-create.component.scss'],
  providers: [MessageService]
})
export class PageRegistroProveedorCreateComponent implements OnInit {

  showAll = true;
  sedes: Sede[] = null;
  usuario: Usuario = null;
  productos: Producto[] = null;
  proveedores: Proveedor[] = null;
  type: 'create' | 'edit' = 'create';
  registro: RegistroProveedor = null;
  constructor(
    private router: Router,
    private sedeService: SedesService,
    private messageService: MessageService,
    private productosService: ProductosService,
    private proveedorService: ProveedorService,
    private registroProveedorService: RegisroProveedorService
    ) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('token'));
    if (this.usuario == null) {
      this.showAll = false;
      this.showError('Error de autenticacion', 'No se obtuvo el usuario');
    } else {
      for (let rol of this.usuario.roles) {
        if (rol.nombre == 'rol_administrador') {
          this.sedeService.obtenerTodasLasSedes()
          .then(response => {
            this.sedes = response;
          })
          .catch(() => {
            this.showError('Error de servidor', 'Algo ha ocurrido');
          });
          break;
        } else {
          this.sedeService.obtenerSedePorUsuario(this.usuario.idUsuario)
          .then(response => {
            this.sedes = [];
            this.sedes.push(response)
          })
          .catch(() => {
            this.showError('Error de servidor', 'Algo ha ocurrido');
          })
        }
      }
    }

    this.productosService.obtenerTodosLosProductos()
    .then(response => {
      this.productos = response;
    })
    .catch(() => {
      this.showError('Error de servidor', 'Algo ha ocurrido');
    });

    this.proveedorService.obtenerTodosLosProveedores()
    .then(response => {
      this.proveedores = response;
    })
    .catch(() => {
      this.showError('Error de servidor', 'Algo ha ocurrido');
    });
  }

  crearRegistro(event: {
    idRegistro?: number,
    producto: Producto,
    proveedor: Proveedor,
    cantidad: number,
    sede: Sede,
    fecha_registro: string
  }) {
    this.registro = {
      idRegistro: null,
      producto: event.producto,
      sede: event.sede,
      proveedor: event.proveedor,
      cantidad: event.cantidad,
      fecha_registro: ""
    }
    this.registroProveedorService.crearRegistroProveedor(this.registro)
    .then(() => {
      this.showSuccess();
      setTimeout(() => {
        this.goBack();
      }, 1500);
    })
  }

  goBack(): void {
    this.router.navigate(['productos/registro-productos']);
  }

  showSuccess(): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Hecho!',
      detail: 'Se ha creado el resgistro exitosamente'
    })
  }

  showError(summary: string, detail: string): void {
    this.messageService.add({
      severity: 'error',
      summary,
      detail 
    })
  }

}
