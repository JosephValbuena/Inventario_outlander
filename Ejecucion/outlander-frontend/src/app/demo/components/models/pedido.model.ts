import { InventarioProducto } from "./inventarioProducto.model";
import { Mesa } from "./mesa.model";
import { Usuario } from "./usuario.model";

export interface Pedido {
    idPedido: number;
    mesa: Mesa;
    meseros: Usuario[];
    productos: InventarioProducto[];
    cantidades: number[];
    estado: 'abierto' | 'cerrado';
}