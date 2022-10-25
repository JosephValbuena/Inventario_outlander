import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerTodosLosUsuarios(): Promise<any> { 
    return this.http.get<Promise<any>>(`${environment.backServices.back}/auth/users/all`).toPromise();
  }

  obtenerUnUsuario(id: number): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/auth/users/find/${id}`).toPromise();
  }

  crearUsuario(usuario: Usuario): Promise<any> {
    return this.http.post<Promise<any>>(`${environment.backServices.back}/auth/users/create`, usuario).toPromise();
  }

  editarUsuario(usuario: Usuario): Promise<any> {
    return this.http.put<Promise<any>>(`${environment.backServices.back}/auth/users/update`, usuario).toPromise();
  }
}
