import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';
import { CaracteristicasEmpleadoComponent } from "../caracteristicas-empleado/caracteristicas-empleado.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado-hijo-c',
  imports: [CaracteristicasEmpleadoComponent, CommonModule],
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})

export class EmpleadoHijoCComponent {

  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  caracteristicas:string[] = [];

  agregarCaracteristica(item:string){
    this.caracteristicas.push(item);
  }
}
