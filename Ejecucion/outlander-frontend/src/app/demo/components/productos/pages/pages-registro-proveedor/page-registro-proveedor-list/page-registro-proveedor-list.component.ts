import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SedesService } from 'src/app/demo/components/espacio/services/sedes.service';
import { RegistroProveedor } from 'src/app/demo/components/models/registroProveedor.model';
import { Sede } from 'src/app/demo/components/models/sede.model';
import { Usuario } from 'src/app/demo/components/models/usuario.model';
import { RegisroProveedorService } from '../../../services/regisro-proveedor.service';

@Component({
  selector: 'app-page-registro-proveedor-list',
  templateUrl: './page-registro-proveedor-list.component.html',
  styleUrls: ['./page-registro-proveedor-list.component.scss'],
  providers: [MessageService]
})
export class PageRegistroProveedorListComponent implements OnInit {

  showAll = true;
  sede: Sede = null;
  registros: RegistroProveedor[] = null;
  usuario: Usuario = null;
  constructor(
    private router: Router,
    private sedeService: SedesService,
    private messageService: MessageService,
    private registroService: RegisroProveedorService
  ) { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('token'));
    if (this.usuario == null) {
      this.showAll = false;
      this.showError('Error de autenticacion', 'No se obtuvo el usuario');
    } else {
      for (let rol of this.usuario.roles) {
        if (rol.nombre == 'rol_administrador') {
          this.registroService.obtenerTodosLosRegistroProveedores()
          .then(response => {
            this.registros = response;
          })
          .catch(() => {
            this.showError('Error de servidor', 'Algo ha ocurrido');
          });
          break;
        } else {
          this.sedeService.obtenerSedePorUsuario(this.usuario.idUsuario)
          .then(response => {
            this.sede = response;
            this.registroService.obtenerRegistrosPorSede(this.sede)
            .then(response => {
              this.registros = response;
            })
            .catch(() => {
              this.showError('Error de servidor', 'Algo ha ocurrido');  
            })
          })
          .catch(() => {
            this.showError('Error de servidor', 'Algo ha ocurrido');
          })
        }
      }
    }
  }

  goToCreate(): void {
    this.router.navigate(['productos/registro-productos/create']);
  }

  showError(summary: string, detail: string): void {
    this.messageService.add({
      severity: 'error',
      summary,
      detail 
    })
  }

}
