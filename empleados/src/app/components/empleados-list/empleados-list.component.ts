import { Component, Input, input, OnInit, Output } from '@angular/core';
import { Empleado } from '../../interfaces/empleados.interface';
import { EmpleadosService } from '../../services/empleados.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrl: './empleados-list.component.css'
})
export class EmpleadosListComponent implements OnInit {

  public empleados:Empleado[] = [];
  public radioButtonSeleccionado:string = 'Todos';

  constructor(private empleadoService:EmpleadosService){}

  ngOnInit(): void {
    this.empleados = this.empleadoService.ObtenerEmpleados;
  }


  public filtrarGenero = (genero:string):void => {
    this.empleados = this.empleadoService.filtrarGenero(genero);
  }


 get obtenerTotal():number{
   return this.empleadoService.obtenerTotal();
  }

  get obtenerMasculinos():number{
    return this.empleadoService.obtenerMasculinos();
  }

 get  obtenerFemeninos():number{
    return this.empleadoService.obtenerFemeninos();
  }

}
