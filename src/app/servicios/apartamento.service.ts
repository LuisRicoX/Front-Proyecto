import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApartamentoModelo } from '../modelos/apartamento.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ApartamentoService {
  
  url:string = 'http://localhost:3000'
  token: string;

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService
  ) {
    this.token=this.seguridadService.obtenerToken();
   }
  getApartamentos(): Observable<ApartamentoModelo[]>{
    return this.http.get<ApartamentoModelo[]>(`${this.url}/apartamentos-disponibles`);
  }
  crearApartamento(apartamento: ApartamentoModelo):Observable<ApartamentoModelo> {
    return this.http.post<ApartamentoModelo>(`${this.url}/apartamentos`, apartamento,{
      headers: new HttpHeaders({
        'Authorization':`${this.token}`
      })
    } );
  }
}
