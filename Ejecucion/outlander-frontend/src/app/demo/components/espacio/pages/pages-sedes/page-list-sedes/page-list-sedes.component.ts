import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UsuariosService } from 'src/app/demo/components/control/services/usuarios.service';
import { Sede } from 'src/app/demo/components/models/sede.model';
import { SedesService } from '../../../services/sedes.service';

@Component({
  selector: 'app-page-list-sedes',
  templateUrl: './page-list-sedes.component.html',
  styleUrls: ['./page-list-sedes.component.scss'],
  providers: [MessageService]
})
export class PageListSedesComponent implements OnInit {

  sedes: Sede[] = null;
  constructor(
    private router: Router,
    private sedeService: SedesService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.obtenerTodasLasSedes();
  }

  obtenerTodasLasSedes(): void {
    this.sedeService.obtenerTodasLasSedes()
    .then(response => {
      this.sedes = response;
    })
    .catch(() => {
      this.showError();
    })
  }

  goToCreate(): void {
    this.router.navigate(['espacio/sedes/create'])
  }

  showError() {
    this.messageService.add({
      severity:'error',
      summary: 'Algo ha ocurrido...',
      detail: 'Comunícate con soporte'
    });
  }

}
