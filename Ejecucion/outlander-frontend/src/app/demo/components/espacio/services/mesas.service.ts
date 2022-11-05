import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mesa } from '../../models/mesa.model';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerTodasLasMesas(): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/space/tables/all`).toPromise();
  }

  obtenerUnaMesa(id: number): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/space/tables/find/${id}`).toPromise();
  }

  crearMesa(mesa: Mesa): Promise<any> {
    return this.http.post<Promise<any>>(`${environment.backServices.back}/space/tables/create`, mesa).toPromise();
  }

  actualizarMesa(mesa: Mesa): Promise<any> {
    return this.http.put<Promise<any>>(`${environment.backServices.back}/space/tables/update`, mesa).toPromise();
  }

  obtenerMesaPorSede(idSede: number): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/space/tables/all-by-sede/${idSede}`).toPromise();
  }
}
