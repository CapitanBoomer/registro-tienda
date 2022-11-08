import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'listar-producto',
    loadChildren: ()=> import('./pages/lista-producto/lista-producto.module').then(m => m.ListaProductosPageModule)
  },
  {
    path : 'agrega-producto',
    loadChildren: ()=> import('./pages/agrega-producto/agrega-producto.module').then(m => m.AgregaProductoPageModule)
  },
  {
    path : 'elimina-producto/:idProducto',
    loadChildren: ()=> import('./pages/elimina-producto/elimina-producto.module').then(m => m.EliminaProductoPageModule)
  },
  {
    path : 'modifica-producto/:idProducto',
    loadChildren: ()=> import('./pages/modifica-producto/modifica-producto.module').then(m => m.ModificaProductoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path : 'detalle-producto/:idProducto',
    loadChildren: ()=> import('./pages/detalle-producto/detalle-producto.module').then(m => m.DetalleProductoPageModule)
  },
  {
    path: 'listar-producto-usuario-normal',
    loadChildren: () => import('./pages/listar-producto-usuario-normal/listar-producto-usuario-normal.module').then( m => m.ListarProductoUsuarioNormalPageModule)
  },
  {
    path: 'detalle/:idProducto',
    loadChildren: () => import('./pages/detalle-producto-usuario-normal/detalle-producto-usuario-normal.module').then( m => m.DetalleProductoUsuarioNormalPageModule)
  },  {
    path: 'listar-usuarios',
    loadChildren: () => import('./pages/listar-usuarios/listar-usuarios.module').then( m => m.ListarUsuariosPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
