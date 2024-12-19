import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Listado de Empleados';

  empleados:Empleado[]=[

    new Empleado("Fermin", "Robledo", "Desarrollador Backend", 1200),
    new Empleado("Lautaro", "Andres", "Deesarollador Frontend", 1000),
    new Empleado("Juan", "Wagner", "Tester", 700)

  ];

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  nuevoEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }
}
