import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoServiceService } from './../../services/producto-service.service'
import { UsuarioConID } from './../../interfaces/usuarios'
import {IonInfiniteScroll} from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage implements OnInit {
  public listarUsuarios : Array<UsuarioConID> = [];

  @ViewChild(IonInfiniteScroll)
  public infinito : IonInfiniteScroll;

  constructor(
    private apiUsuarios : ProductoServiceService,
    private router : Router

  ) { }

  ngOnInit() {
    this.apiUsuarios.listarUsers$.subscribe(datos =>{
      this.listarUsuarios = datos;
      if(this.infinito){
        this.infinito.complete();
      }
    });
    this.apiUsuarios.listaPrimerosUser();
  }

  ionViewWillEnter(): void{
    this.apiUsuarios.listaPrimerosUser();
  }

  public hacerAdmin(event:Event): void{



  }

  ionViewDidEnter(): void{

  }

  public cargarMasProds(){
    this.apiUsuarios.mostrarMasUsers();
  }

}
