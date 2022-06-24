import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/generales/interfacesAPI/Producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmisorProductoService {
  URL: string = environment.ApiURL;

  constructor(
    private http: HttpClient,
  ) {

   }

  postProducto(unProducto:Producto){
    
    this.http.post(this.URL+'/productos',
      {
        descripcion: unProducto.descripcion,
        precio: unProducto.precio,
        stock: unProducto.stock
      }).subscribe();
  }

  putProducto(nuevoProducto: Producto) {
    this.http.put(this.URL+/productos/+nuevoProducto.idprod, {
      descripcion: nuevoProducto.descripcion,
      precio: nuevoProducto.precio,
      stock: nuevoProducto.stock
    }).subscribe();
  }
}
