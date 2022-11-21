import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SedesService } from 'src/app/demo/components/espacio/services/sedes.service';
import { InventarioProducto } from 'src/app/demo/components/models/inventarioProducto.model';
import { Producto } from 'src/app/demo/components/models/producto.model';
import { Sede } from 'src/app/demo/components/models/sede.model';
import { InventarioProductosService } from '../../../services/inventario-productos.service';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-page-inventario-productos-edit',
  templateUrl: './page-inventario-productos-edit.component.html',
  styleUrls: ['./page-inventario-productos-edit.component.scss'],
  providers: [MessageService]
})
export class PageInventarioProductosEditComponent implements OnInit {

  showTable = true;
  idToEdit: number;
  sedes: Sede[] = null;
  productos: Producto[] = null;
  inventario: InventarioProducto;
  type: 'create' | 'edit' = 'edit';
  constructor(
    private router: Router,
    private activatedR: ActivatedRoute,
    private messageService: MessageService,
    private sedesService: SedesService,
    private productosService: ProductosService,
    private inventarioService: InventarioProductosService,
  ) { }

  ngOnInit(): void {
    this.activatedR.params.subscribe(params => {
      this.idToEdit = params['id'];
    });
    if (this.idToEdit) {
      this.inventarioService.obtenerUnInventario(this.idToEdit)
      .then(response => {
        this.inventario = response;
      })
      .catch(() => {
        this.showTable = false;
        this.showError();
      })
    }
    this.obtenerTodasLasSedes();
    this.obtenerTodasLosProductos();
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

  editarInventario(event: {
    idInventario?: number;
    producto: Producto;
    cantidad: number;
    sede: Sede;
  }): void {
    this.inventario = {
      idInventario: event.idInventario,
      producto: event.producto,
      cantidad: event.cantidad,
      sede: event.sede
    }
    this.inventarioService.editarInventario(this.inventario)
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

  goBack(): void {
    this.router.navigate(['productos/inventario'])
  }

  showSuccess(): void {
    this.messageService.add({
      severity: 'success',
      summary:'Excelente', 
      detail: 'Se ha editado el inventario'
    });
  }

  showError(): void {
    this.messageService.add({
      severity: 'error',
      summary:'Error de servidor', 
      detail: 'Contáctate con soporte'
    });
  }

}
