import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  imports: [],
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrl: './caracteristicas-empleado.component.css'
})
export class CaracteristicasEmpleadoComponent {

  constructor(private servicio:ServicioEmpleadosService){}

  @Output() caracteristicasEmpleado = new EventEmitter<string>;

  agregaCaracteristicas(value:string){
    this.servicio.muestraMensaje("Caracteristica agregada: " + value);
    this.caracteristicasEmpleado.emit(value);
  }

}
