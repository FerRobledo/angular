import { Component, OnInit } from '@angular/core';
import { EmpleadoHijoCComponent } from "../empleado-hijo-c/empleado-hijo-c.component";
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleado.model';
import { ListaEmpleadosService } from '../lista-empleados.service';
import { FormsModule } from '@angular/forms';
import { ProyectosComponent } from "../proyectos/proyectos.component";

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, EmpleadoHijoCComponent, ProyectosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  
  constructor(private servicioListaEmpleados:ListaEmpleadosService){}
  
  empleados:Empleado[] = [];


  ngOnInit(): void {
    this.servicioListaEmpleados.getEmpleados().subscribe(misEmpleados=>{
      this.empleados = Object.values(misEmpleados);
      console.log("ngOnInit HomeComponent")
      console.log(this.empleados);
        this.servicioListaEmpleados.setEmpleados(this.empleados);
      }); 
  }

}
