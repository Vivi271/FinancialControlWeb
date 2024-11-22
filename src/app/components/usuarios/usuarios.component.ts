import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  usuariosList: any = [];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.getAllUsuarios();
  }


  getAllUsuarios() {
    this.usuariosService.getAllUsuariosData().subscribe((data: {}) => {
      this.usuariosList = data;
    });
  }


}
