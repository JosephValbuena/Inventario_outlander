import { Mesa } from "./mesa.model";
import { Usuario } from "./usuario.model";

export interface Sede {
    idSede: number;
    nombre: string;
    descripcion: string;
    mesas: Mesa[];
    usuarios: Usuario[];
}