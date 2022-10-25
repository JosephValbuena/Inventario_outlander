import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rol } from '../../models/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerTodosLosRoles(): Promise<any> { 
    return this.http.get<Promise<any>>(`${environment.backServices.back}/auth/roles/all`).toPromise();
  }

  obtenerUnRol(id: number): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/auth/roles/find/${id}`).toPromise();
  }

  crearPermiso(rol: Rol): Promise<any> {
    return this.http.post<Promise<any>>(`${environment.backServices.back}/auth/roles/create`, rol).toPromise();
  }

  editarPermiso(rol: Rol): Promise<any> {
    return this.http.put<Promise<any>>(`${environment.backServices.back}/auth/roles/update`, rol).toPromise();
  }
}
