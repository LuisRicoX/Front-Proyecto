import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaModelo } from 'src/app/modelos/persona.modelo';
import { PersonaService } from 'src/app/servicios/persona.service';
const cryptoJS = require('crypto-js');

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  id: string = '';

  formPersona: FormGroup = this.formBuilder.group({
    'id': ['',[Validators.required]],
    'nombreCompleto':['',[Validators.required]],
    'documento':['',[Validators.required]],
    'correo':['',[Validators.required]],
    'celular':['',[Validators.required]],
    'clave':['',[Validators.required]]
  })
  constructor(
    private formBuilder: FormBuilder,
    private personaServices: PersonaService,
    private router: Router,
    private route:ActivatedRoute
  ) {
    this.id = this.route.snapshot.params[`id`];
    this.getPersona();
   }

  ngOnInit(): void {
    
  }
  getPersona(){
    this.personaServices.getPersonaXId(this.id)
    .subscribe((persona:PersonaModelo)=>{
      this.formPersona.controls['id'].setValue(persona.id);
      this.formPersona.controls['nombreCompleto'].setValue(persona.nombreCompleto);
      this.formPersona.controls['documento'].setValue(persona.documento);
      this.formPersona.controls['correo'].setValue(persona.correo);
      this.formPersona.controls['celular'].setValue(persona.celular);
      this.formPersona.controls['clave'].setValue(persona.clave);
    })

  }
  guardarPersona(){
    let nombreCompleto = this.formPersona.controls['nombreCompleto'].value;    
    let documento = this.formPersona.controls['documento'].value;    
    let correo = this.formPersona.controls['correo'].value;
    let celular = this.formPersona.controls['celular'].value;    
    let clave = this.formPersona.controls['clave'].value;
    let pers: PersonaModelo={
      id: this.id,
      nombreCompleto:nombreCompleto,
      documento:documento,
      correo:correo,
      celular:celular,
      clave:cryptoJS.MD5(clave).toString()     
    }
    this.personaServices.actualizarPersona(pers)
    .subscribe((datos)=>{
      this.router.navigate(['/registro/buscar-persona']);

    }, (error)=>{
      console.log("se genero un error al guardar el propietario");
    });
  }

}
