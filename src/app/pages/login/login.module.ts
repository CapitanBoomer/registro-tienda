import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import {ProductoServiceService} from './../../services/producto-service.service';
import {HttpClientModule} from '@angular/common/http'


import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HttpClientModule
  ],
  declarations: [LoginPage],
  providers: [ProductoServiceService]
})
export class LoginPageModule {}
