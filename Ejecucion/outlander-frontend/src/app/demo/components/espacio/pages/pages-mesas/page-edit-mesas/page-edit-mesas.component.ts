import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Mesa } from 'src/app/demo/components/models/mesa.model';
import { Sede } from 'src/app/demo/components/models/sede.model';
import { MesasService } from '../../../services/mesas.service';
import { SedesService } from '../../../services/sedes.service';

@Component({
  selector: 'app-page-edit-mesas',
  templateUrl: './page-edit-mesas.component.html',
  styleUrls: ['./page-edit-mesas.component.scss'],
  providers: [MessageService]
})
export class PageEditMesasComponent implements OnInit {

  showTable = true;
  sedes: Sede[] = null;
  mesa: Mesa = null;
  idToEdit: number;
  type: 'create' | 'edit' = 'edit';
  constructor(
    private router: Router,
    private activatedR: ActivatedRoute,
    private sedeService: SedesService,
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
        this.showTable = false;
        this.showError('Error de búsqueda', 'No se han encontrado sedes');
      })
    }
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
      this.showError('Algo ha ocurrido...', 'Comunícate con soporte');
    })
  }

  editarMesa(event: {
    idMesa?: number;
    descripcion: string;
    numMesa: number;
    sede: Sede;
  }) {
    this.mesa = {
      idMesa: event.idMesa,
      descripcion: event.descripcion,
      numMesa: event.numMesa,
      sede: event.sede
    }
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

  showError(summary: string, detail: string) {
    this.messageService.add({
      severity:'error',
      summary,
      detail
    });
  }



}
