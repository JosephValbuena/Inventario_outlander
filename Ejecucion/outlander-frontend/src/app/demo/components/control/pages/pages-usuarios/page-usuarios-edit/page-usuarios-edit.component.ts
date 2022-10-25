import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Rol } from 'src/app/demo/components/models/rol.model';
import { Usuario } from 'src/app/demo/components/models/usuario.model';
import { RolesService } from '../../../services/roles.service';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-page-usuarios-edit',
  templateUrl: './page-usuarios-edit.component.html',
  styleUrls: ['./page-usuarios-edit.component.scss'],
  providers: [MessageService]
})
export class PageUsuariosEditComponent implements OnInit {
  
  usuario: Usuario = null;
  roles: Rol[];
  idToEdit: number;
  type: 'create' | 'edit' = 'edit';
  constructor(
    private router: Router,
    private activatedR: ActivatedRoute,
    private rolesService: RolesService,
    private messageService: MessageService,
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.activatedR.params.subscribe(params => {
      this.idToEdit = params['id'];
    });
    if (this.idToEdit) {
      this.usuariosService.obtenerUnUsuario(this.idToEdit)
      .then(response => {
        this.usuario = response;        
      })
      .catch(() => {
        this.showError();
      })
    }
    this.obtenerRoles();
  }

  obtenerRoles(): void {
    this.rolesService.obtenerTodosLosRoles()
    .then(response => {
      this.roles = response;
    })
    .catch(() => {
      this.showError();
    })
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
      idUsuario: event.idUsuario,
      nombre: event.nombre,
      correo: event.correo,
      apellido: event.apellido,
      roles: event.roles,
      nombreUsuario: event.nombreUsuario,
      contrasena: event.contrasena
    }
    this.usuariosService.editarUsuario(this.usuario)
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

  goBack(): void {
    this.router.navigate(['/control/usuarios']);
  }

  showSuccess() {
    this.messageService.add({
      severity:'success',
      summary: '¡Hecho!',
      detail: 'El usuario se ha editado'
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
