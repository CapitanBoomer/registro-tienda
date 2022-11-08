import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto, ProductoConId } from '../interfaces/producto'
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios';

@Injectable()

export class ProductoServiceService {

  private API_PRODUCTOS_URL = 'http://localhost:3000/productos'
  private API_usuario_URL = 'http://localhost:3000/usuarios'
  private comportamientoListar = new BehaviorSubject<Array<ProductoConId>>([]);
  public listarProductos$ = this.comportamientoListar.asObservable();
  private paginaActual = 0;
  private comportamientoListarUser = new BehaviorSubject<Array<any>>([]);
  public listarUsers$ = this.comportamientoListarUser.asObservable();

  constructor(
    private cliente : HttpClient
  ) { }

  public agregarProducto(nuevoProducto : Producto): Observable<any>{
    return this.cliente.post(this.API_PRODUCTOS_URL, nuevoProducto,{
      headers :{
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }

  public agregarUsuario(nuevoUsuario : Usuarios): Observable<any>{
    return this.cliente.post(this.API_usuario_URL, nuevoUsuario,{
      headers :{
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }

  public inicioSesion(){
    this.cliente.get<Array<Usuarios>>(`${this.API_usuario_URL}?_page=1&_limit=5`)
    .subscribe(datos => {this.comportamientoListarUser.next(datos)})
  }

  public listaPrimerosProds(){
    this.cliente.get<Array<ProductoConId>>(`${this.API_PRODUCTOS_URL}?_page=1&_limit=5`)
    .subscribe(datos => {
      this.paginaActual = this.paginaActual + 1;
      this.comportamientoListar.next(datos);
    })
  }

  public mostrarMasProds(){
    this.cliente.get<Array<ProductoConId>>(`${this.API_PRODUCTOS_URL}?_page=${this.paginaActual}&_limit=5`)
    .subscribe(datos => {
      if(datos){
        this.paginaActual = this.paginaActual + 1;
        this.comportamientoListar.next(this.comportamientoListar.getValue().concat(datos));
      }

    })
  }

  public buscarPorId(id :number): Observable<ProductoConId>{
    return this.cliente.get<ProductoConId | null>(`${this.API_PRODUCTOS_URL}/${id}`);
  }

  public eliminaPorId(id: number): Observable<any>{
    return this.cliente.delete(`${this.API_PRODUCTOS_URL}/${id}`);
  }

  public modificaPorId(id : number, producto): Observable<any>
  {
    return this.cliente.patch(`${this.API_PRODUCTOS_URL}/${id}`,producto,{
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      }
    });
  }
}
