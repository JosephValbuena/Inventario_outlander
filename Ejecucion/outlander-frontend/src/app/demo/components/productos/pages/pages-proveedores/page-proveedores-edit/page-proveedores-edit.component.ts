import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Proveedor } from 'src/app/demo/components/models/proveedor.model';
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'app-page-proveedores-edit',
  templateUrl: './page-proveedores-edit.component.html',
  styleUrls: ['./page-proveedores-edit.component.scss'],
  providers: [MessageService]
})
export class PageProveedoresEditComponent implements OnInit {

  idToEdit: number;
  proveedor: Proveedor = null;
  type: 'create' | 'edit' = 'edit';
  constructor(
    private router: Router,
    private activatedR: ActivatedRoute,
    private messageService: MessageService,
    private proveedorService: ProveedorService
  ) { }

  ngOnInit(): void {
    this.activatedR.params.subscribe(params => {
      this.idToEdit = params['id'];
    });
    if (this.idToEdit) {
      this.proveedorService.obtenerUnProveedor(this.idToEdit)
      .then(response => {
        this.proveedor = response;
      })
      .catch(() => {
        this.showError('Error de búsqueda', 'No se han encontrado el proveedor');
      })
    }
  }

  editarProveedor(event: {
    idProveedor?: number;
    nombre: string;
    descripcion: string;
  }) {
    this.proveedor = {
      idProveedor: event.idProveedor,
      nombre: event.nombre,
      descripcion: event.descripcion
    }
    this.proveedorService.editarProveedor(this.proveedor)
    .then(response => {
      this.showSuccess();
      setTimeout(() => {
        this.goBack();
      }, 1500);
    })
    .catch(() => {
      this.showError('Error de servidor', 'Ha ocurrido un error, comuniquese con soporte')
    })
  }

  goBack(): void {
    this.router.navigate(['productos/proveedores'])
  }

  showSuccess() {
    this.messageService.add({
      severity:'success',
      summary: '¡Hecho!',
      detail: 'El proveedor se ha editado'
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
