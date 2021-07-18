import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Trabajador } from '../modelo/Trabajador';

@Injectable({
  providedIn: 'root'
})
export class ServicioTrabajadorService {


constructor(private http: HttpClient ) { }

 Url="http://localhost:55916/test/trabajadores";

  getTrabajadores(){
    return this.http.get<Trabajador[]>(this.Url+"/listar");
  }

  editarTrabajador(id:number, trabajador :Trabajador){
    return this.http.put<Trabajador>(this.Url+"/"+id,trabajador);
  }

  agregarTrabajador(trabajador:Trabajador){
    return this.http.post<Trabajador>(this.Url,trabajador);
  }
}
