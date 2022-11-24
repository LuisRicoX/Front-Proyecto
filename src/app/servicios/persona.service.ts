import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service';
import { PersonaModelo } from 'src/app/modelos/persona.modelo';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
token:string = '';
url: string= 'http://localhost:3000'

  constructor(
    private seguridadService: SeguridadService,
    private http: HttpClient
  ) {
    this.token = this.seguridadService.obtenerToken();
   }
  obtenerPersonas(): Observable<PersonaModelo[]>{
    return this.http.get<PersonaModelo[]>(`${this.url}/personas`)
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    })
  }
  crearPersona(persona: PersonaModelo): Observable<PersonaModelo>{
    return this.http.post<PersonaModelo>(`${this.url}/personas`,persona,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  actualizarPersona(persona: PersonaModelo): Observable<PersonaModelo>{
    return this.http.put<PersonaModelo>(`${this.url}/personas/${persona.id}`,persona,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    });
  }
  getPersonaXId(id: string): Observable<PersonaModelo>{
    return this.http.get<PersonaModelo>(`${this.url}/personas/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Beaner ${this.token}`
      })
    })
  }
}
