import { Component, OnInit } from '@angular/core';
import { TipoTrabajo } from 'src/app/modelo/TipoTrabajador';
import { Router } from '@angular/router';
import { ServicioTrabajadorService } from 'src/app/ServicioTrabajador/servicio-trabajador.service';
import { Trabajador } from 'src/app/modelo/Trabajador';
import { FormBuilder } from '@Angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  
  constructor(private route:Router,private service: ServicioTrabajadorService,private formBuilder:FormBuilder) { }

  trabajador:Trabajador= new Trabajador();
  formGroup = this.formBuilder.group({
    nombre:['']
  })

  ngOnInit(): void {
    this.trabajador.id=20;
    this.trabajador.nombre = 'maeia';
  }
  

  AgregarTrabajador(){
      this.service.agregarTrabajador(this.trabajador).subscribe(data=>{
        console.log(data);
        this.route.navigate(["listar"]);
      })
  }

}

