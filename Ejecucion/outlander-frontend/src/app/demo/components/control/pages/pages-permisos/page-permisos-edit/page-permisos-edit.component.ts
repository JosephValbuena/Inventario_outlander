import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Permiso } from 'src/app/demo/components/models/permiso.model';
import { PermisosService } from '../../../services/permisos.service';

@Component({
  selector: 'app-page-permisos-edit',
  templateUrl: './page-permisos-edit.component.html',
  styleUrls: ['./page-permisos-edit.component.scss'],
  providers: [MessageService]
})
export class PagePermisosEditComponent implements OnInit {

  idToEdit: number;
  permiso: Permiso;
  type: 'create' | 'edit' = 'edit';

  constructor(
    private router: Router,
    private activatedR: ActivatedRoute,
    private messageService: MessageService,
    private permisoService: PermisosService,
  ) { }

  ngOnInit(): void {
    this.activatedR.params.subscribe(params => {
      this.idToEdit = params['id'];
    });
    if (this.idToEdit) {
      console.log(this.idToEdit)
      this.permisoService.obtenerUnPermiso(this.idToEdit)
      .then(response => {
        this.permiso = response;        
      })
      .catch(() => {
        this.showError();
      })
    }
  }

  goBack(): void {
    this.router.navigate(['/control/permisos']);
  }

  editarPermiso(event: {
    idPermiso?: number;
    nombre: string;
    descripcion: string;
  }): void {
    this.permiso = {
      nombre: event.nombre,
      idPermiso: event.idPermiso,
      descripcion: event.descripcion
    }
    this.permisoService.editarPermiso(this.permiso)
    .then(response => {
      this.showSuccess();
      setTimeout(() => {
        this.router.navigate(['/control/permisos'])
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
      detail: 'El permiso se ha editado'
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
