import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
