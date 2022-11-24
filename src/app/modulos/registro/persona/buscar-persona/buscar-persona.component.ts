import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicios/persona.service';
import { PersonaModelo } from 'src/app/modelos/persona.modelo';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit {

  listadoPersonas: PersonaModelo[]=[]
  constructor(
    private personaService: PersonaService
  ) { 
    this.getListadoPersonas();
  }

  ngOnInit(): void {
  }
  
  getListadoPersonas(){
    return this.personaService.obtenerPersonas()
    .subscribe((personas: PersonaModelo[])=>{
      this.listadoPersonas = personas;
      console.log("Total de personas"+this.listadoPersonas.length);
    }, (error)=> {
      console.log("Se genero un error al consultar el listado de personas");
    })
  }


}
