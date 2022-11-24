import { Component, OnInit } from '@angular/core';
import { ApartamentoModelo } from 'src/app/modelos/apartamento.modelo';
import { LoginModelo } from 'src/app/modelos/login.modelos';
import { ApartamentoService } from 'src/app/servicios/apartamento.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-buscar-apartamento',
  templateUrl: './buscar-apartamento.component.html',
  styleUrls: ['./buscar-apartamento.component.css']
})
export class BuscarApartamentoComponent implements OnInit {
  listadoApartamento: ApartamentoModelo[] = [];
  enSesion: boolean = false;
  constructor(
    private apartamentoService: ApartamentoService,
    private seguridadService: SeguridadService
  ) { 
    this.getApartamentos();
    this.getSesion(); 
  }

  ngOnInit(): void {
  }
  getSesion(){
    this.seguridadService.obtenerDatosUsuarioEnSesion()
    .subscribe((datos: LoginModelo) => {
      this.enSesion = datos.enSesion!=null? datos.enSesion: false;
    });
  }

  getApartamentos(){
    this.apartamentoService.getApartamentos()
    .subscribe((apartamentos)=>{
      this.listadoApartamento = apartamentos;
    });
  }
}
