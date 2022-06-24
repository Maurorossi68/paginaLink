import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { EditarComponent } from './articulo/editar/editar/editar.component';
import { Error404Component } from './generales/error404/error404.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';

const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"productos", component: ListaProductosComponent},
  {path:"nuevoProducto", component: NuevoProductoComponent},
  {path:"articulo/:descripcion", component: ArticuloComponent},
  {path:"editarProducto/:descripcion", component: EditarComponent},
  {path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
