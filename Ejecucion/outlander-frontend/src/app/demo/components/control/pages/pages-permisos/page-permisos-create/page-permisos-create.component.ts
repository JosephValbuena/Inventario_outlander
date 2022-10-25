import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Permiso } from 'src/app/demo/components/models/permiso.model';
import { PermisosService } from '../../../services/permisos.service';

@Component({
  selector: 'app-page-permisos-create',
  templateUrl: './page-permisos-create.component.html',
  styleUrls: ['./page-permisos-create.component.scss'],
  providers: [MessageService]
})
export class PagePermisosCreateComponent implements OnInit {

  permiso: Permiso;
  type: 'create' | 'edit' = 'create';

  constructor(
    private router: Router,
    private messageService: MessageService,
    private permisoService: PermisosService,
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.router.navigate(['/control/permisos']);
  }

  crearPermiso(event: {
    idPermiso?: number;
    nombre: string;
    descripcion: string;
  }) {
    this.permiso = {
      idPermiso: null,
      nombre: event.nombre,
      descripcion: event.descripcion
    }
    this.permisoService.crearPermiso(this.permiso)
    .then(response => {
      this.showSuccess();
      setTimeout(() => {
        this.router.navigate(['/control/permisos']);
      }, 1500);
    })
    .catch(() => {
      this.showError();
    });
  }

  showSuccess() {
    this.messageService.add({
      severity:'success',
      summary: '¡Hecho!',
      detail: 'El permiso se ha creado'
    });
  }

  showError() {
    this.messageService.add({
      severity:'error',
      summary: 'Algo ha ocurrido...',
      detail: 'Comunícate con soporte'
    });
  }

}
