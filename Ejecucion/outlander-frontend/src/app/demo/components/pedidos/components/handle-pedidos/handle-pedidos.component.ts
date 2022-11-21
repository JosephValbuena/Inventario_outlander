import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventarioProducto } from '../../../models/inventarioProducto.model';
import { Mesa } from '../../../models/mesa.model';
import { Pedido } from '../../../models/pedido.model';
import { Producto } from '../../../models/producto.model';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-handle-pedidos',
  templateUrl: './handle-pedidos.component.html',
  styleUrls: ['./handle-pedidos.component.scss']
})
export class HandlePedidosComponent implements OnInit {

  @Input() pedido: Pedido;
  @Input() idToEdit: number;
  @Input() productos: InventarioProducto[];
  validProds = true
  productoSeleccionado: InventarioProducto;
  productosMoment: InventarioProducto[];
  cantidades: number[];
  @Output() hanldePedidos: EventEmitter<{
    idPedido?: number;
    mesa: Mesa;
    meseros: Usuario[];
    productos: InventarioProducto[];
    cantidades: number[];
    estado: 'abierto' | 'cerrado';
  }> = new EventEmitter;
  _form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    for (const producto of this.pedido.productos) {
      this.productosMoment.push(producto);
    }
    for (const cantidad of this.pedido.cantidades) {
      this.cantidades.push(cantidad);
    }
  }

  adicionarProducto(): void {
    this.productosMoment.push(this.productoSeleccionado);
    this.cantidades.push(1);
  }

  manejoPedido(): void {
    this.hanldePedidos.emit({
      idPedido: this.pedido.idPedido,
      mesa: this.pedido.mesa,
      productos: this.pedido.productos,
      meseros: this.pedido.meseros,
      cantidades: this.pedido.cantidades,
      estado: 'abierto'
    })
  }

}
