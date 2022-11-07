import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaProductoPageRoutingModule } from './modifica-producto-routing.module';

import { ModificaProductoPage } from './modifica-producto.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ModificaProductoPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ModificaProductoPage],
  providers : [ProductoServiceService]
})
export class ModificaProductoPageModule {}
