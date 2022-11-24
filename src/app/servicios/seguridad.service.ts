import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModelo } from '../modelos/login.modelos';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  
  datosUsuarioEnSesion=new BehaviorSubject<LoginModelo>(new LoginModelo());
  constructor(
    private http: HttpClient
  ) { }
  validarUsuario(email:string, clave: string): Observable<LoginModelo>{
    const url = 'http://localhost:3000/validar-acceso';
    const credenciales = {
      usuario:email,
      clave: clave
    }
    return this.http.post<LoginModelo>(
      url,
      credenciales,
      {
        headers: new HttpHeaders({})
      }
    );
  }
  almacenarSesion(datos:LoginModelo){
    datos.enSesion = true;
    localStorage.setItem("datosSesion", JSON.stringify(datos));
    this.datosUsuarioEnSesion.next(datos);
  }
  obtenerInformacionSesion(){
    let stringDatos = localStorage.getItem("datosSesion");
    if(stringDatos){
      let datos= JSON.parse(stringDatos);
      return datos;
    }
    return null;
  }
  eliminarSesion(){
    //localStorage.removeItem("datosSesion");
    localStorage.clear();
  }
  verificarSesionActual(){
    let datos = this.obtenerInformacionSesion();
    if (datos) {
      this.datosUsuarioEnSesion.next(datos);      
    }    
  }
  obtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }
  obtenerToken(){
    let datosLocal = localStorage.getItem("datosSesion");
    if (datosLocal) {
      let datos = JSON.parse(datosLocal);
      return datos.token;
    }
    return '';
  }
}
