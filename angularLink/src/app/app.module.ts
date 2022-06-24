import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './generales/footer/footer.component';
import { HeaderComponent } from './generales/header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ListaProductosModule } from './lista-productos/lista-productos.module';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './articulo/editar/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    FooterComponent,
    ArticuloComponent,
    NuevoProductoComponent,
    EditarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent
  ]
})
export class AppModule { }
