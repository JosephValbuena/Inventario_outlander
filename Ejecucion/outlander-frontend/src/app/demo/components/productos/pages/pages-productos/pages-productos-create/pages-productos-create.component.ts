import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Producto } from 'src/app/demo/components/models/producto.model';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-pages-productos-create',
  templateUrl: './pages-productos-create.component.html',
  styleUrls: ['./pages-productos-create.component.scss'],
  providers: [MessageService]
})
export class PagesProductosCreateComponent implements OnInit {

  type: 'create' | 'edit' = 'create';
  producto: Producto;
  constructor(
    private router: Router,
    private messageService: MessageService,
    private productoService: ProductosService,
  ) { }

  ngOnInit(): void {
  }

  crearProducto(event: {
    idProducto?: number;
    nombre: string;
    marca: string;
  }) {
    this.producto = {
      idProducto: null,
      nombre: event.nombre,
      marca: event.marca
    }
    this.productoService.crearProducto(this.producto)
    .then(response => {
      this.showSuccess();
      setTimeout(() => {
        this.router.navigate(['productos/productos'])
      }, 1500);
    })
    .catch(() => {
      this.showError('Error de servidor', 'comunicate con soporte');
    })
  }

  goBack() {
    this.router.navigate(['productos/productos'])
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Execelente',
      detail: 'Producto creado'
    })
  }

  showError(summary: string, detail: string) {
    this.messageService.add({
      severity: 'success',
      summary,
      detail
    })
  }

}
