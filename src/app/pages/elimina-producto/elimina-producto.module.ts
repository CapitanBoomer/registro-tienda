import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { EliminaProductoPageRoutingModule } from './elimina-producto-routing.module';

import { EliminaProductoPage } from './elimina-producto.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    EliminaProductoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [EliminaProductoPage],
  providers : [ProductoServiceService]
})
export class EliminaProductoPageModule {}
