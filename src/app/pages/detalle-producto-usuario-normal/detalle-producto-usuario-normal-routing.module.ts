import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleProductoUsuarioNormalPage } from './detalle-producto-usuario-normal.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleProductoUsuarioNormalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleProductoUsuarioNormalPageRoutingModule {}
