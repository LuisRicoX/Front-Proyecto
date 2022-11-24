import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path: "seguridad",
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(m => m.SeguridadModule) 
  },
  {
    path: "registro",
    loadChildren: () => import("./modulos/registro/registro.module").then(m => m.RegistroModule) 
  },
  {
    path: "propiedad",
    loadChildren: () => import("./modulos/propiedad/propiedad.module").then(m => m.PropiedadModule) 
  },      
  {
    path: "**",
    component: ErrorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
