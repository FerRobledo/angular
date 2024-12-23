import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})

export class ListaEmpleadosService {

  constructor(private mensajeServicio:ServicioEmpleadosService) { }

  empleados:Empleado[]=[
  
      new Empleado("Fermin", "Robledo", "Desarrollador Backend", 1200),
      new Empleado("Lautaro", "Andres", "Desarollador Frontend", 1000),
      new Empleado("Juan", "Wagner", "Tester", 700)
  
  ];

  agregarEmpleado(empleado:Empleado){
    this.mensajeServicio.muestraMensaje("Se agrego: " + empleado.nombre + " " + empleado.apellido);
    this.empleados.push(empleado);
  }

  encontrarEmpleado(indice:number): Empleado{
    return this.empleados[indice];
  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let emp = new Empleado(empleado.nombre, empleado.apellido, empleado.cargo, empleado.salario);
    this.empleados[indice] = emp;
  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice, 1);
  }
}
