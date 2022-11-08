import { Producto } from "./producto";

export interface Usuarios {
  id: string,
  nombre_usuario:string,
  pass:string,
  admin?:boolean,
}

export interface UsuarioConID extends Usuarios{
  id: string;
}

export interface UsuarioParcial extends Partial <Usuarios>{

}
export interface carro  extends Producto {
  idcarrito: string,
  idcliente:string,
  productos: Producto;
}
