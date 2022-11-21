import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Proveedor } from 'src/app/demo/components/models/proveedor.model';
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'app-page-proveedores-list',
  templateUrl: './page-proveedores-list.component.html',
  styleUrls: ['./page-proveedores-list.component.scss'],
  providers: [MessageService]
})
export class PageProveedoresListComponent implements OnInit {

  proveedores: Proveedor[] = null;
  constructor(
    private router: Router,
    private messageService: MessageService,
    private proveedorService: ProveedorService
  ) { }

  ngOnInit(): void {
    this.obtenerTodosLosProveedores();
  }

  obtenerTodosLosProveedores(): void {
    this.proveedorService.obtenerTodosLosProveedores()
    .then(response => {
      this.proveedores = response;
    })
    .catch(() => {
      this.showError();
    })
  }

  showError(): void {
    this.messageService.add({
      severity:'error', 
      summary: 'Error de servidor', 
      detail: 'Ha ocurrido un error en el servidor. Comuníquese con soporte'
    });
  }

  goToCreate(): void {
    this.router.navigate(['productos/proveedores/create'])
  }

}
