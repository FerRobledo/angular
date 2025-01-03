import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";


@Injectable({
  providedIn: 'root', // Hace que el servicio esté disponible en toda la aplicación
})

export class DataServices{
    
    constructor(private httpClient:HttpClient){}

    guardarEmpleados(empleados:Empleado[]){
        
        this.httpClient.post(`https://clientes-77489-default-rtdb.firebaseio.com/datos.json`, empleados).subscribe(
            
            response => { console.log(response); });;
    }

    obtenerEmpleados(){
        return this.httpClient.get("https://clientes-77489-default-rtdb.firebaseio.com/datos.json");
    }

    actualizarEmpleado(indice:number, empleado:Empleado){
        let url = `https://clientes-77489-default-rtdb.firebaseio.com/datos/${indice}.json`;

        this.httpClient.put(url, empleado).subscribe(
            
            response => { console.log(response); });;
    }
}