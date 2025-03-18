import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleados.interface';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  public empleadosCopia: Empleado[] = [];
  private empleados: Empleado[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Perez',
      genero: 'Masculino',
      salario: 500,
    },
    {
      id: 2,
      nombre: 'Marcos',
      apellido: 'Gonzales',
      genero: 'Masculino',
      salario: 600,
    },
    {
      id: 3,
      nombre: 'Marta',
      apellido: 'Garcia',
      genero: 'Femenino',
      salario: 700,
    },
    {
      id: 4,
      nombre: 'Ignacio',
      apellido: 'Cortes',
      genero: 'Masculino',
      salario: 800,
    },
    {
      id: 5,
      nombre: 'Maria',
      apellido: 'Navarro',
      genero: 'Femenino',
      salario: 900,
    },
    {
      id: 6,
      nombre: 'Joaquin',
      apellido: 'Marquez',
      genero: 'Masculino',
      salario: 1000,
    },
  ];
  constructor() {}

  get ObtenerEmpleados(): Empleado[] {
    return [...this.empleados];
  }

  public filtrarGenero = (genero: string): Empleado[] => {
    return (this.empleadosCopia =
      genero === 'Todos'
        ? [...this.empleados]
        : this.empleados.filter((empleado) => empleado.genero === genero));
  };

  obtenerTotal(): number {
    return this.empleados.length;
  }
  obtenerMasculinos(): number {
    return this.empleados.filter((empleado) => empleado.genero === 'Masculino')
      .length;
  }
  obtenerFemeninos(): number {
    return this.empleados.filter((empleados) => empleados.genero === 'Femenino')
      .length;
  }
}
