import { Rol } from "./rol.model";

export interface Usuario {
    idUsuario: number;
    nombre: string;
    correo: string;
    apellido: string;
    roles: Rol[];
    nombreUsuario: string;
    contrasena: string;
}
