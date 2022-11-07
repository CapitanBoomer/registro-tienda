import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProductoPageRoutingModule } from './lista-producto-routing.module';

import { ListaProductoPage } from './lista-producto.page';
import { ProductoServiceService } from 'src/app/services/producto-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProductoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListaProductoPage],
  providers : [ProductoServiceService]
})
export class ListaProductosPageModule {}
