import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import { ProductoConId } from 'src/app/interfaces/producto';
import{ProductoServiceService} from './../../services/producto-service.service'

@Component({
  selector: 'app-elimina-producto',
  templateUrl: './elimina-producto.page.html',
  styleUrls: ['./elimina-producto.page.scss'],
})
export class EliminaProductoPage implements OnInit {

  public idActiva = '';
  public productoActivo : ProductoConId;

  constructor(
    private rutaActiva: ActivatedRoute,
    private router : Router,
    private apiProducto : ProductoServiceService
  ) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(parametros =>{
      this.idActiva = parametros.idProducto;
      this.apiProducto.buscarPorId(+ this.idActiva).subscribe(producto =>{
        if(producto){
          this.productoActivo = producto;
        }else {
          this.router.navigate(['/listar-producto']);
        }
      })
    })
  }

  public borrar(){
    this.apiProducto.eliminaPorId(+this.idActiva).subscribe(dato =>{
      if(dato){

        this.router.navigate(['/listar-producto']);
      }
    })
  }
}
