import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Permiso } from 'src/app/demo/components/models/permiso.model';
import { PermisosService } from '../../../services/permisos.service';

@Component({
  selector: 'app-page-permisos-list',
  templateUrl: './page-permisos-list.component.html',
  styleUrls: ['./page-permisos-list.component.scss'],
  providers: [MessageService]
})
export class PagePermisosListComponent implements OnInit {

  permisos: Permiso[] = null;
  constructor(
    private router: Router,
    private messageService: MessageService,
    private permisosService: PermisosService,
  ) { }

  ngOnInit(): void {
    this.getPermisos();
  }

  getPermisos() {
    this.permisosService.obtenerTodosLosPermisos()
    .then(response => {
      this.permisos = response;
    })
    .catch(() => {
      this.messageService.add({
        severity:'error',
        summary: 'Ha ocurrido un error',
        detail: 'Por favor contacte a soporte.'
      });
    })
  }

  goToCreate(): void {
    this.router.navigate(['/control/permisos/create'])
  }

}
