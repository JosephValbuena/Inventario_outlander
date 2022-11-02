import { Sede } from "./sede.model";

export interface Mesa {
    idMesa: number;
    descripcion: string;
    numMesa: number;
    sede: Sede;
}