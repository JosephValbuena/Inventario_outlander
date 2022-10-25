import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Mesa } from 'src/app/demo/components/models/mesa.model';
import { MesasService } from '../../../services/mesas.service';

@Component({
  selector: 'app-page-list-mesas',
  templateUrl: './page-list-mesas.component.html',
  styleUrls: ['./page-list-mesas.component.scss'],
  providers: [MessageService]
})
export class PageListMesasComponent implements OnInit {
  
  mesas: Mesa[] = null;
  constructor(
    private router: Router,
    private mesaService: MesasService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.obtenerTodasLasMesas();
  }

  obtenerTodasLasMesas(): void {
    this.mesaService.obtenerTodasLasMesas()
    .then(response => {
      this.mesas = response;
    })
    .catch(error => {
      this.showError();
    });
    
  }

  goToCreate(): void {
    this.router.navigate(['espacio/mesas/create']);
  }

  showError() {
    this.messageService.add({
      severity:'error',
      summary: 'Algo ha ocurrido...',
      detail: 'Comunícate con soporte'
    });
  }

}
