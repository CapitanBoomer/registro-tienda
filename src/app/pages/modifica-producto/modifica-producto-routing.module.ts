import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaProductoPage } from './modifica-producto.page';

const routes: Routes = [
  {
    path: '',
    component: ModificaProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificaProductoPageRoutingModule {}
