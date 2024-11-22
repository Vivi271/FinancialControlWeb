import { Component } from '@angular/core';
import { IngresosService } from '../../services/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {
  constructor(private ingresosService: IngresosService){}

}
