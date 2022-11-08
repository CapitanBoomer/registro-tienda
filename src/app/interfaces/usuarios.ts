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
