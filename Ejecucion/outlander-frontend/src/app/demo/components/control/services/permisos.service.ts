import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Permiso } from '../../models/permiso.model';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerTodosLosPermisos(): Promise<any> { 
    return this.http.get<Promise<any>>(`${environment.backServices.back}/auth/permises/all`).toPromise();
  }

  obtenerUnPermiso(id: number): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/auth/permises/find/${id}`).toPromise();
  }

  crearPermiso(permiso: Permiso): Promise<any> {
    return this.http.post<Promise<any>>(`${environment.backServices.back}/auth/permises/create`, permiso).toPromise();
  }

  editarPermiso(permiso: Permiso): Promise<any> {
    return this.http.put<Promise<any>>(`${environment.backServices.back}/auth/permises/update`, permiso).toPromise();
  }
}
