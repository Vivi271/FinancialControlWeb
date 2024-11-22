import { Component } from '@angular/core';
import { GastosService } from '../../services/gastos.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {

  gastosList: any = [];

  constructor(private gastosService: GastosService){}

  ngOnInit() {
    this.getAllGastos();
  }


  getAllGastos() {
    this.gastosService.getAllGastosData().subscribe((data: {}) => {
      this.gastosList = data;
    });
  }


}
