import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-empleado',
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  
  nombre = "Lucas";
  apellido = "Robledo";
  edad = 20;
  
  habilitado = true;
  
  usuRegistrado = true;
  
  habilitar(event:Event){
    
    if((<HTMLInputElement>event.target).value == "si"){
      this.habilitado = true;
    } else{
      this.habilitado = false;
    }
  }



}
