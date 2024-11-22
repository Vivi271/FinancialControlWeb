import { Component } from '@angular/core';
import { CostosService } from '../../services/costos.service';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrl: './costos.component.css'
})
export class CostosComponent {
    constructor(private cosotosService: CostosService){}

}
