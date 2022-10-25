import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Rol } from 'src/app/demo/components/models/rol.model';
import { Usuario } from 'src/app/demo/components/models/usuario.model';
import { RolesService } from '../../../services/roles.service';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-page-usuarios-create',
  templateUrl: './page-usuarios-create.component.html',
  styleUrls: ['./page-usuarios-create.component.scss'],
  providers: [MessageService]
})
export class PageUsuariosCreateComponent implements OnInit {

  roles: Rol[];
  usuario: Usuario;
  type: 'edit' | 'create' = 'create';
  constructor(
    private router: Router,
    private rolesService: RolesService,
    private messageService: MessageService,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.obtenerTodosLosRoles();
  }

  obtenerTodosLosRoles(): void {
    this.rolesService.obtenerTodosLosRoles()
    .then(response => {
      this.roles = response;
    })
    .catch(() => {
      this.showError();
    })
  }

  goBack(): void {
    this.router.navigate(['/control/usuarios']);
  }

  handleUsuarios(event: {
    idUsuario?: number;
    nombre: string;
    correo: string;
    apellido: string;
    roles: Rol[];
    nombreUsuario: string;
    contrasena: string;
  }) {
    this.usuario = {
      idUsuario: null,
      nombre: event.nombre,
      correo: event.correo,
      apellido: event.apellido,
      roles: event.roles,
      nombreUsuario: event.nombreUsuario,
      contrasena: event.contrasena
    }
    this.usuariosService.crearUsuario(this.usuario)
    .then(response => {
      this.showSuccess();
      setTimeout(() => {
        this.goBack();
      }, 1500)
    })
    .catch(() => {
      this.showError();
    })
  }

  showSuccess() {
    this.messageService.add({
      severity:'success',
      summary: '¡Hecho!',
      detail: 'El usuario se ha creado'
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
