import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregaProductoPage } from './agrega-producto.page';

const routes: Routes = [
  {
    path: '',
    component: AgregaProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregaProductoPageRoutingModule {}
