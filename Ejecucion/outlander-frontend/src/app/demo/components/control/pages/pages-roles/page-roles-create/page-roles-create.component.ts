import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Permiso } from 'src/app/demo/components/models/permiso.model';
import { Rol } from 'src/app/demo/components/models/rol.model';
import { PermisosService } from '../../../services/permisos.service';
import { RolesService } from '../../../services/roles.service';

@Component({
  selector: 'app-page-roles-create',
  templateUrl: './page-roles-create.component.html',
  styleUrls: ['./page-roles-create.component.scss'],
  providers: [MessageService]
})
export class PageRolesCreateComponent implements OnInit {

  rol: Rol;
  permisos: Permiso[];
  type: 'create' | 'edit' = 'create';

  constructor(
    private router: Router,
    private rolesService: RolesService,
    private permisosService: PermisosService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.obtenerPermisos();
  }

  obtenerPermisos(): void {
    this.permisosService.obtenerTodosLosPermisos()
    .then(response => {
      this.permisos = response;
    })
    .catch(() => {
      this.showError();
    })
  }

  createRol(event: {
    idRol?: number;
    nombre: string;
    descripcion: string;
    tipo: string;
    permisos: Permiso[]
  }) {
    this.rol = {
      idRol: null,
      nombre: event.nombre,
      descripcion: event.descripcion,
      tipo: event.tipo,
      permisos: event.permisos
    }
    this.rolesService.crearPermiso(this.rol)
    .then(response => {
      this.showSuccess();
      setTimeout(() => {
        this.router.navigate(['control/roles']);
      }, 1500);
    })
    .catch(() => {
      this.showError();
    })
  }

  goBack(): void {
    this.router.navigate(['control/roles']);
  }

  showSuccess() {
    this.messageService.add({
      severity:'success',
      summary: '¡Hecho!',
      detail: 'El rol se ha creado'
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
