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
export class AgregarComponent {


  constructor(private route: Router, private service: ServicioTrabajadorService, private formBuilder: FormBuilder) { }

  formGroup = this.formBuilder.group({
    nombre: ['']
  })

  AgregarTrabajador() {
    const trabajador: Trabajador = new Trabajador();
    trabajador.nombre = this.formGroup.get('nombre').value;

    this.service.agregarTrabajador(trabajador).subscribe(data => {
      console.log(data);
      this.route.navigate(["listar"]);
    })
  }

}

