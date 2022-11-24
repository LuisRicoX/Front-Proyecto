import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoJS =require('crypto-js');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup =this.formBuilder.group({
   'usuario': ['', [Validators.required]],
   'clave': ['', [Validators.required]]
  });
  
  constructor(
    private formBuilder: FormBuilder,
    private seguridadService: SeguridadService
    
    ) { }

  ngOnInit(): void {
  }
  login(){
    let usuario = this.formLogin.controls["usuario"].value;
    let clave = this.formLogin.controls["clave"].value;
    clave = cryptoJS.MD5(clave).toString();
    this.seguridadService.validarUsuario(usuario, clave)
    .subscribe((datos)=>{
      this.seguridadService.almacenarSesion(datos);

    },(error)=>{

      alert("Error al validar las credenciales:"+ error);
    });
  }

}
