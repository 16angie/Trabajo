import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Trabajador/listar/listar.component';
import { AgregarComponent } from './Trabajador/agregar/agregar.component';
import { EditarComponent } from './Trabajador/editar/editar.component';
import { EliminarComponent } from './Trabajador/eliminar/eliminar.component';
import { HttpClient } from '@angular/common/http';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicioTrabajadorService } from './ServicioTrabajador/servicio-trabajador.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ServicioTrabajadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
