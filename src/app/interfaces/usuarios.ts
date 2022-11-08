export interface Usuarios {
  id: string,
  nombre_usuario:string,
  pass:string,
  admin?:string,
}

export interface UsusarioConID extends Usuarios{
  id: string;
}

export interface UsuarioParcial extends Partial <Usuarios>{

}
