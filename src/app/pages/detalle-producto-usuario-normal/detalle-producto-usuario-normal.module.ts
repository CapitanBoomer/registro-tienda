import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProductoUsuarioNormalPageRoutingModule } from './detalle-producto-usuario-normal-routing.module';

import { DetalleProductoUsuarioNormalPage } from './detalle-producto-usuario-normal.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProductoUsuarioNormalPageRoutingModule,
    HttpClientModule
  ],
  declarations: [DetalleProductoUsuarioNormalPage],
  providers : [ProductoServiceService]
})
export class DetalleProductoUsuarioNormalPageModule {}
