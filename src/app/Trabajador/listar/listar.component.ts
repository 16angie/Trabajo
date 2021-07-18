import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajador } from 'src/app/modelo/Trabajador';
import { ServicioTrabajadorService } from 'src/app/ServicioTrabajador/servicio-trabajador.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  trabajadores:Trabajador[];
  constructor(private service :ServicioTrabajadorService,private router:Router) { }

  ngOnInit(): void {
    this.service.getTrabajadores().subscribe(data=>
        {this.trabajadores=data;
        console.log(this.trabajadores);}
     );
  }

}
