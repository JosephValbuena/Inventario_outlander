import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { InventarioProducto } from 'src/app/demo/components/models/inventarioProducto.model';
import { InventarioProductosService } from '../../../services/inventario-productos.service';

@Component({
  selector: 'app-page-inventario-productos-list',
  templateUrl: './page-inventario-productos-list.component.html',
  styleUrls: ['./page-inventario-productos-list.component.scss'],
  providers: [MessageService]
})
export class PageInventarioProductosListComponent implements OnInit {

  inventarios: InventarioProducto[] = null;
  constructor(
    private router: Router,
    private messageService: MessageService,
    private inventarioProductosService: InventarioProductosService
  ) { }

  ngOnInit(): void {
    this.obtenerTodosLosInventarios();
  }

  obtenerTodosLosInventarios(): void {
    this.inventarioProductosService.obtenerTodosLosInventarios()
    .then(response => {
      this.inventarios = response;
    })
    .catch(() => {
      this.showError('Error de consulta', 'Comunícate con soporte');
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
    this.router.navigate(['productos/inventario/create']);
  }


}
