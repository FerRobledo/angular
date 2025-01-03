import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class ListaEmpleadosService {

  constructor(private mensajeServicio:ServicioEmpleadosService,private dataService:DataServices) { }

  empleados:Empleado[]=[];

  agregarEmpleado(empleado:Empleado){
    this.mensajeServicio.muestraMensaje("Se agrego: " + empleado.nombre + " " + empleado.apellido);
    this.empleados.push(empleado);
    alert(this.empleados);
    this.dataService.guardarEmpleados(this.empleados);
  }
  
  setEmpleados(nuevosEmpleados:Empleado[]){
    this.empleados = nuevosEmpleados;
  }
  
  getEmpleados(){
    return this.dataService.obtenerEmpleados();
  }

  encontrarEmpleado(indice:number): Empleado{
    return this.empleados[indice];
  }

  actualizarEmpleado(indice:number, empleado:Empleado){
    let emp = new Empleado(empleado.nombre, empleado.apellido, empleado.cargo, empleado.salario);
    this.empleados[indice] = emp;
    this.dataService.actualizarEmpleado(indice, empleado);
    
  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice, 1);
  }
}
