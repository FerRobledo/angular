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

  mensaje:String = "";

  nombre:String = "";
  apellido:String = "";
  cargo:String = "";

  registrado:Boolean = false;
  
  titulos:{titulo:String}[];

  constructor(){

    this.titulos=[
      {titulo: "Titulo1"},
      {titulo: "Titulo2"},
      {titulo: "Titulo3"}
    ];

  }

  registrarUsuario(){

    this.registrado = true;

    this.mensaje = "Usuario registrado con éxito!";
  }

}
