import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Proveedor } from '../../models/proveedor.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(
    private http: HttpClient
  ) { }
  
  obtenerTodosLosProveedores(): Promise<any> { 
    return this.http.get<Promise<any>>(`${environment.backServices.back}/core/providers/all`).toPromise();
  }

  obtenerUnProveedor(id: number): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/core/providers/find/${id}`).toPromise();
  }

  crearProveedor(proveedor: Proveedor): Promise<any> {
    return this.http.post<Promise<any>>(`${environment.backServices.back}/core/providers/create`, proveedor).toPromise();
  }

  editarProveedor(proveedor: Proveedor): Promise<any> {
    return this.http.put<Promise<any>>(`${environment.backServices.back}/core/providers/update`, proveedor).toPromise();
  }
}
