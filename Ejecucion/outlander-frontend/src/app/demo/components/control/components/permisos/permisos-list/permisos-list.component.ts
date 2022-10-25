import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Permiso } from 'src/app/demo/components/models/permiso.model';
import { PermisosService } from '../../../services/permisos.service';

@Component({
  selector: 'app-permisos-list',
  templateUrl: './permisos-list.component.html',
  styleUrls: ['./permisos-list.component.scss'],
  providers: [MessageService]
})
export class PermisosListComponent implements OnInit {

  @Input() permisos: Permiso[] = null;
  
  constructor(
    private router: Router,
    private messageService: MessageService,
    private permisosService: PermisosService
  ) { }

  ngOnInit(): void {
  }

  showError(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Ha ocurrido un error',
      detail: 'Comunicate con soporte'
    })
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

  goToEdit(id: number) {
    this.router.navigate([`/control/permisos/edit/${id}`]);
  }
 
}
