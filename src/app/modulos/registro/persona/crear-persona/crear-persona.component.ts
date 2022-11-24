import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaModelo } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  formPersona: FormGroup = this.formBuilder.group({
    'nombreCompleto':['',[Validators.required]],
    'documento':['',[Validators.required]],
    'correo':['',[Validators.required]],
    'celular':['',[Validators.required]],
    'clave':['',[Validators.required]]
  })
  constructor(
    private formBuilder: FormBuilder,
    private personaServices: PersonaService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  guardarPersona(){
    let nombreCompleto = this.formPersona.controls['nombreCompleto'].value;    
    let documento = this.formPersona.controls['documento'].value;    
    let correo = this.formPersona.controls['correo'].value;
    let celular = this.formPersona.controls['celular'].value;    
    let clave = this.formPersona.controls['clave'].value;
    let pers: PersonaModelo={
      nombreCompleto:nombreCompleto,
      documento:documento,
      correo:correo,
      celular:celular,
      clave:cryptoJS.MD5(clave).toString()     
    }
    this.personaServices.crearPersona(pers)
    .subscribe((datos)=>{
      this.route.navigate(['/registro/buscar-persona']);

    }, (error)=>{
      console.log("se genero un error al guardar el propietario");
    });
  }
}
