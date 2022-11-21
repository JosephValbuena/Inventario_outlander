import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MesasService } from 'src/app/demo/components/espacio/services/mesas.service';
import { SedesService } from 'src/app/demo/components/espacio/services/sedes.service';
import { Mesa } from 'src/app/demo/components/models/mesa.model';
import { Sede } from 'src/app/demo/components/models/sede.model';

@Component({
  selector: 'app-pages-tablas-mesas-ochentaycinco',
  templateUrl: './pages-tablas-mesas-ochentaycinco.component.html',
  styleUrls: ['./pages-tablas-mesas-ochentaycinco.component.scss'],
  providers: [MessageService]
})
export class PagesTablasMesasOchentaycincoComponent implements OnInit {

  sede: Sede = null;
  mesas: Mesa[] = null;
  constructor(
    private router: Router,
    private mesasService: MesasService,
    private sedesService: SedesService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.sedesService.obtenerSedePorNombre('Sede 85')
    .then(response => {
      this.sede = response;
      this.mesasService.obtenerMesaPorSede(this.sede.idSede)
      .then(response => {
        this.mesas = response;
      })
      .catch(() => {
        this.showError('Error de servidor', 'Ocurrió un problema con el servicio. Comúniquese con soporte')
      })
    })
    .catch(() => {
      this.showError('Error de servidor', 'Ocurrió un problema con el servicio. Comúniquese con soporte')
    })
  }

  goToPedido(idMesa: number) {
    this.router.navigate([`/pedidos/pedido/${1}/${idMesa}`]);
  }

  showError(summary: string, detail: string): void {
    this.messageService.add({
      severity:'error',
      summary,
      detail
    });
  }

}
