import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ListaEmpleadosService } from '../lista-empleados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proyectos',
  imports: [FormsModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})

export class ProyectosComponent {
  

  volverHome() {
    this.router.navigate([''])
  }

  empleados:Empleado[] = [];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  constructor(private servicioListaEmpleados:ListaEmpleadosService, private router:Router){}

  nuevoEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.servicioListaEmpleados.agregarEmpleado(miEmpleado);
    this.volverHome();
  }

}
