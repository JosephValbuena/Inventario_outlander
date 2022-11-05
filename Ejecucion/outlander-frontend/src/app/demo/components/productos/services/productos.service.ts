import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Producto } from '../../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerTodosLosProductos(): Promise<any> { 
    return this.http.get<Promise<any>>(`${environment.backServices.back}/core/producto/all`).toPromise();
  }

  obtenerUnProducto(id: number): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/core/producto/find/${id}`).toPromise();
  }

  crearProducto(producto: Producto): Promise<any> {
    return this.http.post<Promise<any>>(`${environment.backServices.back}/core/producto/create`, producto).toPromise();
  }

  editarProducto(producto: Producto): Promise<any> {
    return this.http.put<Promise<any>>(`${environment.backServices.back}/core/producto/update`, producto).toPromise();
  }
}
