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

  trabajadores: Trabajador[];
  constructor(private service: ServicioTrabajadorService, private router: Router) { }

  ngOnInit(): void {
    this.service.getTrabajadores().subscribe(data => {
      this.trabajadores = data;
      console.log(this.trabajadores);
    }
    );
  }
  clickEliminarActualizar(trabajador: Trabajador, accion: string): void {
    if (accion === 'A') {
      this.actualizar(trabajador.id)
    } else {
      this.eliminar(trabajador.id)
    }
  }

  private actualizar(idTrabajador: number): void {
    localStorage.setItem("id",idTrabajador.toString());
    this.router.navigate(["editar"]);
  }

  private eliminar(idTrabajador: number): void {
    this.service.eliminarTrabajador(idTrabajador).subscribe(data => {
      console.log(data);
      this.router.navigate(["listar"]);
    })
  }
}
