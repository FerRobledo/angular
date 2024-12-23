import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { Error404Component } from './error-404/error-404.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'proyectos', component: ProyectosComponent},
    {path:'quienes-somos', component: QuienesSomosComponent},
    {path:'actualizar/:id', component: ActualizarComponent},
    {path:'**', component: Error404Component}
];
