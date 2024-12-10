import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  imports: [ CommonModule , FormsModule],
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent{

  mensaje = "";

  nombre = "";
  apellido = "";

  registrado = false;
  

  registrarUsuario(){

    this.registrado = true;

    this.mensaje = "Usuario registrado con éxito: " + this.nombre + " " + this.apellido
  }

}
