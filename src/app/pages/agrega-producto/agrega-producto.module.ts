import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregaProductoPageRoutingModule } from './agrega-producto-routing.module';

import { AgregaProductoPage } from './agrega-producto.page';
import { ProductoServiceService } from 'src/app/services/producto-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AgregaProductoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AgregaProductoPage],
  providers :[ProductoServiceService]
})
export class AgregaProductoPageModule {}
