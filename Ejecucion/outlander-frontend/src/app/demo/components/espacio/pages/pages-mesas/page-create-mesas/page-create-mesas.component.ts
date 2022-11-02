import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Mesa } from 'src/app/demo/components/models/mesa.model';
import { Sede } from 'src/app/demo/components/models/sede.model';
import { MesasService } from '../../../services/mesas.service';
import { SedesService } from '../../../services/sedes.service';

@Component({
  selector: 'app-page-create-mesas',
  templateUrl: './page-create-mesas.component.html',
  styleUrls: ['./page-create-mesas.component.scss'],
  providers: [MessageService]
})
export class PageCreateMesasComponent implements OnInit {

  showTable = true;
  sedes: Sede[] = null;
  type: 'create' | 'edit' = 'create';
  mesa: Mesa;
  constructor(
    private router: Router,
    private sedeService: SedesService,
    private mesasService: MesasService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.obtenerTodasLasSedes();
  }

  obtenerTodasLasSedes(): void {
    this.sedeService.obtenerTodasLasSedes()
    .then(response => {
      this.sedes = response;
      if (this.sedes.length === 0) {
        this.showTable = false;
        this.showError('Algo ha ocurrido...', 'Comunícate con soporte');
      }
    })
    .catch(() => {
      this.showTable = false;
      this.showError('Error de búsqueda', 'No se han encontrado sedes');
    })
  }

  crearMesa(event: {
    idMesa?: number;
    descripcion: string;
    numMesa: number;
    sede: Sede;
  }): void {
    this.mesa = {
      idMesa: null,
      descripcion: event.descripcion,
      numMesa: event.numMesa,
      sede: event.sede
    }
    this.mesasService.crearMesa(this.mesa)
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
    this.router.navigate(['/espacio/mesas']);
  }

  showSuccess() {
    this.messageService.add({
      severity:'success',
      summary: '¡Hecho!',
      detail: 'La mesa se ha creado'
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
