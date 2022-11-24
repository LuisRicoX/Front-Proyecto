import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginModelo } from 'src/app/modelos/login.modelos';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  seInicioSesion: boolean = false;
  subs: Subscription = new Subscription();

  constructor(
    private seguridadService: SeguridadService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.subs = this.seguridadService.obtenerDatosUsuarioEnSesion()
    .subscribe((datos: LoginModelo)=>{
      this.seInicioSesion=datos.enSesion;
      this.route.navigate(['/propiedad/crear-apartamento']);
    });
  }
  cerrarSesion(){
    this.seguridadService.eliminarSesion();
    this.seInicioSesion=false;
    this.route.navigate(['/inicio']);
  }

}
