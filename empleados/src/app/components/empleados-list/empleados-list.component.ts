import { Component } from '@angular/core';
import { Empleado } from '../../interfaces/empleados.interface';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrl: './empleados-list.component.css'
})
export class EmpleadosListComponent {

  public empleados:Empleado[] = [
    {id:1, nombre: 'Juan', apellido: 'Perez', genero: 'Masculino', salario:500},
    {id:2, nombre: 'Marcos', apellido: 'Gonzales', genero: 'Masculino', salario:600},
    {id:3, nombre: 'Marta', apellido: 'Garcia', genero: 'Femenino', salario:700},
    {id:4, nombre: 'Ignacio', apellido: 'Cortes', genero: 'Masculino', salario:800},
    {id:5, nombre: 'Maria', apellido: 'Navarro', genero: 'Femenino', salario:900},
    {id:6, nombre: 'Joaquin', apellido: 'Marquez', genero: 'Masculino', salario:1000}
  ]


 get obtenerTotal():number{
    return this.empleados.length;
  }

  get obtenerMasculinos():number{
    return this.empleados.filter(empleado => empleado.genero === 'Masculino').length;
  }

 get  obtenerFemeninos():number{
    return this.empleados.filter(empleados => empleados.genero === 'Femenino').length;
  }

}
