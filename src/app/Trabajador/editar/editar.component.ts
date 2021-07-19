import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioTrabajadorService } from 'src/app/ServicioTrabajador/servicio-trabajador.service';
import { Trabajador } from 'src/app/modelo/Trabajador';
import { FormBuilder } from '@Angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  

 
  constructor(private route: Router, private service: ServicioTrabajadorService, private formBuilder: FormBuilder) { }

  formGroup = this.formBuilder.group({
    nombre: ['']
  })


  ngOnInit(): void {

  }

 
  trabajador: Trabajador = new Trabajador();

  actualizar(){
    
    let id =localStorage.getItem("id");
    this.service.getTrabajadoresid(+id).subscribe(data => {
      this.trabajador = data;
    }
    );
    
    this.trabajador.nombre = this.formGroup.get('nombre').value;
    console.log( this.trabajador.nombre);
    this.service.editarTrabajador(+id,this.trabajador).subscribe();
  }
}
