import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductoConId } from 'src/app/interfaces/producto';
import{ProductoServiceService} from './../../services/producto-service.service';

@Component({
  selector: 'app-detalle-producto-usuario-normal',
  templateUrl: './detalle-producto-usuario-normal.page.html',
  styleUrls: ['./detalle-producto-usuario-normal.page.scss'],
})
export class DetalleProductoUsuarioNormalPage implements OnInit {
  public idActiva = '';
  public productoActivo : ProductoConId;

  constructor(
    private rutaActiva: ActivatedRoute,
    private router : Router,
    private apiProducto : ProductoServiceService) { }

  ngOnInit() {
    this.rutaActiva.params.subscribe(parametros =>{
    this.idActiva = parametros.idProducto;
    this.apiProducto.buscarPorId(+ this.idActiva).subscribe(producto =>{
      if(producto){
        this.productoActivo = producto;
      }else {
        this.router.navigate(['']);
      }
    })
  })
  }

}
