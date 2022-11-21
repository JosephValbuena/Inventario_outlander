import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Proveedor } from 'src/app/demo/components/models/proveedor.model';
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'app-page-proveedores-create',
  templateUrl: './page-proveedores-create.component.html',
  styleUrls: ['./page-proveedores-create.component.scss'],
  providers: [MessageService]
})
export class PageProveedoresCreateComponent implements OnInit {

  proveedor: Proveedor;
  type: 'create' | 'edit' = 'create';
  constructor(
    private router: Router,
    private messageService: MessageService,
    private proveedorService: ProveedorService,
  ) { }

  ngOnInit(): void {
  }

  crearProveedor(event: {
    idProveedor?: number;
    nombre: string;
    descripcion: string;
  }) {
    this.proveedor = {
      idProveedor: null,
      nombre: event.nombre,
      descripcion: event.descripcion
    }
    this.proveedorService.crearProveedor(this.proveedor)
    .then(response => {
      this.showSuccess();
      setTimeout(() => {
        this.goBack();
      }, 1500);
    })
    .catch(() => {

    })
  }

  goBack(): void {
    this.router.navigate(['productos/proveedores'])
  }

  showSuccess(): void {
    this.messageService.add(
      {
        severity: 'success',
        summary: 'Hecho!',
        detail: 'El proveedor se ha creado con éxito'
      }
    )
  }

}
