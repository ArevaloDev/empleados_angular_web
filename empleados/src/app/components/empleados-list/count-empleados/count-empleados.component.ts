import { Component, Input } from '@angular/core';
import { Empleado } from '../../../interfaces/empleados.interface';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrl: './count-empleados.component.css',
})
export class CountEmpleadosComponent {
  @Input() filtrarGenero: any;
  @Input() obtenerTotal: number = 0;
  @Input() obtenerMasculinos: number = 0;
  @Input() obtenerFemeninos: number = 0;
  @Input() radioButtonSeleccionado: string = '';
}
