import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerUnPedido(idMesa: number): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/core/pedido/findByMesa/${idMesa}`).toPromise();
  }

  crearUnPedido(pedido: Pedido): Promise<any> {
    return this.http.post<Promise<any>>(`${environment.backServices.back}/core/pedido/create`, pedido).toPromise();
  }

  editarUnPedido(pedido: Pedido): Promise<any> {
    return this.http.put<Promise<any>>(`${environment.backServices.back}/core/pedido/update`, pedido).toPromise();
  }
}
