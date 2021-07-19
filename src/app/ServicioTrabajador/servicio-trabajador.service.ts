import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trabajador } from '../modelo/Trabajador';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioTrabajadorService {


  constructor(private http: HttpClient) { }

  url: string = "/test/trabajadores";
  private TRABAJADORES_LISTAR = `${environment.api}/trabajadores/listar`;
  private TRABAJADORES_AGREGAR = `${environment.api}/trabajadores`;
  private TRABAJADORES_ELIMINAR = `${environment.api}/trabajadores/`;
  private TRABAJADORES_EDITAR = `${environment.api}/trabajadores/`;


  getTrabajadores() {
    return this.http.get<Trabajador[]>(this.TRABAJADORES_LISTAR);
  }

  getTrabajadoresid(id:number) {
    return this.http.get<Trabajador>(this.TRABAJADORES_EDITAR+id);
  }

  editarTrabajador(id: number, trabajador: Trabajador) {
    return this.http.put<Trabajador>(this.TRABAJADORES_EDITAR+id, trabajador);
  }

  agregarTrabajador(trabajador: Trabajador) {
    return this.http.post<Trabajador>(this.TRABAJADORES_AGREGAR, trabajador);
  }

  eliminarTrabajador(id_t:number){
    return this.http.delete<Trabajador>(this.TRABAJADORES_ELIMINAR+id_t);
  }
}
