import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  providers: [],
  styleUrl: './app.component.css'
})

export class AppComponent{
  title = 'Listado de Empleados';
}
