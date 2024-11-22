import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CostosComponent } from './components/costos/costos.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import path from 'path';

const routes: Routes = [
  {path : 'costos', component:CostosComponent},
  {path : 'costos', component:GastosComponent},
  {path : 'costos', component:IngresosComponent},
  {path : 'costos', component:UsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
