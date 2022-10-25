import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Mesa } from 'src/app/demo/components/models/mesa.model';
import { MesasService } from '../../../services/mesas.service';

@Component({
  selector: 'app-page-edit-mesas',
  templateUrl: './page-edit-mesas.component.html',
  styleUrls: ['./page-edit-mesas.component.scss'],
  providers: [MessageService]
})
export class PageEditMesasComponent implements OnInit {

  mesa: Mesa = null;
  idToEdit: number;
  type: 'create' | 'edit' = 'edit';
  constructor(
    private router: Router,
    private activatedR: ActivatedRoute,
    private mesaService: MesasService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.activatedR.params.subscribe(params => {
      this.idToEdit = params['id'];
    });
    if (this.idToEdit) {
      this.mesaService.obtenerUnaMesa(this.idToEdit)
      .then(response => {
        this.mesa = response;
      })
      .catch(() => {
        this.showError();
      })
    }
  }

  editarMesa(event: {
    idMesa?: number;
    descripcion: string;
    numMesa: number;
    estado: 'ocupado' | 'libre';
  }) {
    this.mesa = {
      idMesa: event.idMesa,
      descripcion: event.descripcion,
      numMesa: event.numMesa,
      estado: 'libre'
    }
    console.log(this.mesa);
    this.mesaService.actualizarMesa(this.mesa)
    .then(() =>{
      this.showSuccess();
      setTimeout(() => {
        this.goBack();
      }, 1500);
    })
  }

  goBack(): void {
    this.router.navigate(['/espacio/mesas']);
  }

  showSuccess() {
    this.messageService.add({
      severity:'success',
      summary: '¡Hecho!',
      detail: 'La mesa se ha editado'
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
