import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Permiso } from 'src/app/demo/components/models/permiso.model';
import { Rol } from 'src/app/demo/components/models/rol.model';
import { PermisosService } from '../../../services/permisos.service';
import { RolesService } from '../../../services/roles.service';

@Component({
  selector: 'app-page-roles-edit',
  templateUrl: './page-roles-edit.component.html',
  styleUrls: ['./page-roles-edit.component.scss'],
  providers: [MessageService]
})
export class PageRolesEditComponent implements OnInit {

  rol: Rol = null;
  permisos: Permiso[];
  idToEdit: number;
  type: 'create' | 'edit' = 'edit';
  constructor(
    private router: Router,
    private activatedR: ActivatedRoute,
    private rolesService: RolesService,
    private messageService: MessageService,
    private permisosService: PermisosService,
  ) { }

  ngOnInit(): void {
    this.activatedR.params.subscribe(params => {
      this.idToEdit = params['id'];
    });
    if (this.idToEdit) {
      this.rolesService.obtenerUnRol(this.idToEdit)
      .then(response => {
        this.rol = response;        
      })
      .catch(() => {
        this.showError();
      })
    }
    this.obtenerPermisos();
  }

  goBack(): void {
    this.router.navigate(['/control/roles']);
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

  editRol(event: {
    idRol?: number;
    nombre: string;
    descripcion: string;
    tipo: string;
    permisos: Permiso[]
  }) {
    this.rol = {
      idRol: event.idRol,
      nombre: event.nombre,
      descripcion: event.descripcion,
      tipo: event.tipo,
      permisos: event.permisos
    }
    this.rolesService.editarPermiso(this.rol)
    .then(response => {
      this.showSuccess();
      setTimeout(() => {
        this.router.navigate(['control/roles'])
      }, 1500);
    })
    .catch(() => {
      this.showError();
    })
  }

  showSuccess() {
    this.messageService.add({
      severity:'success',
      summary: '¡Hecho!',
      detail: 'El rol se ha editado'
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
