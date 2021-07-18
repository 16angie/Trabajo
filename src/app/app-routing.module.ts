import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './Trabajador/agregar/agregar.component';
import { EditarComponent } from './Trabajador/editar/editar.component';
import { EliminarComponent } from './Trabajador/eliminar/eliminar.component';
import { ListarComponent } from './Trabajador/listar/listar.component';

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'agregar',component:AgregarComponent},
  {path:'eliminar',component:EliminarComponent},
  {path:'editar',component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
