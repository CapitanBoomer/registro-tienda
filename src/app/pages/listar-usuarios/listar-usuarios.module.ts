import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarUsuariosPageRoutingModule } from './listar-usuarios-routing.module';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

import { ListarUsuariosPage } from './listar-usuarios.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarUsuariosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListarUsuariosPage],
  providers : [ProductoServiceService]

})
export class ListarUsuariosPageModule {}
