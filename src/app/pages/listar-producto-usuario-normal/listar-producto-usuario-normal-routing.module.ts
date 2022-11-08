import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarProductoUsuarioNormalPage } from './listar-producto-usuario-normal.page';

const routes: Routes = [
  {
    path: '',
    component: ListarProductoUsuarioNormalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarProductoUsuarioNormalPageRoutingModule {}
