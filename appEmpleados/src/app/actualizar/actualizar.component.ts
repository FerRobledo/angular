import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaEmpleadosService } from '../lista-empleados.service';
import { CommonModule } from '@angular/common';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualizar',
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent implements OnInit{

  constructor(private router:Router, private servicioMensaje:ServicioEmpleadosService, private route:ActivatedRoute, private servicioEmpleados:ListaEmpleadosService ){}

  empleado:Empleado = null;
  accion:number;

  ngOnInit(): void {
    this.indice=this.route.snapshot.params['id'];
    this.empleado = this.servicioEmpleados.encontrarEmpleado(this.indice);

    this.cuadroNombre = this.empleado.nombre;
    this.cuadroApellido = this.empleado.apellido;
    this.cuadroCargo = this.empleado.cargo;
    this.cuadroSalario = this.empleado.salario;

    this.accion=this.route.snapshot.queryParams['accion'];
  }
  
  volverHome(){
    this.router.navigate(['']);
  }

  indice:number;
  cuadroNombre = '';
  cuadroApellido = '';
  cuadroCargo = '';
  cuadroSalario = 0;

  actualizaEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.servicioEmpleados.actualizarEmpleado(this.indice, miEmpleado);
    this.servicioMensaje.muestraMensaje("Empleado modificado!");
    this.volverHome();
  }

  eliminarEmpleado(){
    this.servicioEmpleados.eliminarEmpleado(this.indice);
    this.servicioMensaje.muestraMensaje("Empleado eliminado.");
    this.volverHome();
  }

}
