import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaProductosRoutingModule } from './lista-productos-routing.module';
import { ListaProductosComponent } from './lista-productos.component';
import { ElementosComponent } from './elementos-producto/elementos.component';


@NgModule({
  declarations: [
    ListaProductosComponent,
    ElementosComponent
  ],
  imports: [
    CommonModule,
    ListaProductosRoutingModule
  ]
})
export class ListaProductosModule { }
