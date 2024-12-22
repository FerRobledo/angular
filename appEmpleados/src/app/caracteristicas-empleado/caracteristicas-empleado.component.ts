import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  imports: [],
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrl: './caracteristicas-empleado.component.css'
})
export class CaracteristicasEmpleadoComponent {

  @Output() caracteristicasEmpleado = new EventEmitter<string>;

  agregaCaracteristicas(value:string){
    this.caracteristicasEmpleado.emit(value);
  }

}
