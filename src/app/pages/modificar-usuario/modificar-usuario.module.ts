import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarUsuarioPageRoutingModule } from './modificar-usuario-routing.module';

import { ModificarUsuarioPage } from './modificar-usuario.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ModificarUsuarioPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ModificarUsuarioPage],
  providers : [ProductoServiceService]
})
export class ModificarUsuarioPageModule {}
