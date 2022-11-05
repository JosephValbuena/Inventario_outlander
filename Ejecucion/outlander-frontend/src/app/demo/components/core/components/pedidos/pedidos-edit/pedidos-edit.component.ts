import { Component, Input, OnInit } from '@angular/core';
import { InventarioProducto } from 'src/app/demo/components/models/inventarioProducto.model';
import { Pedido } from 'src/app/demo/components/models/pedido.model';

@Component({
  selector: 'app-pedidos-edit',
  templateUrl: './pedidos-edit.component.html',
  styleUrls: ['./pedidos-edit.component.scss']
})
export class PedidosEditComponent implements OnInit {

  @Input() pedido: Pedido;
  @Input() productos: InventarioProducto[];

  constructor() { }

  ngOnInit(): void {
  }

  get productosSeleccionados(): InventarioProducto[] {
    if (this.pedido) {
      return this.pedido.productos;
    }
    return [];
  }

}
