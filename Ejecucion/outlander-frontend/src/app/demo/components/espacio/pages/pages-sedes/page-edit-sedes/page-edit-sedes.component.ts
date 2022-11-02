import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsuariosService } from 'src/app/demo/components/control/services/usuarios.service';
import { Sede } from 'src/app/demo/components/models/sede.model';
import { Usuario } from 'src/app/demo/components/models/usuario.model';
import { SedesService } from '../../../services/sedes.service';

@Component({
  selector: 'app-page-edit-sedes',
  templateUrl: './page-edit-sedes.component.html',
  styleUrls: ['./page-edit-sedes.component.scss'],
  providers: [MessageService]
})
export class PageEditSedesComponent implements OnInit {

  sede: Sede = null;
  type: 'create' | 'edit' = 'edit';
  usuarios: Usuario[] = null;
  idToEdit: number;
  showTable = true;
  constructor(
    private router: Router,
    private activatedR: ActivatedRoute,
    private sedeService: SedesService,
    private messageService: MessageService,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.activatedR.params.subscribe(params => {
      this.idToEdit = params['id'];
    });
    if (this.idToEdit) {
      this.sedeService.obtenerUnaSede(this.idToEdit)
      .then(response => {
        this.sede = response;
      })
      .catch(() => {
        this.showTable = false;
        this.showError('Error de búsqueda', 'No se han encontrado sedes');
      })
    }
    this.obtenerTodosLosUsuarios();
  }
  
  obtenerTodosLosUsuarios(): void {
    this.usuariosService.obtenerTodosLosUsuarios()
    .then(response => {
      this.usuarios = response;
      if (this.usuarios.length === 0) {
        this.showError('Error de búsqueda', 'No se encontraron usuarios');  
      }
    })
    .catch(() => {
      this.showError('Algo ha ocurrido...', 'Comunícate con soporte');
    });
  }

  actualizarSede(event: {
    idSede?: number;
    nombre: string;
    descripcion: string;
    usuarios: Usuario[];
  }): void {
    this.sede = {
      idSede: event.idSede,
      nombre: event.nombre,
      descripcion: event.descripcion,
      usuarios: event.usuarios
    }
    this.sedeService.actualizarSede(this.sede)
    .then(() => {
      this.showSuccess();
      setTimeout(() => {
        this.goBack();
      }, 1500);
    })
    .catch(() => {
      this.showError('Algo ha ocurrido...', 'Comunícate con soporte');
    });
  }

  goBack(): void {
    this.router.navigate(['/espacio/sedes']);
  }

  showSuccess() {
    this.messageService.add({
      severity:'success',
      summary: '¡Hecho!',
      detail: 'La sede se ha editado'
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
