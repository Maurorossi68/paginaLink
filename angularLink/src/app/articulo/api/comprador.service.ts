import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/generales/interfacesAPI/Producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {
  private URL: string = environment.ApiURL;

  constructor(
    private http:HttpClient
  ) {}
  
  postProducto(unProducto:Producto, cantidad:number){
    this.http.post(this.URL+'/agregarAlCarrito',
      {
        dni: 41835967,
        id_producto: unProducto.idprod,
        cantidad: cantidad
      }).subscribe();
  }

  deleteProducto(id_producto:number){
    this.http.delete(this.URL+'/productos/'+id_producto).subscribe();
  }
}
