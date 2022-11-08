export interface Producto {
  nombre: string;
  foto : string;
  marca : string;
  precio_compra: number;
  precio_venta : number;
  largo : number;
  ancho : number;
  color : string;
  proveedor : string;
  patente: string ;
  fecha_fabricacion : number;
}

export interface ProductoConId extends Producto{
  id : string;
}

export interface ProductoParcial extends Partial <Producto>{

}
