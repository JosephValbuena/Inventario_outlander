import { Producto } from "./producto.model";
import { Sede } from "./sede.model";

export interface InventarioProducto {
    idInventario: number;
    producto: Producto;
    cantidad: number;
    sede: Sede;
}