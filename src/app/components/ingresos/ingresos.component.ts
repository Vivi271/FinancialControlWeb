import { Component } from '@angular/core';
import { IngresosService } from '../../services/ingresos.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {
  ingresosList: any = [];
  constructor(private ingresosService: IngresosService) { }

  ngOnInit() {
    this.getAllIngresos();
  }

  getAllIngresos() {
    this.ingresosService.getAllIngresosData().subscribe((data: {}) => {
      this.ingresosList = data;
    });
  }


}
