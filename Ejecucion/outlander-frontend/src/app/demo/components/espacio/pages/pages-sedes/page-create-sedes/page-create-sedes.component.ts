import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsuariosService } from 'src/app/demo/components/control/services/usuarios.service';
import { Sede } from 'src/app/demo/components/models/sede.model';
import { Usuario } from 'src/app/demo/components/models/usuario.model';
import { SedesService } from '../../../services/sedes.service';

@Component({
  selector: 'app-page-create-sedes',
  templateUrl: './page-create-sedes.component.html',
  styleUrls: ['./page-create-sedes.component.scss'],
  providers: [MessageService]
})
export class PageCreateSedesComponent implements OnInit {

  sede: Sede = null;
  type: 'create' | 'edit' = 'create';
  usuarios: Usuario[] = null;
  showTable = true;

  constructor(
    private router: Router,
    private sedeService: SedesService,
    private messageService: MessageService,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.obtenerTodosLosUsuarios();
  }

  obtenerTodosLosUsuarios(): void {
    this.usuariosService.obtenerTodosLosUsuarios()
    .then(response => {
      this.usuarios = response;
    })
    .catch(() => {
      this.showError('Algo ha ocurrido...', 'Comunícate con soporte');
    });
  }

  crearSede(event: {
    idSede?: number;
    nombre: string;
    descripcion: string;
    usuarios: Usuario[];
  }): void {
    this.sede = {
      idSede: null,
      nombre: event.nombre,
      descripcion: event.descripcion,
      usuarios: event.usuarios
    }
    this.sedeService.crearSede(this.sede)
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
      detail: 'La sede se ha creado'
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
