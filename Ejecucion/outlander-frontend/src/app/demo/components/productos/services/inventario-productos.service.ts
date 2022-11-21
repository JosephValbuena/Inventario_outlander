import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InventarioProducto } from '../../models/inventarioProducto.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioProductosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerTodosLosInventarios(): Promise<any> { 
    return this.http.get<Promise<any>>(`${environment.backServices.back}/core/inventario-producto/all`).toPromise();
  }

  obtenerUnInventario(id: number): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/core/inventario-producto/find/${id}`).toPromise();
  }

  crearInventario(inventario: InventarioProducto): Promise<any> {
    return this.http.post<Promise<any>>(`${environment.backServices.back}/core/inventario-producto/create`, inventario).toPromise();
  }

  editarInventario(inventario: InventarioProducto): Promise<any> {
    return this.http.put<Promise<any>>(`${environment.backServices.back}/core/inventario-producto/update`, inventario).toPromise();
  }
}
