import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { from } from 'rxjs';
import { SedesService } from 'src/app/demo/components/espacio/services/sedes.service';
import { InventarioProducto } from 'src/app/demo/components/models/inventarioProducto.model';
import { Producto } from 'src/app/demo/components/models/producto.model';
import { Sede } from 'src/app/demo/components/models/sede.model';
import { InventarioProductosService } from '../../../services/inventario-productos.service';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-page-inventario-productos-create',
  templateUrl: './page-inventario-productos-create.component.html',
  styleUrls: ['./page-inventario-productos-create.component.scss'],
  providers: [MessageService]
})
export class PageInventarioProductosCreateComponent implements OnInit {

  sedes: Sede[] = null;
  productos: Producto[] = null;
  type: 'create' | 'edit' = 'create';
  inventario: InventarioProducto;
  constructor(
    private router: Router,
    private sedesService: SedesService,
    private messageService: MessageService,
    private productosService: ProductosService,
    private inventarioService: InventarioProductosService,
  ) { }

  ngOnInit(): void {
    this.obtenerTodasLasSedes();
    this.obtenerTodasLosProductos();
  }

  crearInventario(event: {
    idInventario?: number;
    producto: Producto;
    cantidad: number;
    sede: Sede;
  }) {
    this.inventario = {
      idInventario: null,
      cantidad: event.cantidad,
      producto: event.producto,
      sede: event.sede
    }
    this.inventarioService.crearInventario(this.inventario)
    .then(() => {
      this.showSuccess();
      setTimeout(() => {
        this.goBack();
      }, 1500);
    })
    .catch(() => {
      this.showError();
    })
  }

  obtenerTodasLasSedes(): void {
    this.sedesService.obtenerTodasLasSedes()
    .then(response => {
      this.sedes = response;
    })
    .catch(() => {
      this.showError();
    })
  }

  obtenerTodasLosProductos(): void {
    this.productosService.obtenerTodosLosProductos()
    .then(response => {
      this.productos = response;
    })
    .catch(() => {
      this.showError();
    })
  }

  goBack(): void {
    this.router.navigate(['productos/inventario'])
  }

  showSuccess(): void {
    this.messageService.add({
      severity: 'success',
      summary:'Excelente', 
      detail: 'Se ha creado el inventario'
    });
  }

  showError(): void {
    this.messageService.add({
      severity: 'error',
      summary:'Error de servidor', 
      detail: 'El inventario de este producto ya existe en esta sede'
    });
  }

}
