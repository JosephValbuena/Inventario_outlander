import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegistroProveedor } from '../../models/registroProveedor.model';
import { Sede } from '../../models/sede.model';

@Injectable({
  providedIn: 'root'
})
export class RegisroProveedorService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerTodosLosRegistroProveedores(): Promise<any> { 
    return this.http.get<Promise<any>>(`${environment.backServices.back}/core/registro-proveedor/all`).toPromise();
  }

  crearRegistroProveedor(registro: RegistroProveedor): Promise<any> {
    return this.http.post<Promise<any>>(`${environment.backServices.back}/core/registro-proveedor/create`, registro).toPromise();
  }

  obtenerRegistrosPorSede(sede: Sede): Promise<any> {
    return this.http.post<Promise<any>>(`${environment.backServices.back}/core/registro-proveedor/findBySede`, sede).toPromise();
  }
}
