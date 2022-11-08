import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarProductoUsuarioNormalPageRoutingModule } from './listar-producto-usuario-normal-routing.module';

import { ListarProductoUsuarioNormalPage } from './listar-producto-usuario-normal.page';
import { ProductoServiceService } from 'src/app/services/producto-service.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarProductoUsuarioNormalPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListarProductoUsuarioNormalPage],
  providers: [ProductoServiceService]
})
export class ListarProductoUsuarioNormalPageModule { }
