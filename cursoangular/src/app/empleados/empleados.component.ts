import { Component, OnInit } from '@angular/core';
import { EmpleadoComponent } from '../empleado/empleado.component';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  imports: [EmpleadoComponent],
  standalone: true,
})
export class EmpleadosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
