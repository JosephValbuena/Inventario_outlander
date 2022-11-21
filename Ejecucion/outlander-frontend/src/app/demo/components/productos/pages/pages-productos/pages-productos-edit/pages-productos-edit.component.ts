import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Producto } from 'src/app/demo/components/models/producto.model';
import { ProductosService } from '../../../services/productos.service';

@Component({
  selector: 'app-pages-productos-edit',
  templateUrl: './pages-productos-edit.component.html',
  styleUrls: ['./pages-productos-edit.component.scss'],
  providers: [MessageService]
})
export class PagesProductosEditComponent implements OnInit {

  showTable = true;
  idToEdit: number;
  producto: Producto = null;
  type: 'create' | 'edit' = 'edit';
  constructor(
    private router: Router,
    private activatedR: ActivatedRoute,
    private messageService: MessageService,
    private productosService: ProductosService,
  ) { }

  ngOnInit(): void {
    this.activatedR.params.subscribe(params => {
      this.idToEdit = params['id'];
    });
    if (this.idToEdit) {
      this.productosService.obtenerUnProducto(this.idToEdit)
      .then(response => {
        this.producto = response;
      })
      .catch(() => {
        this.showTable = false;
        this.showError('Error de búsqueda', 'No se han encontrado productos');
      })
    }
  }

  editarProducto(event: {
    idProducto?: number;
    nombre: string;
    marca: string;
  }) {
    this.producto = {
      idProducto: event.idProducto,
      nombre: event.nombre,
      marca: event.marca
    }
    this.productosService.editarProducto(this.producto)
    .then(() => {
      this.showSuccess();
      setTimeout(() => {
        this.goBack();
      }, 1500);
    })
    .catch(() => {
      this.showError('Error de edición', 'Ha ocurrido un error en el servidor');
    })
  }

  goBack(): void {
    this.router.navigate(['productos/productos']);
  }

  showSuccess() {
    this.messageService.add({
      severity:'success',
      summary: '¡Hecho!',
      detail: 'El producto se ha editado'
    });
  }

  showError(summary: string, detail: string) {
    this.messageService.add({
      severity:'error',
      summary,
      detail
    });
  }

}
