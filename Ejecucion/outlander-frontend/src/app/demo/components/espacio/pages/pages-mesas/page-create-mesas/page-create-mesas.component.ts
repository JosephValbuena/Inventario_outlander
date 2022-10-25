import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Mesa } from 'src/app/demo/components/models/mesa.model';
import { MesasService } from '../../../services/mesas.service';

@Component({
  selector: 'app-page-create-mesas',
  templateUrl: './page-create-mesas.component.html',
  styleUrls: ['./page-create-mesas.component.scss'],
  providers: [MessageService]
})
export class PageCreateMesasComponent implements OnInit {

  type: 'create' | 'edit' = 'create';
  mesa: Mesa;
  constructor(
    private router: Router,
    private mesasService: MesasService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  crearMesa(event: {
    idMesa?: number;
    descripcion: string;
    numMesa: number;
    estado: 'ocupado' | 'libre';
  }): void {
    this.mesa = {
      idMesa: null,
      descripcion: event.descripcion,
      numMesa: event.numMesa,
      estado: event.estado
    }
    this.mesasService.crearMesa(this.mesa)
    .then(() => {
      this.showSuccess();
      setTimeout(() => {
        this.goBack();
      }, 1500);
    })
    .catch(() => {
      this.showError();
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

  showError() {
    this.messageService.add({
      severity:'error',
      summary: 'Algo ha ocurrido...',
      detail: 'Comunícate con soporte'
    });
  }

}
