import { Component, OnInit, ViewChild} from '@angular/core';
import { ProductoConId } from 'src/app/interfaces/producto';
import { ProductoServiceService } from 'src/app/services/producto-service.service';
import {IonInfiniteScroll} from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-producto-usuario-normal',
  templateUrl: './listar-producto-usuario-normal.page.html',
  styleUrls: ['./listar-producto-usuario-normal.page.scss'],
})
export class ListarProductoUsuarioNormalPage implements OnInit {
  public listaProductos : Array<ProductoConId> = [];

  @ViewChild(IonInfiniteScroll)
  public infinito : IonInfiniteScroll;

  constructor(
    private apiProductos : ProductoServiceService,
    private router : Router
  ) { }

  ngOnInit() {
    this.apiProductos.listarProductos$.subscribe(datos =>{
      this.listaProductos = datos;
      if(this.infinito){
        this.infinito.complete();
      }
    });
    this.apiProductos.listaPrimerosProds();
  }

  ionViewWillEnter(): void{
    this.apiProductos.listaPrimerosProds();
  }

  ionViewDidEnter(): void{
    console.log('Entró a la pagina')
  }

  public cargarMasProds(){
    this.apiProductos.mostrarMasProds();
  }

}
