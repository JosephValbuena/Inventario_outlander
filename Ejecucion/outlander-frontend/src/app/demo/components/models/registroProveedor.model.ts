import { Producto } from "./producto.model";
import { Proveedor } from "./proveedor.model";
import { Sede } from "./sede.model";

export interface RegistroProveedor {
    idRegistro: number;
    producto: Producto;
    proveedor: Proveedor;
    cantidad: number;
    sede: Sede;
    fecha_registro: string;
}