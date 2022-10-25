import { Permiso } from "./permiso.model";

export interface Rol {
    idRol: number;
    nombre: string;
    descripcion: string;
    tipo: string;
    permisos: Permiso[];
}
