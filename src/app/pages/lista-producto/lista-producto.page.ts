import { Component, OnInit, ViewChild} from '@angular/core';
import { ProductoConId } from 'src/app/interfaces/producto';
import { ProductoServiceService } from 'src/app/services/producto-service.service';
import {IonInfiniteScroll} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-producto.page.html',
  styleUrls: ['./lista-producto.page.scss'],
})
export class ListaProductoPage implements OnInit {
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

  }

  public cargarMasProds(){
    this.apiProductos.mostrarMasProds();
  }

}
