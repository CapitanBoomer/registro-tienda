export interface Producto {
  nombre: string;
  foto : string;
  marca : string;
  precio_compra: number;
  precio_venta : number;
  largo : number;
  ancho : number;
  proveedor : string;
  stock : number ;
  fecha_elaboracion : number;
}

export interface ProductoConId extends Producto{
  id : string;
}

export interface ProductoParcial extends Partial <Producto>{

}
