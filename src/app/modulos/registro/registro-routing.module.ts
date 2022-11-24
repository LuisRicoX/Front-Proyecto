import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './persona/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './persona/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';

const routes: Routes = [
  {
    path:"crear-persona",
    component: CrearPersonaComponent
  },
  {
    path:"buscar-persona",
    component: BuscarPersonaComponent
  },
  {
    path:"editar-persona/:id",
    component: EditarPersonaComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
