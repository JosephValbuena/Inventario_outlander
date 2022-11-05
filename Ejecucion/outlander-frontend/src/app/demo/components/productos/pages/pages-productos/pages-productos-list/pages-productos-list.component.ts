import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Producto } from 'src/app/demo/components/models/producto.model';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-pages-productos-list',
  templateUrl: './pages-productos-list.component.html',
  styleUrls: ['./pages-productos-list.component.scss'],
  providers: [MessageService]
})
export class PagesProductosListComponent implements OnInit {

  productos: Producto[] = null;
  constructor(
    private router: Router,
    private messageService: MessageService,
    private productoService: ProductosService,
  ) { }

  ngOnInit(): void {
    this.obtenerTodosLosProductos();
  }

  obtenerTodosLosProductos(): void {
    this.productoService.obtenerTodosLosProductos()
    .then(response => {
      this.productos = response;
    })
    .catch(() => {
      this.showError('Error de servidor', 'Contáctate con soporte.')
    })
  }

  showError(summary: string, detail: string) {
    this.messageService.add({
      severity: 'error',
      summary,
      detail
    })
  }

  goToCreate(): void {
    this.router.navigate(['productos/productos/create']);
  }

}
