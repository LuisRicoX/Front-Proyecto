import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApartamentoModelo } from 'src/app/modelos/apartamento.modelo';
import { PersonaModelo } from 'src/app/modelos/persona.modelo';
import { ApartamentoService } from 'src/app/servicios/apartamento.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-crear-apartamento',
  templateUrl: './crear-apartamento.component.html',
  styleUrls: ['./crear-apartamento.component.css']
})
export class CrearApartamentoComponent implements OnInit {
  listadoPersonas: PersonaModelo[]= [];
  formApartamento: FormGroup = this.formBuilder.group({
    'area': ['', [Validators.required]],
    'propietario': ['', [Validators.required]],
    'habitante': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private apartamentoService: ApartamentoService,
    private route: Router 
  ) { 
    this.getPersonas();
  }

  getPersonas(){
    this.personaService.obtenerPersonas()
    .subscribe ({
      next:(personas)=>{
        this.listadoPersonas=personas
      },
      error:(error)=>{
        console.log("error al consultar la lista de personas");
      }
    });   

  }
  guardarApartamentos(){
    let apartamento: ApartamentoModelo={
      area:this.formApartamento.controls['area'].value,
      propietario:this.formApartamento.controls['propietario'].value,
      habitante:this.formApartamento.controls['habitante'].value,
      direccion:this.formApartamento.controls['direccion'].value,
    }
    this.apartamentoService.crearApartamento(apartamento)
    .subscribe({
      next:(apartamento)=>{
        this.route.navigate(['/propiedad/buscar-apartamento']);
      },
      error: (error)=>{
        console.log("Error al guardar el apartamento");
      }
    });
  }
  ngOnInit(): void {
  }

}


