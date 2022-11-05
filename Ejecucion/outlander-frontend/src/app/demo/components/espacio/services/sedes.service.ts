import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sede } from '../../models/sede.model';

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerTodasLasSedes(): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/space/campus/all`).toPromise();
  }

  obtenerUnaSede(id: number): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/space/campus/find/${id}`).toPromise();
  }

  crearSede(sede: Sede): Promise<any> {
    return this.http.post<Promise<any>>(`${environment.backServices.back}/space/campus/create`, sede).toPromise();
  }

  actualizarSede(sede: Sede): Promise<any> {
    return this.http.put<Promise<any>>(`${environment.backServices.back}/space/campus/update`, sede).toPromise();
  }

  obtenerSedePorNombre(nombre: String): Promise<any> {
    return this.http.get<Promise<any>>(`${environment.backServices.back}/space/campus/obtener-por-nombre/${nombre}`).toPromise();
  }
  
}
