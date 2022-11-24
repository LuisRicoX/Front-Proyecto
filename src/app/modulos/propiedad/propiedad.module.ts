import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropiedadRoutingModule } from './propiedad-routing.module';
import { CrearApartamentoComponent } from './crear-apartamento/crear-apartamento.component';
import { BuscarApartamentoComponent } from './buscar-apartamento/buscar-apartamento.component';
import { EditarApartamentoComponent } from './editar-apartamento/editar-apartamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearApartamentoComponent,
    BuscarApartamentoComponent,
    EditarApartamentoComponent
  ],
  imports: [
    CommonModule,
    PropiedadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PropiedadModule { }
