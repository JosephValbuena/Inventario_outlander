import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/demo/components/models/usuario.model';
import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-page-usuarios-list',
  templateUrl: './page-usuarios-list.component.html',
  styleUrls: ['./page-usuarios-list.component.scss'],
  providers: [MessageService]
})
export class PageUsuariosListComponent implements OnInit {

  usuarios: Usuario[] = null;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private usuariosService: UsuariosService,
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
      this.showError();
    })
  }
  
  goToCreate(): void {
    this.router.navigate(['control/usuarios/create']);
  }

  showError(): void {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Comunicate con soporte'});
  }

}
