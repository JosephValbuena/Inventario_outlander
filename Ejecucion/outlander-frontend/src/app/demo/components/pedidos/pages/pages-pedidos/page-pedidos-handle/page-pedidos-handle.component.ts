import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MesasService } from 'src/app/demo/components/espacio/services/mesas.service';
import { Pedido } from 'src/app/demo/components/models/pedido.model';
import { Usuario } from 'src/app/demo/components/models/usuario.model';
import { PedidoService } from '../../../services/pedido.service';

@Component({
  selector: 'app-page-pedidos-handle',
  templateUrl: './page-pedidos-handle.component.html',
  styleUrls: ['./page-pedidos-handle.component.scss'],
  providers: [MessageService]
})
export class PagePedidosHandleComponent implements OnInit {

  numSede: number;
  idMesa: number;
  mesero: Usuario = null;
  pedido: Pedido = null;
  nuevoPedido = true;
  constructor(
    private router: Router,
    private activatedR: ActivatedRoute,
    private MesaService: MesasService,
    private pedidoService: PedidoService,
  ) { }

  ngOnInit(): void {
    this.mesero = JSON.parse(localStorage.getItem('token'));
    this.activatedR.params.subscribe(params => {
      this.numSede = params['sede'];
      this.idMesa = params['idMesa'];
      this.encontrarPedido(this.idMesa);
    });
  }

  encontrarPedido(idMesa: number) {
    this.pedidoService.obtenerUnPedido(idMesa)
    .then(response => {
      this.nuevoPedido = false;
      console.log(response);
    })
    .catch(error => {
      if (error.status == 404) {
        let meseros: Usuario[] = [];
        meseros.push(this.mesero);
        this.MesaService.obtenerUnaMesa(this.idMesa)
        .then(response => {
          this.pedido = {
            idPedido: null,
            mesa: response,
            meseros,
            productos: [],
            cantidades: [],
            estado: 'abierto'
          }
        })
      }
    })
  }

  goBack(): void {
    this.router.navigate([]);
  }

}
