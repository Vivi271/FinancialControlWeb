import { Component } from '@angular/core';
import { CostosService } from '../../services/costos.service';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrl: './costos.component.css'
})
export class CostosComponent {
  costosList: any = [];

  constructor(private costosService: CostosService) { }
  
  ngOnInit() {
    this.getAllCostos();
  }


  getAllCostos() {
    this.costosService.getAllCostosData().subscribe((data: {}) => {
      this.costosList = data;
    });
  }


}
