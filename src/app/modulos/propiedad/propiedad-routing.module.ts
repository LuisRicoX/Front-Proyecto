import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarApartamentoComponent } from './buscar-apartamento/buscar-apartamento.component';
import { CrearApartamentoComponent } from './crear-apartamento/crear-apartamento.component';
import { EditarApartamentoComponent } from './editar-apartamento/editar-apartamento.component';

const routes: Routes = [
  {
    path: "crear-apartamento",
    component: CrearApartamentoComponent
  },
  {
    path:"editar-apartamento",
    component: EditarApartamentoComponent
  },
  {
    path:"buscar-apartamento",
    component: BuscarApartamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropiedadRoutingModule { }
